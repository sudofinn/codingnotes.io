
import React from 'react'
import {useState} from "react"
import HeaderImage from "../../assets/covers/header_3.png"
import useDarkMode from '../hooks/useDarkMode'



import {  Zoom    } from "react-awesome-reveal";


import ModalVideo from 'react-modal-video'
import 'node_modules/react-modal-video/scss/modal-video.scss';

import Link from "next/link"
import Image from "next/image"




const Header = () => {


  return (
  <div className=' mt-16   bg-gray-900 w-full p-4 text-white'>
    <div className='  ' >
      <div className='text-center font-bold   '>


 <Zoom>
      <p className="mb-4 mt-4  bg-pink-500  text-xl sm:text-2xl
      mx-[8] sm:mx-[74px] md:mx-[150px] lg:mx-[300px] xl:mx-[500px] 2xl:mx-[600px] 
      ">&quot; Just bought the notes and flashcards and I am  excited to use them  to learn coding.  &quot;</p>
      <p className="  mb-24 mx-auto text-xl underline text-gray-300"><Link href="https://www.youtube.com/watch?v=Qc-nGIMv_SY&t=56s" target="_blank" >Tess Loggins , learns web development with CodingNotes</Link>  </p>

     

        


<Link href="/products" className="relative px-4   md:px-16  py-5  md:py-8  text-white rounded-lg group font-extrabold text-2xl">
<span className="absolute inset-0 w-full  h-full transition duration-300 transform -translate-x-1 -translate-y-1 bg-purple-800 ease opacity-80 group-hover:translate-x-0 group-hover:translate-y-0"></span>

<span className="absolute inset-0 w-full h-full transition duration-300 transform translate-x-1 translate-y-1 bg-pink-800 ease opacity-80 group-hover:translate-x-0 group-hover:translate-y-0 mix-blend-screen"></span>

<span className="relative group-hover:text-gray-200">Start your journey today !</span>

</Link>


</Zoom>
    </div>

    

    </div>


    </div>

   


  )
}

export default Header