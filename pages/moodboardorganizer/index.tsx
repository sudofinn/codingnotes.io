import React from 'react'
import Image from 'next/image'
import Link from "next/link"

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
      src: css,
      title: "Both",
      style: "shadow-black bg-gradient-to-r from-gray-400 to-green-600",
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
      price: "$0"
    },

  ]
 


  return (

    <div>

    


     <div className='text-center'>
            <h1  data-aos="fade-up" className="text-7xl mt-8 font-extrabold">Moodboard and Organizer </h1>
             <button className=" bg-green-300 shadow-md shadow-black text-white  px-8 py-6
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
                      <li className="mt-6 mb-6">A well designed Moodboard and Organizer for your life as a programmer.</li>
                      <li className="mt-6 mb-6">Easily structure your day for maximum productivity.</li >
                      <li className="mt-6 mb-6"> Have a system for free !</li >

            </ul>

            <h1  data-aos="fade-up" className="text-8xl  ml-32   mt-16 font-extrabold">Why it works ! </h1>
            <ul className=" list-disc ml-40 mt-8 text-4xl mr-64">
                      <p className="mt-6 mb-6">Notion is an incredible app that allows for virtually everything
                      a productive person needs.</p>

                      <button className="text-black shadow-md text-2xl  dark:bg-black dark:text-white px-7 py-5
                             rounded-md hover:scale-110 duration-300  mt-8
                            bg-gradient-to-r from-gray-400  to-green-600 hover:from-green-600 hover:to-gray-400 hover:shadow-xl hover:shadow-black  hover:bg-white
                            ">
                        Get Notion for free from their website !
                        {/* Affiliate link */}
            </button>
            

            </ul>
                      

              
            </div>



        <div className=''>
            <Image className="mt-32 mr-48   " src={FooterImage} alt="The Header"  width={1000}
            height={500}   />
      </div>


    </div>


        <div className=" justify-center mt-32 mx-96 text-center py-8 px-12 sm:px-0 cursor-pointer">
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