import React from "react";
import Link from "next/link";
import Router from "next/router";

import NavBar from "../../components/home/NavBar";
import Footer from "../../components/home/Footer";


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

import HTML from "../../assets/covers/htmlcss1_final.png"
import CSS from "../../assets/covers/htmlcss1_final.png"
import JavaScript from "../../assets/covers/javascript_1.png"
import TypeScript from "../../assets/covers/typescript_1.png"
import ReactJS from "../../assets/covers/react_1.png"
import NextJS from "../../assets/covers/nextjs_1.png"
import Vim from "../../assets/covers/vim_1.png"
import Frontend from "../../assets/covers/frontendbundle_2.png"
import Markdown from "../../assets/covers/markdown_1.png"
import IntroToFrontend from "../../assets/covers/intro_to_frontend_1_real.png"


import Head from 'next/head'


/* price tag somwhere probably should be added */


import Image from "next/image"

const Products = () => {
  const techs = [
    {
      id: 1,
      src: HTML,
      title: "HTML",
      intro: "Start your web development career by learning the foundations.",
      style: "shadow-orange-500",
      href: "/htmlcss",
      buttonstyle: "bg-orange-500 hover:bg-orange-400",
      buttontitle: "#html"
    },
    {
      id: 2,
      src: CSS,
      title: "CSS",
      intro: "Start your web development career by learning the foundations.",
      style: "shadow-blue-500",
      href: "/htmlcss",
      buttonstyle: "bg-blue-500 hover:bg-blue-400",
      buttontitle: "#css"
    },
     {
      id: 3,
      src: JavaScript,
      title: "JavaScript",
      intro: "Make your page interactive and reactive with a language that is used everywhere.",
      style: "shadow-yellow-500",
      href: "/javascript",
      buttonstyle: "bg-yellow-500 hover:bg-yellow-400",
      buttontitle: "#javascript"
      
    },
     {
      id: 4,
      src: TypeScript,
      title: "TypeScript",
      intro: "Learn the superset of JavaScript to become a pro.",
      style: "shadow-blue-500",
      href: "/typescript",
      buttonstyle: "bg-blue-500 hover:bg-blue-400",
      buttontitle: "#typescript"
      
    },
    {
      id: 5,
      src: ReactJS,
      title: "ReactJS",
      intro: "Embrace the most popular JavaScript Framework.",
      style: "shadow-blue-700",
      href: "/reactjs",
      buttonstyle: "bg-cyan-400 hover:bg-cyan-300",
      buttontitle: "#reactjs"
    },
    {
      id: 6,
      src: NextJS,
      title: "NextJS",
      intro: "Enjoy the Meta-Framework for React and it`s benefits.",
      style: "shadow-white",
      href: "/nextjs",
      buttonstyle: "bg-white hover:bg-gray-100",
      buttontitle: "#nextjs"
    },
   
    
    {
      id: 7,
      src: Vim,
      title: "(Neo)Vim",
      intro: "Achieve  legend status by using this editor.",
      style: "shadow-green-600",
      href: "/neovim",
      buttonstyle: "bg-green-600 hover:bg-green-500",
      buttontitle: "#neovim"
    }, 
   
    {
      id: 8,
      src: Frontend,
      title: "Frontend Bundle",
      intro: "Learn 5 technologies and save your money in the process.",
      style: "shadow-purple-600",
      href: "/frontendbundle",
      buttonstyle: "bg-purple-600 hover:bg-purple-500",
      buttontitle: "#frontend"
    }, 

    {
      id: 9,
      src: Markdown,
      title: "Markdown",
      intro: "Explore the  language that is used everywhere for a reason.",
      style: "shadow-white",
      href: "/markdown",
      buttonstyle: "bg-white hover:bg-gray-100",
      buttontitle: "#markdown"
    }, 
    {
      id: 10,
      src: IntroToFrontend,
      title: "Intro to Frontend",
      style: "shadow-pink-500",
      intro: "Get a nice introduction before jumping in the cold",
      href: "/frontendintro",
      buttonstyle: "bg-pink-500 hover:bg-pink-400",
      buttontitle: "#frontend"
    }, 
  ];

  function transferPage() {
    Router.push("/")
    
  }
  // -mr-32 seems to fix whitespace right */

  return (
    <div
    
      
      className="bg-gray-900 min-h-screen  "
    >
      <Head>
      <title>Products</title>
      <meta name="description" content="Products web development CSS JavaScript React"></meta>
      <meta name="author" content="Finn Guha"></meta>
  <meta name="viewport" content="width=device-width, initial-scale=1.0,maximum-scale=1.0, user-scalable=no"></meta>
  <meta name="theme-color" content="none"></meta>
  <meta name="mobile-web-app-capable" content="yes"></meta>
  <meta name="keywords" content="
frontend languages,
javascript ,
reactjs,
css,
html,
best front-end programming language,
web programming languages


   "></meta>
  

      <meta
          property="og:image"
          content="../public/favicon.ico"
        />
    </Head>   
    <NavBar />
      <div className="max-w-screen-lg mx-auto pt-12  text-center  p-4 flex flex-col justify-center w-full h-full text-white">
        <div className="mx-auto">
          <h1 className="text-4xl  lg:text-5xl  font-extrabold text-white   p-2 inline ">
            Packages
          </h1>
          <p className="py-8 text-center  mx-6 font-extrabold text-xl  sm:mx-[200px] lg:mx-[200px] xl:mx-[250px] 2xl:mx-[300px]">The notes and flashcards that  make you a (better) developer. </p>
        </div>

        <div className="w-full grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-16 text-center py-8 px-4 sm:px-0 cursor-pointer">
          {techs.map(({ id, src, title, intro, style, href , buttontitle, buttonstyle }) => (
            <Link
              key={id}
              className={`shadow-xl hover:shadow-md hover:scale-110  duration-500 py-2 rounded-xl ${style}`}
              href={href}
            >
              <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700
       ">
            <Image className="rounded-t-lg" src={src} alt="" />
    <div className="p-5">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{title}</h5>
        <p className="mb-3 font-light text-gray-700 dark:text-gray-400">{intro}</p>
        <button id="badge-dismiss-default" className={`inline-flex  items-center px-4 py-1  text-lg font-bold 
         text-black rounded ${buttonstyle}`}>
          {buttontitle}
        </button>
    </div>  
</div>
              
            </Link>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Products