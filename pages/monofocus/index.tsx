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

import First from "../../assets/template_covers/focus2_1.png"
import Second from "../../assets/template_covers/focus2_2.png"
import Third from "../../assets/template_covers/focus2_3.png"
import Forth from "../../assets/template_covers/focus2_4.png"
import Fifth from "../../assets/template_covers/focus2_5.png"
import Six from "../../assets/template_covers/focus2_6.png"
import Seven from "../../assets/template_covers/focus2_7.png"
import Eight from "../../assets/template_covers/focus2_8.png"



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
      title: "Small",
      style: "shadow-black bg-gradient-to-r from-gray-300 to-black",
      href: "https://vimfinn.gumroad.com/l/monofocus?option=Xn3qsPT_Dym9W6k5oh02eQ%3D%3D&_gl=1*5zmf5k*_ga*NjU1NjY0OTk2LjE2NDgwNjQ1Nzc.*_ga_6LJN6D94N6*MTY3MTQ1NDQ3Ny4yMTQuMS4xNjcxNDU1MDkwLjAuMC4w&wanted=true",
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
      price: "$5"
    },
     {
      id: 1,
      src: html,
      title: "Large",
      style: "shadow-black bg-gradient-to-r from-teal-500 to-purple-700",
      href: "https://vimfinn.gumroad.com/l/monofocus?wanted=true",
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
      price: "$9"
    },
     {
      id: 1,
      src: html,
      title: "Medium",
      style: "shadow-black bg-gradient-to-r from-gray-300 to-black",
      href: "https://vimfinn.gumroad.com/l/monofocus?option=AlJu3ClWBWAZ1OtsFbKv-g%3D%3D&_gl=1*5zmf5k*_ga*NjU1NjY0OTk2LjE2NDgwNjQ1Nzc.*_ga_6LJN6D94N6*MTY3MTQ1NDQ3Ny4yMTQuMS4xNjcxNDU1MDkwLjAuMC4w&wanted=true",
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
      price: "$7"
    },
     
    
  ]
 


  return (

    <div>
         <Head>
      <title>Mono Focus OS</title>
      <meta name="description" content="Mono Focus OS Notion Template" />
    </Head>

    


     <div className='text-center'>
            <h1  data-aos="fade-up" className="text-4xl lg:text-7xl mt-8 font-extrabold">Mono Focus OS</h1>
            <Link href="https://vimfinn.gumroad.com/l/monofocus">
             <button className=" bg-gray-300 shadow-md shadow-black text-white px-4 py-3 lg:px-8 lg:py-6
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
                      <li className="mt-6 mb-6">An entire Operating Sytem designed to faciliate your day.</li>
                      <li className="mt-6 mb-6">Be efficient at work and on your side hustle !.</li >

            </ul>
             

            <h1  data-aos="fade-up" className="text-6xl xl:text-8xl  ml-8 xl:ml-32    mt-24 font-extrabold">Why it works ! </h1>
            <ul className=" list-disc ml-16 xl:ml-32 mt-8 text-2xl xl:text-4xl mr-8 xl:mr-32">
                      <p className="mt-6 mb-6">Notion is an incredible app that allows for virtually everything
                      a productive person needs.</p>
                      

            </ul>
            <Link href="https://www.notion.so/pricing">
             <button className="text-black shadow-md   dark:bg-black dark:text-white px-7 py-5
                mx-auto  rounded-md hover:scale-110 duration-300 ml-16 xl:ml-32 mt-4
                bg-gradient-to-r from-orange-500 to-red-500 hover:from-black hover:to-gray-300 hover:shadow-xl hover:shadow-black  hover:bg-whit
                ">
             Get Notion now !
            </button>
            </Link>
                      

              
            </div>



        <div className=''>
            <Image className=" mt-4 md:mt-32 xl:mt-64  w-[800px] h-[600px]   2xl:w-[1000px] 2xl:h-[800px]  " src={FooterImage} alt="The Header"     />
      </div>


    </div>


           <div className=" grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3  mt-32 text-center  sm:px-0 cursor-pointer">
          {techs.map(({ id, src, title, style, href , icon , text , price}) => (
            <div
              key={id}
              className={`shadow-xl mx-8  lg:mx-16 mb-12 hover:shadow-md hover:bg-gray-100 text-black h-96 hover:scale-110 duration-500 py-2 rounded-xl ${style}`}
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