import React from 'react'
import Router from "next/router"
import Image from "next/image"


import HeaderImage from "../../assets/genius.svg"
import useDarkMode from '../hooks/useDarkMode'


const Explore = () => {
  return (
   <div className='flex justify-center'>

        <div className='text-center'>
            <h1  data-aos="fade-up" className="text-5xl lg:text-8xl   mt-48 font-extrabold">Find the language </h1>
            <h1  data-aos="fade-up" className="text-4xl lg:text-7xl mt-4  lg:mt-12 font-extrabold">that brings you forwards</h1>
 
            <h1  data-aos="fade-up " onClick={(() => Router.push("/introtocode"))} className="text-2xl lg:text-3xl mx-6 xl:mx-0 cursor-pointer hover:text-purple-500 duration-500 hover:border-purple-500 hover:shadow-xl hover:shadow-black  mt-12 font-extrabold border-b-8 border-l-8 border-t-8 border-r-8  border-black">Just starting? Learn the fundamentals of programming.</h1>
            <h1  data-aos="fade-up " onClick={(() => Router.push("/htmlcss"))} className="text-2xl lg:text-3xl mx-6 xl:mx-0 cursor-pointer hover:text-red-500 duration-500 hover:border-red-500 hover:shadow-xl hover:shadow-black mt-12 font-extrabold border-b-8 border-l-8 border-t-8 border-r-8  border-black">Getting into  webdev? Learn HTML and CSS.</h1>
            <h1  data-aos="fade-up " onClick={(() => Router.push("/javascript"))} className="text-2xl lg:text-3xl mx-6 xl:mx-0 cursor-pointer hover:text-yellow-500 duration-500 hover:border-yellow-500 hover:shadow-xl hover:shadow-black  mt-12 font-extrabold border-b-8 border-l-8 border-t-8 border-r-8  border-black">Want to give your page functionality ? Time  for JavaScript.</h1>
            <h1  data-aos="fade-up " onClick={(() => Router.push("/jsframeworks"))} className="text-2xl lg:text-3xl mx-6 xl:mx-0 cursor-pointer hover:text-blue-500 duration-500 hover:border-blue-500  hover:shadow-xl hover:shadow-black mt-12 font-extrabold border-b-8 border-l-8 border-t-8 border-r-8  border-black">Level up by learning JavaScript Frameworks.</h1>
            <h1  data-aos="fade-up " onClick={(() => Router.push("/neovim"))} className="text-2xl lg:text-3xl mx-6 xl:mx-0 cursor-pointer hover:text-green-700 duration-500 hover:border-green-700  hover:shadow-xl hover:shadow-black mt-12 font-extrabold border-b-8 border-l-8 border-t-8 border-r-8  border-black">Want to know the editor of the pros ? Learn Vim and its languages.</h1>

              
            </div>




    </div>
  )
}

export default Explore