import React from 'react'
import HeaderImage from "../../assets/web-design_gray.svg"
import SecondHeaderImage from "../../assets/microphone.svg"
import Image from "next/image"

import Head from "next/head"

const Reasons = () => {


  return (
      <div className='flex flex-wrap xl:flex-nowrap  xl:justify-between '>
         <Head>
      <title>Founder</title>
      <meta name="description" content="About the founder" />
    </Head>

        <div className=''>
            <h1  data-aos="fade-up" className="text-6xl text-center  lg:text-8xl  lg:ml-32  xl:text-left  mt-16 font-extrabold">About me </h1>


            <div className=''>
            <ul className=" list-disc mx-8 lg:ml-32  mt-8 text-4xl mr-8  xl:mr-64">
                      <p className=" bg-gradient-to-r p-4 from-blue-500 to-pink-500 mt-6 mb-6">Hello, I am Finn Guha . I love coding, reading and listening to lofi 
                      while doing so. </p>
             </ul>
            <ul className=" list-disc mx-8 lg:ml-32  mt-8 text-4xl mr-8  xl:mr-64">
                      <p className=" bg-gradient-to-r p-4 from-yellow-500 to-red-400 mt-6 mb-6">I want to help as many people as possible 
                      to understand programming.  </p>
             </ul>
            <ul className=" list-disc mx-8 lg:ml-32  mt-8 text-4xl mr-8  xl:mr-64 ">
                      <p className=" bg-gradient-to-r p-4 from-gray-600 to-green-500 mt-6 mb-6">And I think CodingNotes is the solution 
                      to this - the most efficient way to learn programming.</p>
             </ul>



            </div>
              
            </div>



        <div className=''>
            <Image className="mt-48 xl:mt-24 hidden xl:block mr-64 w-[350px] h-[400px]  lg:w-[400px] lg:h-[450px]  xl:w-[500px] xl:h-[450px] 2xl:w-[600px] 2xl:h-[550px] object-cover   " src={HeaderImage} alt="The Header"     />
      </div>

        <div className=' mx-auto'>
            <Image className="mt-0 block xl:hidden xl:mt-24  w-[350px] h-[400px]  lg:w-[400px] lg:h-[450px]  xl:w-[500px] xl:h-[450px] 2xl:w-[600px] 2xl:h-[550px] object-cover   " src={SecondHeaderImage} alt="The Header"     />
      </div>


    </div>
  )
}

export default Reasons