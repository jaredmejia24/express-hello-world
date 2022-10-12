const express = require("express");
const helmet = require("helmet");
const compression = require("compression");
const morgan = require("morgan");
const cors = require("cors");
const path = require("path");

const dotenv = require("dotenv");

dotenv.config({ path: "./config.env" });

// Routers
const { emailsRouter } = require("./routes/emails.routes");

// Controllers
const { globalErrorHandler } = require("./controllers/error.controller");

// Init our Express app
const app = express();

// Enable Express app to receive JSON data
app.use(express.json());

// Enable static files on public folder (render files on html)
// Logs all request paths and method
app.use(function (req, res, next) {
  res.set("x-timestamp", Date.now());
  res.set("x-powered-by", "cyclic.sh");
  console.log(
    `[${new Date().toISOString()}] ${req.ip} ${req.method} ${req.path}`
  );
  next();
});

// #############################################################################
// This configures static hosting for files in /public that have the extensions
// listed in the array.
var options = {
  dotfiles: "ignore",
  etag: false,
  extensions: ["htm", "html", "css", "js", "ico", "jpg", "jpeg", "png", "svg"],
  index: ["index.html"],
  maxAge: "1m",
  redirect: false,
};

app.use(express.static("dist", options));

app.use(
  helmet({
    contentSecurityPolicy: false,
  })
);

app.use(compression());

if (process.env.NODE_ENV === "development") app.use(morgan("dev"));
else if (process.env.NODE_ENV === "production") app.use(morgan("combined"));

// Enable cors
app.use(cors());

// Define endpoints
app.use("/api/v1/emails", emailsRouter);

// Global error handler
app.use(globalErrorHandler);

app.use("/", (req, res, next) => {
  const indexPath = path.join(__dirname, "dist", "index.html");

  res.status(200).sendFile(indexPath);
});

// Catch all handler for all other request.
app.use("*", (req, res) => {
  res
    .json({
      at: new Date().toISOString(),
      method: req.method,
      hostname: req.hostname,
      ip: req.ip,
      query: req.query,
      headers: req.headers,
      cookies: req.cookies,
      params: req.params,
    })
    .end();
});

// Catch non-existing endpoints
app.all("*", (req, res) => {
  res.status(404).json({
    status: "error",
    message: `${req.method} ${req.url} does not exists in our server`,
  });
});

module.exports = { app };
