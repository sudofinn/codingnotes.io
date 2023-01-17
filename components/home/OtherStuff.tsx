import React from 'react'
import Image from "next/image"
import Link from "next/link"

import {  Zoom    } from "react-awesome-reveal";

import NotionTemplatePicture from "../../assets/2_mono_.png"
import DraculaMockup from "../../assets/template_covers/dracula_mockup.png"

const OtherStuff = () => {
   function toOther() {
    window.open ("/other")
  }
  return (
    <div>
        <h1  data-aos="fade-up" className="text-4xl  mx-[30px]  sm:mx-[150px] lg:mx-[300px] 2xl:mx-[500px]   text-center  mt-64 font-extrabold ">
            Or maybe adding a new  <button onClick={toOther} id="badge-dismiss-default" className="inline-flex mt-6   items-center px-6 py-2 mr-3 text-2xl font-bold bg-green-600 text-black rounded">
          #colorscheme
        </button> or a new <button onClick={toOther} id="badge-dismiss-default" className="inline-flex mt-6   items-center px-6 py-2 mr-3 text-2xl font-bold bg-yellow-600 text-black rounded">
          #website_template
        </button> would  be cool ...</h1>

    <Zoom> 
     <Link href="/other">
        <Image className='mx-auto w-5/6 md:w-2/3' src={DraculaMockup} alt="Dracula Mockup" />
        </Link>
      </Zoom>
     
    </div>
  )
}

export default OtherStuff