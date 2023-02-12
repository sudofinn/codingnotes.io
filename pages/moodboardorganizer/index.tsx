import React from 'react'
import Image from 'next/image'
import Link from "next/link"
import Head from "next/head"

import FooterImage from "../../assets/web-design_green.svg"

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

import First from "../../assets/template_covers/pro_1.png"
import Second from "../../assets/template_covers/moodboard_2.png"



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
  
];

const techs = [
    {
      id: 1,
      src: html,
      title: "Notion",
      style: "shadow-black bg-gradient-to-r from-gray-400 to-green-600",
      href: "https://vimfinn.gumroad.com/l/programmingmoodboardorganizer?wanted=true",
      icon: 
      <>
        <GrNotes size={70} />
      </>,
      text:
      <>
       <ul>
                <li >The Template !</li>
              
       </ul>
      </>,
      price: "$0"
    },
    
  ]
 


  return (

    <div>
      <Head>
      <title>Moodboard and Organizer</title>
      <meta name="description" content="Moodboard and Organizer Notion Template"></meta>
      <meta name="author" content="Finn Guha"></meta>
  <meta name="viewport" content="width=device-width, initial-scale=1.0,maximum-scale=1.0, user-scalable=no"></meta>
  <meta name="theme-color" content="none"></meta>
  <meta name="mobile-web-app-capable" content="yes"></meta>
  <meta name="keywords" content="



notion templates,
notion page template,
notion shopping template,
notion marketing template,
notion life planner template,
household planner notion,
notion template household,
notion template lecture
   "></meta>
  

      <meta
          property="og:image"
          content="../public/favicon.ico"
        />
    </Head>       
 

    


     <div className='text-center'>
            <h1  data-aos="fade-up" className="text-4xl lg:text-7xl mt-8 font-extrabold">Moodboard and Organizer</h1>

            <Link href="https://vimfinn.gumroad.com/l/programmingmoodboardorganizer">
             <button className=" bg-green-300 shadow-md shadow-black text-white px-4 py-3 lg:px-8 lg:py-6
                mx-auto  rounded-md hover:scale-110 duration-300 mt-8 hover:shadow-xl hover:shadow-black hover:text-white hover:bg-black
                ">
              Discover this template
            </button>
            </Link>

    </div>
     <div className="slide-container mt-8 lg:mt-0 mx-4 lg:mx-32">
        <Slide transitionDuration={500}>
         {slideImages.map((slideImage, index)=> (
            <div className="each-slide " key={index}>
               <Image className=" rounded-xl mx-auto mt-8 shadow-xl shadow-black" src={slideImage.src} alt="The Header" width={1200} height={200} >

               </Image>
            </div>
          ))} 
        </Slide>
      </div>

        <div className='flex flex-wrap lg:flex-nowrap justify-between'>

        <div className=''>
            <h1  data-aos="fade-up" className="text-6xl xl:text-8xl  ml-8 xl:ml-32   mt-48 font-extrabold">What you get ! </h1>
            <ul className=" list-disc  ml-16 xl:ml-32 mt-8 text-2xl xl:text-4xl mr-8 xl:mr-32">
                      <li className="mt-6 mb-6">A well designed Moodboard and Organizer for your life as a programmer</li>
                      <li className="mt-6 mb-6">Easily structure your day for maximum productivity.</li >
                      <li className="mt-6 mb-6"> Get a system for free</li >

            </ul>
             

            <h1  data-aos="fade-up" className="text-6xl xl:text-8xl  ml-8 xl:ml-32    mt-24 font-extrabold">Why it works ! </h1>
            <ul className=" list-disc ml-16 xl:ml-32 mt-8 text-2xl xl:text-4xl mr-8 xl:mr-32">
                      <p className="mt-6 mb-6">Notion is an incredible app that allows for virtually everything
                      a productive person needs.</p>
                      

            </ul>
            <Link href="https://www.notion.so/pricing">
             <button className="text-black shadow-md   dark:bg-black dark:text-white px-7 py-5
                mx-auto  rounded-md hover:scale-110 duration-300 ml-16 xl:ml-32 mt-4
                bg-gradient-to-r from-gray-400 to-green-600 hover:from-green-600 hover:to-gray-400 hover:shadow-xl hover:shadow-black  hover:bg-whit
                ">
             Get Notion now !
            </button>
            </Link>
                      

              
            </div>



        <div className=''>
            <Image className=" mt-4 md:mt-32 xl:mt-64  w-[800px] h-[600px]   2xl:w-[1000px] 2xl:h-[800px]  " src={FooterImage} alt="The Header"     />
      </div>


    </div>


             <div className=" justify-center mb-16 mt-32 mx-0 md:mx-16 lg:mx-32  xl:mx-96 text-center  cursor-pointer">
          {techs.map(({ id, src, title, style, href , icon , text , price}) => (
            <div
              key={id}
              className={`shadow-xl mx-8 lg:mx-16 hover:shadow-md hover:bg-gray-100 text-black h-96 hover:scale-110 duration-500 py-2 rounded-xl ${style}`}
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