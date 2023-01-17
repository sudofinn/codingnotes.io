import React from 'react'
import Link from "next/link"


import {  Zoom    } from "react-awesome-reveal";

const Explain_home = () => {
  return (
    <Zoom>
    <div className=' mt-16 sm:mt-32  w-full  bg-gradient-to-b from-gray-900 to-gray-900 text-white '>
       
  <Link href="/notesandflashcards" target="_blank" className='flex justify-center'>
        <button id="badge-dismiss-default" className=" mt-12  px-14 py-6 mb-12 mx-4
         font-extrabold bg-white text-black hover:bg-gray-200 duration-500 rounded text-4xl ">
          How this all works 🖱️
        </button>
  </Link>
  
  <div className='group mx-[40px] sm:mx-[100px] lg:mx-[200px] xl:mx-[300px] 2xl:mx-[550px]'>
  <h2 className='text-xl md:text-3xl text-center mx-auto mb-4 font-bold'>CodingNotes is all about understanding programming with <Link href="/notesandflashcards" target="_blank" className='font-extrabold bg-green-600 hover:bg-blue-600' >detailed notes</Link> which include explanations,
   code snippets and graphics.</h2>
  <h2 className='text-xl md:text-3xl text-center mx-auto duration-300 group-hover:border-b-4 pb-2 border-gray-400 font-bold'>To train these things, we use <Link  href="/notesandflashcards" target="_blank"className='font-extrabold bg-pink-600 hover:bg-orange-600 '>flashcards </Link>that make concepts stick.</h2>
  </div>

    </div>

    </Zoom>
  )
}

export default Explain_home