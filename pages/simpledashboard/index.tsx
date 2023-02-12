import React from 'react'
import Image from 'next/image'
import Link from "next/link"
import Head from "next/head"

import FooterImage from "../../assets/web-design_gray.svg"

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

import First from "../../assets/template_covers/simple_dashboard_1.png"
import Second from "../../assets/template_covers/simple_dashboard_2.png"




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
      title: "The OS",
      style: "shadow-black bg-gradient-to-r from-purple-500 to-orange-200",
      href: "https://vimfinn.gumroad.com/l/simpledashboard?wanted=true",
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
      <title>Simple Dashboard</title>
      <meta name="description" content="Free Notion Template dashboard "></meta>
      <meta name="author" content="Finn Guha"></meta>
  <meta name="viewport" content="width=device-width, initial-scale=1.0,maximum-scale=1.0, user-scalable=no"></meta>
  <meta name="theme-color" content="none"></meta>
  <meta name="mobile-web-app-capable" content="yes"></meta>
  <meta name="keywords" content="


notion dashboard templates free,
notion dashboard templates aesthetic,
best notion dashboard templates,
notion dashboard student,
notion dashboard inspiration,
notion dashboard reddit,
notion templates

   "></meta>
  

      <meta
          property="og:image"
          content="../public/favicon.ico"
        />
    </Head>     


     <div className='text-center'>
            <h1  data-aos="fade-up" className="text-4xl lg:text-7xl mt-8 font-extrabold">The Simple Dashboard</h1>
            <Link href="https://vimfinn.gumroad.com/l/monofocus">
             <button className=" bg-gradient-to-r from-purple-500 to-orange-300 shadow-md shadow-black text-white px-4 py-3 lg:px-8 lg:py-6
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
                      <li className="mt-6 mb-6">A simple Dashboard that helps you stay productive.</li>
                      <li className="mt-6 mb-6">Organize in a simple manner. .</li >

            </ul>
             

            <h1  data-aos="fade-up" className="text-6xl xl:text-8xl  ml-8 xl:ml-32    mt-24 font-extrabold">Why it works ! </h1>
            <ul className=" list-disc ml-16 xl:ml-32 mt-8 text-2xl xl:text-4xl mr-8 xl:mr-32">
                      <p className="mt-6 mb-6">Notion is an incredible app that allows for virtually everything
                      a productive person needs.</p>
                      

            </ul>
            <Link href="https://www.notion.so/pricing">
             <button className="text-black shadow-md   dark:bg-black dark:text-white px-7 py-5
                mx-auto  rounded-md hover:scale-110 duration-300 ml-16 xl:ml-32 mt-4
                bg-gradient-to-r from-gray-300 to-black hover:from-black hover:to-gray-300 hover:shadow-xl hover:shadow-black  hover:bg-whit
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