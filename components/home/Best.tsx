import React from 'react'
import Image from "next/image"
import FirstImage from "../../assets/second.png"
import SecondImage from "../../assets/header_2.png"

const Best = () => {
  return (
    <div>
     <h1   data-aos="fade-down" className="text-7xl text-center mx-64  mt-64 font-extrabold">Learn any language with quality notes </h1>

     
            <Image className="mt-24  mx-auto" src={FirstImage} alt="The Header"   width={1300}
            height={1200}   />


     <h1   className="text-7xl text-center mx-64  mt-64 font-extrabold">Deepen your knowledge with extensive flashcards. </h1>

     
            <Image className="mt-24 mx-auto" src={SecondImage} alt="The Header"   width={1300}
            height={1200}   />
      

      

    </div>
  )
}

export default Best