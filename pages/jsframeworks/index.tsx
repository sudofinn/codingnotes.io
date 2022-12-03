import React from "react";
import Link from "next/link";
import Router from "next/router";

import reactImage from "../../assets/react.png";
import nextjs from "../../assets/nextjs.png";
import threejs from "../../assets/threejs.svg"


/* price tag somwhere probably should be added */


import Image from "next/image"

const Products = () => {
  const techs = [
    {
      id: 1,
      src: reactImage,
      title: "ReactJS",
      style: "shadow-blue-500",
      href: "/reactjs"
    },
    {
      id: 2,
      src: nextjs,
      title: "NextJS",
      style: "shadow-white",
      href: "/nextjs"
    },
     {
      id: 3,
      src: threejs,
      title: "ThreeJS",
      style: "shadow-white",
      href: "/threejs"
    },
    
  ];

  function transferPage() {
    Router.push("/")
    
  }

  return (
    <div
      
      className="bg-black  min-h-screen "
    >
      <div className="max-w-screen-lg mx-auto pt-12 text-center p-4 flex flex-col justify-center w-full h-full text-white">
        <div className="mx-auto">
          <h1 className="text-6xl  lg:text-8xl  font-extrabold text-white   p-2 inline ">
            Js Frameworks
          </h1>
          <p className="py-8 text-center font-extrabold text-2xl">Learn the Frameworks and Meta-Frameworks that make you a great developer. </p>
        </div>

        <div className="w-full grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-16 text-center py-8 px-12 sm:px-0 cursor-pointer">
          {techs.map(({ id, src, title, style, href }) => (
            <div
              key={id}
              className={`shadow-xl hover:shadow-md hover:scale-110 duration-500 py-2 rounded-xl ${style}`}
              onClick={(() => Router.push(`${href}`))}
            >
              <Image src={src} alt="" className="w-20 mx-auto"  />
              <p className="mt-4" >{title} </p>
              
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Products