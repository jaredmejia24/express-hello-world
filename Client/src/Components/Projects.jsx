import React from "react";
import ecommerce from "../images/proyecto e-commerce.png";
import pokedex from "../images/proyecto pokedex.png";
import crud from "../images/project CRUD.png";
import rickAndMorty from "../images/proyecto rick and morty.png";

const Projects = () => {
  return (
    <section className="mt-5 pb-[8rem]">
      <h3 className="text-2xl border-b-4 w-fit mx-auto font-semibold border-gray-400">
        My projects
      </h3>
      <div className="flex flex-wrap mt-8 w-[90%] max-w-[1300px] mx-auto justify-center gap-5 md:grid md:grid-cols-2 md:gap-8">
        <div className="border-2 border-black overflow-hidden ">
          <a className="appear-info" href="https://api-e-commerce.netlify.app/" target="_blank">
            <img
              className="mb-[-4.1rem] md:w-auto relative grayscale hover:grayscale-0 cursor-pointer grayscale-animation object-contain "
              src={ecommerce}
              alt="ecommerce"
            />
          </a>
          <div className="relative h-[4rem] px-3 bg-[rgba(0,0,0,0.8)] text-[#ff5080] projects-animation">
            <h4 className="font-bold text-xl pt-1">E-commerce</h4>
            <p className="text-lg font-semibold">
              Login into an account and buy products
            </p>
          </div>
        </div>
        <div className="border-2 border-black overflow-hidden ">
          <a className="appear-info" href="https://p0k3w1k1.netlify.app/#/pokedex" target="_blank">
            <img
              className="mb-[-4rem] md:w-auto relative grayscale hover:grayscale-0 cursor-pointer grayscale-animation object-contain"
              src={pokedex}
              alt="pokedex"
            />
          </a>
          <div className="relative h-[4rem] px-3 bg-[rgba(0,0,0,0.8)] text-[#ff5080] projects-animation">
            <h4 className="font-bold text-xl pt-1">Pokedex</h4>
            <p className="text-lg font-semibold">
              Search for your favorite pokemon
            </p>
          </div>
        </div>
        <div className="border-2 border-black overflow-hidden ">
          <a className="appear-info" href="https://crudwithapi.netlify.app/" target="_blank">
            <img
              className="mb-[-4.1rem] md:w-auto relative grayscale hover:grayscale-0 cursor-pointer grayscale-animation object-contain"
              src={crud}
              alt="CRUD"
            />
          </a>
          <div className="relative h-[4rem] px-3 bg-[rgba(0,0,0,0.8)] text-[#ff5080] projects-animation">
            <h4 className="font-bold text-xl pt-1">CRUD</h4>
            <p className="text-lg font-semibold">
              Create, read, update and delete users
            </p>
          </div>
        </div>
        <div className="border-2 border-black overflow-hidden ">
          <a className="appear-info" href="https://rickandmortylocations.netlify.app/" target="_blank">
            <img
              className="mb-[-4.1rem] md:w-auto relative grayscale hover:grayscale-0 cursor-pointer grayscale-animation object-contain"
              src={rickAndMorty}
              alt="Rick and Morty Wiki"
            />
          </a>
          <div className="relative h-[4rem] px-3 bg-[rgba(0,0,0,0.8)] text-[#ff5080] projects-animation">
            <h4 className="font-bold text-xl pt-1">Rick and morty wiki</h4>
            <p className="text-lg font-semibold">
              Search for your favorite locations in rick and morty
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
