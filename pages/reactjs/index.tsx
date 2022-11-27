import React from 'react'
import Image from 'next/image'
import Link from "next/link"

import FooterImage from "../../assets/web-design_blue.svg"

import {GrNotes} from "react-icons/gr"
import {BsPen} from "react-icons/bs"
import {GiCutDiamond} from "react-icons/gi"
import {IoMdCheckmarkCircle} from "react-icons/io" // for li items in pricing card */

import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css'

import Router from "next/router";

import html from "../../assets/html.png";
import css from "../../assets/css.png";
import javascript from "../../assets/javascript.png";

import First from "../../assets/covers/react_1.png"
import Second from "../../assets/covers/react_2.png"
import Third from "../../assets/covers/react_3.png"
import Forth from "../../assets/covers/react_4.png"
import Fifth from "../../assets/covers/react_5.png"
import Six from "../../assets/covers/react_6.png"
import Seven from "../../assets/covers/react_7.png"
import Eight from "../../assets/covers/react_8.png"



const Index = () => {

  const slideImages = [
  {
    src: First,
    caption: 'Slide 1'
  },
  {
    src: Second,
    caption: 'Slide 2'
  },
  {
    src: Third,
    caption: 'Slide 3'
  },
  {
    src: Forth,
    caption: 'Slide 4'
  },
  {
    src: Fifth,
    caption: 'Slide 5'
  },
  {
    src: Six,
    caption: 'Slide 6'
  },
  {
    src: Seven,
    caption: 'Slide 7'
  },
  {
    src: Eight,
    caption: 'Slide 8'
  },
];

const techs = [
    {
      id: 1,
      src: html,
      title: "Notes",
      style: "shadow-black",
      href: "/beforelaunch",
      icon: 
      <>
        <GrNotes size={70} />
      </>,
      text:
      <>
      <ul>
                <li >60+ pages</li>
                <li>30+ examples</li>
       </ul>
      </>,
      price: "$4"
    },
    {
      id: 2,
      src: css,
      title: "Both",
      style: "shadow-black bg-gradient-to-r from-gray-500 to-cyan-300",
      href: "/beforelaunch",
       icon: 
      <>
        <GiCutDiamond size={70} />
      </>,
       text:
      <>
      <ul>
                <li >All Notes and Flashcards</li>
              
       </ul>
      </>,
      price: "$7"
    },
     {
      id: 3,
      src: javascript,
      title: "Flashcards",
      style: "shadow-black ",
      href: "/beforelaunch",
       icon: 
      <>
        <BsPen size={70} />
      </>,
       text:
      <>
      <ul>
                 <li >400+ flashcards</li>
                <li>Advanced algorithms to learn efficient</li>
       </ul>
      </>,
      price: "$4"
    },
  ]
 


  return (

    <div>

    


     <div className='text-center'>
            <h1  data-aos="fade-up" className="text-7xl mt-8 font-extrabold">Learn the Nb.1 JavaScript Framework </h1>
             <button className=" bg-cyan-300 shadow-md shadow-black text-white  px-8 py-6
                mx-auto  rounded-md hover:scale-110 duration-300 mt-8 hover:shadow-xl hover:shadow-black hover:text-white hover:bg-black
                ">
              Discover with a video !
            </button>

    </div>
     <div className="slide-container mx-32">
        <Slide  transitionDuration={500}>
         {slideImages.map((slideImage, index)=> (
            <div className="each-slide " key={index}>
               <Image className=" rounded-xl mx-auto mt-8 shadow-xl shadow-black" src={slideImage.src} alt="The Header" width={1200} height={200} >

               </Image>
            </div>
          ))} 
        </Slide>
      </div>

        <div className='flex justify-between'>

        <div className=''>
            <h1  data-aos="fade-up" className="text-8xl  ml-32   mt-48 font-extrabold">What you get ! </h1>
            <ul className=" list-disc ml-40 mt-8 text-4xl mr-64">
                      <li className="mt-6 mb-6">60+ Notion pages and 400+ Anki Flashcards.</li>
                      <li className="mt-6 mb-6">Every concept you need to know to master HTML and CSS.</li >
                      <li className="mt-6 mb-6"> 15+ graphics and 30+ practical examples that further help you.</li >

            </ul>

            <h1  data-aos="fade-up" className="text-8xl  ml-32   mt-16 font-extrabold">Why it works ! </h1>
            <ul className=" list-disc ml-40 mt-8 text-4xl mr-64">
                      <li className="mt-6 mb-6">A big collection of various topics.</li>
                      <li className="mt-6 mb-6"> Advanced algorithms to learn right.</li>

            </ul>
                      

              
            </div>



        <div className=''>
            <Image className="mt-32 mr-48   " src={FooterImage} alt="The Header"  width={1000}
            height={500}   />
      </div>


    </div>


        <div className=" grid grid-cols-1 sm:grid-cols-3  mt-32 text-center py-8 px-12 sm:px-0 cursor-pointer">
          {techs.map(({ id, src, title, style, href , icon , text , price}) => (
            <div
              key={id}
              className={`shadow-xl mx-16 hover:shadow-md hover:bg-gray-100 text-black h-96 hover:scale-110 duration-500 py-2 rounded-xl ${style}`}
              onClick={(() => Router.push(`${href}`))}
            >
              <h1   className="w-16 mx-auto mt-8 mb-6"> {icon} </h1>
              <p className="mt-4 text-4xl">{title}</p>
              <Link href={href}></Link>
              {text}

                  <button className="text-black shadow-md  bg-white dark:bg-black dark:text-white  px-7 py-5
                  rounded-md hover:scale-110 duration-300  mt-8 hover:shadow-xl hover:shadow-black hover:text-black hover:bg-white
                ">
              I want this !
            </button>

            <p className="mt-4 text-4xl">{price}</p>
              
            </div>
          ))}
        </div>

      </div>

      
    

  )
}

export default Index