import React from 'react'
import HeaderImage from "../../assets/notion_icon.jpg"
import SecondImage from "../../assets/anki_icon.jpg"
import ThirdImage from "../../assets/popsy_real.png"
import Image from "next/image"

import Link from "next/link"


const Header = () => {


  return (
    <div>
      <div className='text-center flex justify-center'>

        <div className=''>
            <h1  data-aos="fade-up" className="text-5xl lg:text-8xl   mt-16 font-extrabold">The tools  used </h1>
            <h1  data-aos="fade-up" className="text-4xl lg:text-5xl   mt-12 font-extrabold">A notetaking app!</h1>


            <p  data-aos="fade-up" className="text-2xl  lg:text-3xl text-black mx-8  lg:mx-64 mt-12 font-extrabold">Notion is a notetaking app that provides you 
            with everything you need to take high-quality notes. CodingNotes uses Notion for making the notes. You can download Notion for free
            or just use it in the browser without signing up.</p>

            <Link href="https://www.notion.so/product">
              <button className="text-black shadow-md   dark:bg-black dark:text-white px-7 py-5
                mx-auto  rounded-md hover:scale-110 duration-300 mt-16
                bg-gradient-to-r from-yellow-400  to-teal-800 hover:from-teal-800 hover:to-yellow-400 hover:shadow-xl hover:shadow-black  hover:bg-white
                ">
              Get Notion here ( it is free )
            </button>
             </Link>



              
            </div>



       


    </div>



      <div className='text-center flex justify-center'>

        <div className=''>
            <h1  data-aos="fade-up" className="text-4xl lg:text-5xl  mt-24 font-extrabold">A flashcard app!</h1>


            <p  data-aos="fade-up" className="text-2xl  lg:text-3xl text-black mx-8  lg:mx-64 mt-12 font-extrabold">Anki is a flashcard app that 
            uses advanced algorithms to make learning as efficient as possible. Anki is free on almost every OS.</p>

            <Link href="https://apps.ankiweb.net/">
              <button className="text-black shadow-md   dark:bg-black dark:text-white px-7 py-5
                mx-auto  rounded-md hover:scale-110 duration-300  mt-8 mb-24
                bg-gradient-to-r from-pink-400  to-purple-800 hover:from-purple-800 hover:to-pink-400 hover:shadow-xl hover:shadow-black  hover:bg-white
                ">
              Get Anki here 
            </button>
            </Link>


              
            </div>



       


    </div>


     <div className='text-center flex justify-center'>

        <div className=''>
            <h1  data-aos="fade-up" className="text-4xl lg:text-5xl   mt-16 font-extrabold ">Graphics on webiste</h1>
            <h1  data-aos="fade-up" className="text-2xl  lg:text-3xl mb-4  mt-12 font-extrabold">Popsy.co</h1>


            <p  data-aos="fade-up" className="text-2xl  lg:text-3xl text-black  mx-8  lg:mx-64 font-extrabold">Popsy provides 
            free illustrations. I can only recommend this product. ( Source: popsy.co )</p>

            <Link href="https://popsy.co/illustrations">
              <button className="text-black shadow-md   dark:bg-black dark:text-white px-7 py-5
                mx-auto  rounded-md hover:scale-110 duration-300  mt-8
                bg-gradient-to-r from-indigo-400 mb-24  to-blue-800 hover:from-blue-800 hover:to-indigo-400 hover:shadow-xl hover:shadow-black  hover:bg-white
                ">
             Visit here !
            </button>
            </Link>


              

              
            </div>



        


    </div>

    </div>


  )
}

export default Header