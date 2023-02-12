import React from 'react'
import Head from "next/head"

import { useRouter } from 'next/router';


import {
  FaMoon,
  FaSun,
} from 'react-icons/fa';

import Image from "next/image"

import Center from "../../assets/digital-nomad.svg"
/* only looks good on 27 screen with image */

const Markdown = () => {

  const router = useRouter()

  const navigateHome = () => {
    router.push("/products")
  }

  return (
    <div className="w-full h-screen  px-6 dark:bg-white dark:text-black bg-black p-4 text-white">

        <Head>
      <title>In Development</title>
      <meta name="description" content="Content is under development"></meta>
      <meta name="author" content="Finn Guha"></meta>
  <meta name="viewport" content="width=device-width, initial-scale=1.0,maximum-scale=1.0, user-scalable=no"></meta>
  <meta name="theme-color" content="none"></meta>
  <meta name="mobile-web-app-capable" content="yes"></meta>
  <meta name="keywords" content="

learn programming free,
learn programming online free,
learn programming reddit,
learn programming python,
freecodecamp,
learn programming game,
codecademy,
learn programming app
   "></meta>
  

      <meta
          property="og:image"
          content="../public/favicon.ico"
        />
    </Head>   

        <h1 data-aos="fade-up" className="text-center font-extrabold text-7xl mb-16 mt-16">Still in development</h1>


        <button onClick={navigateHome} className="text-black mt-8 shadow-md hover:shadow-white bg-white dark:bg-black
         dark:text-white hover:bg-black hover:text-white px-10 py-6
             mx-auto flex  items-center text-2xl rounded-md hover:scale-110 duration-300">
            Jump to other products
        </button>

        
            <Image className=" mx-auto mt-8 " src={Center} alt="The Header"  width={500}
            height={300}   />
    

    </div>
  )
}

export default Markdown