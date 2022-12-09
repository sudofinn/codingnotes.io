import React from "react";
import Link from "next/link";
import Router from "next/router";

import html from "../../assets/html.png";
import css from "../../assets/css.png";
import javascript from "../../assets/javascript.png";
import reactImage from "../../assets/react.png";
import nextjs from "../../assets/nextjs.png";
import tailwind from "../../assets/tailwind.png";
import threejs from "../../assets/threejs.svg"
import vim from "../../assets/vim-original.svg"
import markdown from "../../assets/markdown-original.svg"

import first from "../../assets/covers/github.png"

import Head from 'next/head'


/* price tag somwhere probably should be added */


import Image from "next/image"

const Products = () => {
  const techs = [
    {
      id: 1,
      src: html,
      title: "HTML",
      style: "shadow-orange-500",
      href: "/htmlcss"
    },
    {
      id: 2,
      src: css,
      title: "CSS",
      style: "shadow-blue-500",
      href: "/htmlcss"
    },
     {
      id: 3,
      src: javascript,
      title: "JavaScript",
      style: "shadow-yellow-500",
      href: "/javascript"
    },
    {
      id: 4,
      src: reactImage,
      title: "ReactJS",
      style: "shadow-blue-700",
      href: "/reactjs"
    },
    {
      id: 5,
      src: nextjs,
      title: "NextJS",
      style: "shadow-white",
      href: "/nextjs"
    },
   
    
    {
      id: 6,
      src: vim,
      title: "(Neo)Vim",
      style: "shadow-green-600",
      href: "/neovim"
    }, 
   
    {
      id: 6,
      src: first,
      title: "Frontend Bundle",
      style: "shadow-purple-600",
      href: "/markdown"
    }, 

    {
      id: 6,
      src: first,
      title: "Markdown",
      style: "shadow-white",
      href: "/markdown"
    }, 
  ];

  function transferPage() {
    Router.push("/")
    
  }
  // -mr-8 seems to fix whitespace right */

  return (
    <div
    
      
      className="bg-black  min-h-screen -mr-8  "
    >
        <Head>
      <title>Products</title>
      <meta name="description" content="." />
    </Head>
      <div className="max-w-screen-lg mx-auto pt-12  text-center  p-4 flex flex-col justify-center w-full h-full text-white">
        <div className="mx-auto">
          <h1 className="text-6xl  lg:text-8xl  font-extrabold text-white   p-2 inline ">
            Products
          </h1>
          <p className="py-8 text-center mx-6 font-extrabold text-2xl">The notes and flashcards that can make you a better developer. </p>
        </div>

        <div className="w-full grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-16 text-center py-8 px-12 sm:px-0 cursor-pointer">
          {techs.map(({ id, src, title, style, href }) => (
            <Link
              key={id}
              className={`shadow-xl hover:shadow-md hover:scale-110  duration-500 py-2 rounded-xl ${style}`}
              href={href}
            >
              <Image src={src} alt="" className="w-20 mx-auto"  />
              <p className="mt-4" >{title} </p>
              
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Products