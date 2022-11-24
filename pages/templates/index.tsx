import React from "react";
import Link from "next/link";
import Router from "next/router";

import html from "../../assets/html.png";
import css from "../../assets/css.png";
import javascript from "../../assets/javascript.png";
import reactImage from "../../assets/react.png";
import nextjs from "../../assets/nextjs.png";
import tailwind from "../../assets/tailwind.png";

/* price tag somwhere probably should be added */


import Image from "next/image"

const Templates = () => {
  const techs = [
    {
      id: 1,
      src: html,
      title: " Moodboard + Organizer",
      style: "shadow-orange-500",
      href: "/html"
    },
    {
      id: 2,
      src: css,
      title: "CRM",
      style: "shadow-blue-500",
      href: "/css"
    },
     {
      id: 3,
      src: tailwind,
      title: "Second Brain",
      style: "shadow-sky-400",
      href: "/tailwind"
    },
    {
      id: 4,
      src: javascript,
      title: "Dasbhoard",
      style: "shadow-yellow-500",
      href: "/javascript"
    },
    {
      id: 5,
      src: reactImage,
      title: "Simple Developer",
      style: "shadow-blue-600",
      href: "/react"
    },
   
    {
      id: 6,
      src: nextjs,
      title: "Supercharge",
      style: "shadow-white",
      href: "/next"
    }, 
  ];

  function transferPage() {
    Router.push("/")
    
  }

  return (
    <div
      
      className="bg-black  min-h-screen "
    >
      <div className="max-w-screen-lg mx-auto pt-12 p-4 flex flex-col justify-center w-full h-full text-white">
        <div className="mx-auto">
          <h1 className="text-7xl font-bold text-white  border-b-4 border-indigo-400 p-2 inline ">
            Your Templates !
          </h1>
          <p className="py-8 text-center">Learn the best with the best !</p>
        </div>

        <div className="w-full grid grid-cols-1 sm:grid-cols-3 gap-12 text-center py-8 px-12 sm:px-0 cursor-pointer">
          {techs.map(({ id, src, title, style, href }) => (
            <div
              key={id}
              className={`shadow-md hover:scale-105 duration-500 py-2 rounded-lg ${style}`}
              onClick={(() => Router.push(`${href}`))}
            >
              <Image src={src} alt="" className="w-20 mx-auto" />
              <p className="mt-4">{title}</p>
              
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Templates