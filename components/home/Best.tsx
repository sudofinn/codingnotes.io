import React from 'react'
import Image from "next/image"
import FirstImage from "../../assets/second.png"
import SecondImage from "../../assets/third.png"

const Best = () => {
  return (
    <div>
     <h1  data-aos="fade-up" className="text-7xl text-center mx-64  mt-64 font-extrabold">Learn any language with quality notes </h1>

     
            <Image className="mt-24 mr-16 ml-40 " src={FirstImage} alt="The Header"   width={1500}
            height={1200}   />


     <h1  data-aos="fade-up" className="text-7xl text-center mx-64  mt-64 font-extrabold">Deepen your knowledge with extensive flashcards. </h1>

     
            <Image className="mt-24 mr-16 ml-32 " src={SecondImage} alt="The Header"   width={1500}
            height={1200}   />
      

      

    </div>
  )
}

export default Best