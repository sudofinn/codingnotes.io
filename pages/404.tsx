import React from 'react'
import Head from "next/head"

import { useRouter } from 'next/router';


import {
  FaMoon,
  FaSun,
} from 'react-icons/fa';

import Image from "next/image"

import Center from "../assets/covers/question-mark.svg"
/* only looks good on 27 screen with image */

const Custom404 = () => {

  const router = useRouter()

  const navigateHome = () => {
    router.push("/")
  }

  return (
    <div className="w-full h-screen  px-6 dark:bg-white dark:text-black bg-black p-4 text-white">

    <Head>
      <title>404 page</title>
      <meta name="description" content="The 404 page,an  unexisting page from the blog A Tiny Improvement. Made by Finn Guha." />

    </Head>

        <h1 data-aos="fade-up" className="text-center font-extrabold text-7xl mb-16 mt-16">Oops, page not found !</h1>


        <button onClick={navigateHome} className="text-black mt-8 shadow-md hover:shadow-white bg-white dark:bg-black
         dark:text-white hover:bg-black hover:text-white px-10 py-6
             mx-auto flex  items-center text-2xl rounded-md hover:scale-110 duration-300">
            Jump to homepage
        </button>

        
            <Image className=" mx-auto " src={Center} alt="The Header"  width={500}
            height={300}   />
    

    </div>
  )
}

export default Custom404