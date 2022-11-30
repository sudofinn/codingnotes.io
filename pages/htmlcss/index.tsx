import React from 'react'
import Image from 'next/image'
import Link from "next/link"

import FooterImage from "../../assets/web-design_orange.svg"

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

import First from "../../assets/covers/htmlcss1_final.png"
import Second from "../../assets/covers/htmlcss2.png"
import Third from "../../assets/covers/htmlcss7.png"
import Forth from "../../assets/covers/htmlcss8.png"
import Fifth from "../../assets/covers/htmlcss3.png"
import Six from "../../assets/covers/htmlcss4.png"
import Seven from "../../assets/covers/htmlcss5.png"
import Eight from "../../assets/covers/htmlcss6_final.png"



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
                <li >70 + pages</li>
                <li>40+ visuals</li>
       </ul>
      </>,
      price: "$4"
    },
    {
      id: 2,
      src: css,
      title: "Both",
      style: "shadow-black bg-gradient-to-r from-blue-500 to-orange-600",
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
                 <li >500+ flashcards</li>
                <li>Advanced algorithms to learn efficient.</li>
       </ul>
      </>,
      price: "$4"
    },
  ]
 


  return (

    <div>

    


     <div className='text-center'>
            <h1  data-aos="fade-up" className="text-7xl mt-8 font-extrabold">Learn the Fundamentals - HTML and CSS </h1>
             <button className=" bg-orange-600 shadow-md shadow-black text-white  px-8 py-6
                mx-auto  rounded-md hover:scale-110 duration-300 mt-8 hover:shadow-xl hover:shadow-black hover:text-white hover:bg-black
                ">
              Discover with a video !
            </button>

    </div>
     <div className="slide-container mx-32">
        <Slide transitionDuration={500}>
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
                      <li className="mt-6 mb-6">70+ Notion pages and 500+ Anki Flashcards.</li>
                      <li className="mt-6 mb-6">Every concept you need to know to master HTML and CSS.</li >
                      <li className="mt-6 mb-6"> 40+ graphics and 25+ practical examples that further help you.</li >

            </ul>
             <button className="text-black shadow-md   dark:bg-black dark:text-white px-7 py-5
                mx-auto  rounded-md hover:scale-110 duration-300 ml-32 mt-4
                bg-gradient-to-r from-blue-500  to-orange-600 hover:from-orange-600 hover:to-blue-500 hover:shadow-xl hover:shadow-black  hover:bg-white
                ">
             Get Notion for free 
            </button>

            <h1  data-aos="fade-up" className="text-8xl  ml-32   mt-16 font-extrabold">Why it works ! </h1>
            <ul className=" list-disc ml-40 mt-8 text-4xl mr-64">
                      <li className="mt-6 mb-6">A big collection of various topics.</li>
                      <li className="mt-6 mb-6"> Advanced algorithms to learn right.</li>
                      

            </ul>
             <button className="text-black shadow-md   dark:bg-black dark:text-white px-7 py-5
                mx-auto  rounded-md hover:scale-110 duration-300 ml-32 mt-4
                bg-gradient-to-r from-orange-600  to-blue-500 hover:from-blue-500 hover:to-orange-600 hover:shadow-xl hover:shadow-black  hover:bg-whit
                ">
             Get Anki now !
            </button>
                      

              
            </div>



        <div className=''>
            <Image className="mt-64 mr-48   " src={FooterImage} alt="The Header"  width={1000}
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