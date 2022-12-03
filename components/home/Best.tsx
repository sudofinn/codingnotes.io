import React from 'react'
import Image from "next/image"
import FirstImage from "../../assets/second.png"
import SecondImage from "../../assets/header_2.png"

const Best = () => {
  return (
    <div className="">
     <h1    className="text-4xl lg:text-5xl xl:text-7xl text-center mx-8  md:mx-32  xl:mx-64  mt-32 lg:mt-64 font-extrabold">Learn any language with quality notes </h1>

     
            <Image className="mt-16  px-4   mx-auto" src={FirstImage} alt="The Header"   width={1200}
            height={1200}   />


     <h1   className="text-4xl lg:text-5xl xl:text-7xl text-center mx-8  md:mx-32  xl:mx-64  mt-64 font-extrabold">Deepen your knowledge with extensive flashcards. </h1>

     
            <Image className="mt-16  px-4 mx-auto" src={SecondImage} alt="The Header"   width={1300}
            height={1200}   />
      

      

    </div>
  )
}

export default Best