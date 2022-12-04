import React from "react";
import Link from "next/link";
import Router from "next/router";

import first from "../../assets/covers/github.png"
import second from "../../assets/covers/github.png"
import third from  "../../assets/covers/github.png"



/* price tag somwhere probably should be added */


import Image from "next/image"

const Templates = () => {
  const techs = [
    {
      id: 1,
      src: first,
      title: "Moodboard + Organizer",
      style: "shadow-green-500",
      href: "/moodboardorganizer"
    },
    {
      id: 2,
      src: second,
      title: "Complete Focus OS",
      style: "shadow-white",
      href: "/monofocus"
    },
     {
      id: 3,
      src: third,
      title: "Journal + Habit Tracker",
      style: "shadow-purple-500",
      href: "/journalhabittracker"
    },
     
  ];

  function transferPage() {
    Router.push("/")
    
  }

  return (
    <div
      
      className="bg-black min-h-screen -mr-8  "
    >
      <div className="max-w-screen-lg mx-auto pt-12 text-center p-4 flex flex-col justify-center w-full h-full text-white">
        <div className="mx-auto">
          <h1 className="text-6xl lg:text-8xl font-extrabold text-white   p-2  ">
            Templates
          </h1>
          <p className="py-8 text-center mr-8 font-extrabold text-xl">The systems that provide you with efficient coding. </p>
        </div>

        <div className="w-full grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-16 text-center py-8 px-12 sm:px-0 cursor-pointer">
          {techs.map(({ id, src, title, style, href }) => (
            <div
              key={id}
              className={`shadow-xl hover:shadow-md hover:scale-110 duration-500 py-2 rounded-xl ${style}`}
              onClick={(() => Router.push(`${href}`))}
            >
              <Image src={src} alt="" className="w-20 mx-auto" />
              <p className="mt-4">{title}</p>
              <Link href={href}></Link>
              
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Templates