import React from 'react'
import Link from "next/link"

const SocialProof = () => {
  return (
    <div>
      <div>
        <h1  data-aos="fade-up" className=" text-6xl xl:text-7xl 2xl:text-8xl  text-center   mt-20 sm:mt-48 font-extrabold ">What others think </h1>
      </div>

      <div className="">

      <div className="flex justify-center ">
        <Link href="https://www.producthunt.com/posts/codingnotes?utm_source=badge-top-post-badge&utm_medium=badge&utm_souce=badge-codingnotes" target="_blank"><img src="https://api.producthunt.com/widgets/embed-image/v1/top-post-badge.svg?post_id=370406&theme=dark&period=daily"
        alt="CodingNotes" className="  mt-12 w-[400px] h-[80px]  "  /></Link>
      </div>
       
       <div className="flex justify-center">
          <Link rel="noreferrer" href="https://www.producthunt.com/posts/codingnotes?utm_source=badge-featured&utm_medium=badge&utm_souce=badge-codingnotes" target="_blank"> <img src="https://api.producthunt.com/widgets/embed-image/v1/featured.svg?post_id=370406&theme=dark" 
          alt="CodingNotes "  className=" mt-12 mb-32   w-[400px] h-[80px] "  /></Link>
       </div>

        </div>
        
    </div>
  )
}

export default SocialProof

