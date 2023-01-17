import React from 'react'
import Image from "next/image"
import Link from "next/link"
import Router from "next/router"


import {  Zoom    } from "react-awesome-reveal";

import NotionTemplatePicture from "../../assets/2_mono_.png"

const NotionTemplates = () => {
  function toNotionSite() {
    window.open ("/templates")
  }
  return (
    <div>
        <h1  data-aos="fade-up" className="text-4xl mx-[30px]  sm:mx-[150px] lg:mx-[300px] 2xl:mx-[500px] text-center   mt-48 font-extrabold">
            Want to stay productive while learning ? Why not try some <button onClick={toNotionSite}  id="badge-dismiss-default" className="inline-flex mt-6   items-center px-6 py-2 mr-3 text-2xl font-bold bg-purple-600 text-black rounded">
          #notiontemplates
        </button> ? </h1>
     
     <Zoom>
     <Link href="/templates">
        <Image className='mx-auto mt-8 w-2/3 sm:w-1/2' src={NotionTemplatePicture} alt="Notion Temlate" />
        </Link>
        </Zoom>
    </div>
  )
}

export default NotionTemplates