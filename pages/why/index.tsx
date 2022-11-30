import React from 'react'
import HeaderImage from "../../assets/web-design_gray.svg"
import Image from "next/image"

const Reasons = () => {


  return (
      <div className='flex justify-between'>

        <div className=''>
            <h1  data-aos="fade-up" className="text-8xl  ml-32   mt-16 font-extrabold">About me </h1>
            <ul className=" list-disc ml-32  mt-8 text-4xl mr-64">
                      <p className=" bg-gradient-to-r p-4 from-blue-500 to-pink-500 mt-6 mb-6">Hello, I am Finn. I love coding, reading and listening to lofi 
                      while doing so. </p>
             </ul>
            <ul className=" list-disc ml-32  mt-8 text-4xl mr-64">
                      <p className=" bg-gradient-to-r p-4 from-yellow-500 to-red-400 mt-6 mb-6">I want to help as many people as possible 
                      to understand programming.  </p>
             </ul>
            <ul className=" list-disc ml-32  mt-8 text-4xl mr-64">
                      <p className=" bg-gradient-to-r p-4 from-gray-600 to-green-500 mt-6 mb-6">And I think CodingNotes is the solution 
                      to this - the most efficient way to learn programming.</p>
             </ul>

              
            </div>



        <div className=''>
            <Image className="mt-24 mr-64   " src={HeaderImage} alt="The Header"  width={1000}
            height={500}   />
      </div>


    </div>
  )
}

export default Reasons