import React from 'react'
import Link from "next/link"
import Image from "next/image"


import {  Zoom    } from "react-awesome-reveal";

import HeaderImage from "../../assets/engineer.svg"

import RhymerEspinosa from "../../assets/rhymer_espinosawebp.webp"
import Tati from "../../assets/tati.webp"
import SheenaEsguerra from "../../assets/sheena_esguerrawebp.webp"

const SocialProof = () => {
  return (
    <div>
      <div>
        <h1  data-aos="fade-up" className="  text-4xl xl:text-5xl 2xl:text-6xl mx-[30px]  sm:mx-[150px] lg:mx-[300px] 2xl:mx-[500px]   text-center   mt-64  sm:mt-48 font-bold ">What CodingNotes means to <span className='text-blue-400 font-extrabold'>others</span>  </h1>
      </div>


      <div className="">

      <div className="flex justify-center ">
        <Link href="https://www.producthunt.com/posts/codingnotes?utm_source=badge-top-post-badge&utm_medium=badge&utm_souce=badge-codingnotes" target="_blank"><img src="https://api.producthunt.com/widgets/embed-image/v1/top-post-badge.svg?post_id=370406&theme=dark&period=daily"
        alt="CodingNotes" className="  mt-12 w-[400px] h-[80px]  "  /></Link>
      </div>
       
       <div className="flex justify-center">
          <Link rel="noreferrer" href="https://www.producthunt.com/posts/codingnotes?utm_source=badge-featured&utm_medium=badge&utm_souce=badge-codingnotes" target="_blank"> <img src="https://api.producthunt.com/widgets/embed-image/v1/featured.svg?post_id=370406&theme=dark" 
          alt="CodingNotes "  className=" mt-12 mb-20   w-[400px] h-[80px] "  /></Link>
       </div>
    
    <Zoom>
       <div className="flex items-center justify-center  p-6">
    <div className="flex flex-col border-gray-300 border bg-white text-black font-extrabold divide-y rounded-lg flex-none w-full md:w-1/2 lg:w-1/3">
        <div className="flex flex-col space-y-2 divide-y">
            
            <div className="flex justify-between space-x-6 items-center p-6">
                <div className="flex items-center space-x-4">
                    <Image src={RhymerEspinosa}  className="rounded-full h-14 w-14" alt="first" />
                    <div className="flex flex-col space-y-2">
                        <Link href="https://www.producthunt.com/@rimer_carlyle_espinosa">Rhymer Espinosa</Link>
                        <span>The Notion Template is a huge help. 
                              Congrats on the launch <Link className='text-gray-600' href="https://www.producthunt.com/@vimfinn">@vimfinn</Link> and team!.</span>
                    </div>
                    
                </div>
                <div>
                  
                </div>
            </div>
             

            
            <div className="flex justify-between space-x-6 items-center p-6">
                <div className="flex items-center space-x-4">
                    <Image src={Tati}   className=" rounded-full h-14 w-14" alt="second" />
                    <div className="flex flex-col space-y-2">
                        <Link href="https://www.producthunt.com/@tatinotsense">Tati</Link>
                        <span>I am a huge fan of flashcards and this is a very cool idea!</span>
                    </div>
                </div>
                <div>
                  
                </div>
            </div>
            

             
            <div className="flex justify-between space-x-6 items-center p-6">
                <div className="flex items-center space-x-4">
                    <Image src={SheenaEsguerra }  className="rounded-full h-14 w-14" alt="third" />
                    <div className="flex flex-col space-y-2">
                        <Link href="https://www.producthunt.com/@sheena_esguerra">Sheena Esguerra</Link>
                        <span>Nice!! This will definitely come in handy with my learning.</span>
                    </div>
                </div>
                <div>
                  
                </div>
            </div>
            
        </div>
        <div className="p-4">
          <Link href="https://www.producthunt.com/products/codingnotes#codingnotes" target="_blank">
            <button className="w-full border p-2 rounded-md hover:opacity-60 transition">See More Feedback</button>
          </Link>
        </div>
    </div>

    


</div>
</Zoom>

      

        </div>
        
    </div>
  )
}

export default SocialProof

