
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
      <p className="mb-4 mt-4  bg-pink-500  text-2xl sm:text-3xl
      mx-[8] sm:mx-[75px] md:mx-[150px] lg:mx-[300px] xl:mx-[500px] 2xl:mx-[600px]
      ">&quot; Just bought the notes and flashcards and I am  excited to use them  to learn coding.  &quot;</p>
      <p className=" mb-12 mx-auto text-xl underline text-gray-300"><Link href="https://www.youtube.com/watch?v=Qc-nGIMv_SY&t=56s" target="_blank" >Tess Loggins , learns web development with CodingNotes</Link>  </p>

<Link href="/products">
      <button id="badge-dismiss-default"   className="px-10 py-3  select-none rounded-md text-white 
              hover:border-gray-500 border-4 font-extrabold  border-white  bg-black hover:bg-gray-800
              
                ">
              When do you start ?
            </button>
</Link>

</Zoom>
    </div>

    

    </div>


    </div>

   


  )
}

export default Header