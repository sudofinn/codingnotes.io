import React from 'react'
import NotesImage from "../../assets/second.png"
import FlashcardImage from "../../assets/third.png"
import Image from "next/image"
import useDarkMode from '../hooks/useDarkMode'


const Explain = () => {
  return (
      <div className='flex xl:flex-row flex-col '>

        <div className='text-center xl:text-left  mx-4 '>
            <h1  data-aos="fade-up" className="text-6xl md:text-7xl xl:text-8xl xl:ml-16 mr-0 xl:mr-16  mt-48 font-extrabold">1.Notes </h1>
            <li  data-aos="fade-up" className="text-2xl list-none px-4 sm:px-24 md:px-0  md:text-3xl md:mx-16   mr-0 xl:mr-32 mt-12 font-extrabold"> Learn the fundamentals
            of the language</li>

            <li  data-aos="fade-up" className="text-2xl list-none px-4 sm:px-24 md:px-0 md:text-3xl md:mx-16   mr-0 xl:mr-32 mt-12 font-extrabold"> Understand basic or advanced material 
            with comprehensive examples.</li>

            <li  data-aos="fade-up" className="text-2xl list-none px-4 sm:px-24 md:px-0 md:text-3xl md:mx-16   mr-0 xl:mr-32 mt-12 font-extrabold"> Grasp the 
            theory and deepen your knowledge with examples. </li>

            <h3 data-aos="fade-up" className="text-3xl  ml-4 sm:px-24 md:px-4 mt-36 xl:mt-16  text-gray-600  border-l-8 pl-2 mr-8 xl:mr-32 xl:ml-16  border-gray-400   font-extrabold">Notes are made 
            with Notion. You can download it or just use it in the browser without signing up. </h3>

            <button className="text-black shadow-md text-2xl  bg-white dark:bg-black dark:text-white  px-7 py-5
                  rounded-md hover:scale-110 duration-300  ml-0 xl:ml-16 mt-8 hover:shadow-xl hover:shadow-black hover:text-black hover:bg-white
                  hover:bg-gradient-to-r bg-gradient-to-r from-orange-500 to-purple-500 hover:from-purple-500 hover:to-orange-500">
             Get Notion ! 
            </button>

             

             
            </div>



        <div className='text-center xl:text-left '>
             <div className=''>
            <h1  data-aos="fade-up"  className="text-6xl md:text-7xl xl:text-8xl xl:ml-16 mr-0 xl:mr-16  mt-48 font-extrabold">2.Flashcards </h1>
             <li  data-aos="fade-up" className="text-2xl list-none px-4 sm:px-24 md:px-0  md:text-3xl md:mx-16   mr-0 xl:mr-32 mt-12 font-extrabold"> Deepen your knowledge
            of the language</li>

            <li  data-aos="fade-up" className="text-2xl list-none px-4 sm:px-24 md:px-0  md:text-3xl md:mx-16   mr-0 xl:mr-32 mt-12 font-extrabold">  Use the most advanced way of learning
            with comprehensive examples.</li>

            <li data-aos="fade-up" className="text-2xl list-none px-4 sm:px-24 md:px-0  md:text-3xl md:mx-16   mr-0 xl:mr-32 mt-12 font-extrabold"> Make it stick in your brain
            forever </li>


            <h3  data-aos="fade-up" className="text-3xl  ml-4 sm:px-24 md:px-4 mt-36 xl:mt-28  text-gray-600  border-l-8 pl-2 mr-8 xl:mr-32 xl:ml-16  border-gray-400   font-extrabold">Flashcards are made
            using Anki, arguably the most popular and advanced Flashcard App. </h3>


            <button className="text-black shadow-md text-2xl bg-white dark:bg-black dark:text-white  px-7 py-5 xl:mx-16
                  rounded-md hover:scale-110 duration-300  mt-8 hover:shadow-xl hover:shadow-black hover:text-black hover:bg-white
                hover:bg-gradient-to-r bg-gradient-to-r from-indigo-500 to-pink-500 hover:from-pink-500 hover:to-indigo-500">
              Get Anki !
            </button>

             

             
            </div>
      </div>


    </div>
  )
}

export default Explain