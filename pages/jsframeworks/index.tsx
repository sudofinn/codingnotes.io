import React from "react";
import Link from "next/link";
import Router from "next/router";
import Head from "next/head"

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

      <Head>
      <title>JS Frameworks </title>
      <meta name="description" content="JavaScript Frameworks like ReactJS and NextJS"></meta>
      <meta name="author" content="Finn Guha"></meta>
  <meta name="viewport" content="width=device-width, initial-scale=1.0,maximum-scale=1.0, user-scalable=no"></meta>
  <meta name="theme-color" content="none"></meta>
  <meta name="mobile-web-app-capable" content="yes"></meta>
  <meta name="keywords" content="


javascript frameworks list,
javascript frontend frameworks,
javascript libraries,
new javascript frameworks,
javascript frameworks popularity,
javascript frameworks comparison,
javascript frameworks 2022
   "></meta>
  

      <meta
          property="og:image"
          content="../public/favicon.ico"
        />
    </Head>   

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