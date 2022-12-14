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

import First from "../../assets/covers/vim_1.png"
import Second from "../../assets/covers/vim_2_final.png"
import Third from "../../assets/covers/vim_3.png"
import Forth from "../../assets/covers/vim_4.png"
import Fifth from "../../assets/covers/vim_5.png"
import Six from "../../assets/covers/vim_6.png"
import Seven from "../../assets/covers/vim_7.png"



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
 
];

const techs = [
    {
      id: 1,
      src: html,
      title: "Notes",
      style: "shadow-black",
      href: "https://vimfinn.gumroad.com/l/vim?option=0fT1ZJdCKDm3GC5PQYDANA%3D%3D&_gl=1*uqbq2b*_ga*NjU1NjY0OTk2LjE2NDgwNjQ1Nzc.*_ga_6LJN6D94N6*MTY3MDg2NDY3NS4xOTQuMS4xNjcwODY3MzY0LjAuMC4w&wanted=true",
      icon: 
      <>
        <GrNotes size={70} />
      </>,
      text:
      <>
      <ul>
                <li >30 + pages</li>
                <li>10 + visuals</li>
       </ul>
      </>,
      price: "$3"
    },
    {
      id: 2,
      src: css,
      title: "Both",
      style: "shadow-black bg-gradient-to-r from-gray-500 to-green-600",
      href: "https://vimfinn.gumroad.com/l/vim?wanted=true",
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
      price: "$5"
    },
     {
      id: 3,
      src: javascript,
      title: "Flashcards",
      style: "shadow-black ",
      href: "https://vimfinn.gumroad.com/l/vim?option=xHxqI3SwXOPnyjOoje4YaQ%3D%3D&_gl=1*1xtr2qf*_ga*NjU1NjY0OTk2LjE2NDgwNjQ1Nzc.*_ga_6LJN6D94N6*MTY3MDg2NDY3NS4xOTQuMS4xNjcwODY3MzY0LjAuMC4w&wanted=true",
       icon: 
      <>
        <BsPen size={70} />
      </>,
       text:
      <>
      <ul>
                 <li >250+ flashcards</li>
                <li>Advanced algorithms to learn efficient.</li>
       </ul>
      </>,
      price: "$3"
    },
  ]
 


  return (

    <div>

         <Head>
      <title>Vim and Neovim</title>
      <meta name="description" content="Vim and Neovim Notes and Flashcards" />
    </Head>

    


     <div className='text-center'>
            <h1  data-aos="fade-up" className="text-4xl lg:text-7xl mt-8 font-extrabold">Learn the editors for the pros !</h1>
            <Link href="https://vimfinn.gumroad.com/l/vim">
             <button className=" bg-green-600 shadow-md shadow-black text-white px-4 py-3 lg:px-8 lg:py-6
                mx-auto  rounded-md hover:scale-110 duration-300 mt-8 hover:shadow-xl hover:shadow-black hover:text-white hover:bg-black
                ">
              Discover the language
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
                      <li className="mt-6 mb-6">30+ Notion pages and 250+ Anki Flashcards.</li>
                      <li className="mt-6 mb-6">Every concept you need to know to master Vim and Neovim.</li >
                      <li className="mt-6 mb-6"> 10+ graphics and 20+ practical examples that further help you.</li >

            </ul>
            <Link href="https://www.notion.so/pricing">
             <button className="text-black shadow-md   dark:bg-black dark:text-white px-7 py-5
                mx-auto  rounded-md hover:scale-110 duration-300 ml-16 xl:ml-32 mt-4
                bg-gradient-to-r from-green-600 to-gray-500   hover:from-gray-500 hover:to-green-600 hover:shadow-xl hover:shadow-black  hover:bg-white
                ">
             Get Notion for free 
            </button>
            </Link>

            <h1  data-aos="fade-up" className="text-6xl xl:text-8xl  ml-8 xl:ml-32    mt-24 font-extrabold">Why it works ! </h1>
            <ul className=" list-disc ml-16 xl:ml-32 mt-8 text-2xl xl:text-4xl mr-8 xl:mr-32">
                      <li className="mt-6 mb-6">A big collection of various topics.</li>
                      <li className="mt-6 mb-6"> Advanced algorithms to learn right.</li>
                      

            </ul>
            <Link href="https://apps.ankiweb.net/">
             <button className="text-black shadow-md   dark:bg-black dark:text-white px-7 py-5
                mx-auto  rounded-md hover:scale-110 duration-300 ml-16 xl:ml-32 mt-4
                bg-gradient-to-r from-gray-500  to-green-600 hover:from-green-600 hover:to-gray-500 hover:shadow-xl hover:shadow-black  hover:bg-whit
                ">
             Get Anki now !
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