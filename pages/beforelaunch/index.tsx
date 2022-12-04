
import React from 'react'
import Head from "next/head"

import useDarkMode from '../../components/hooks/useDarkMode';
import { useRouter } from 'next/router';


import {
  FaMoon,
  FaSun,
} from 'react-icons/fa';

import Image from "next/image"
import Center from "../../assets/app-launch_yellow.svg"

/* only looks good on 27 screen with image */

const BeforeLaunch = () => {
  const [darkTheme, setDarkTheme] = useDarkMode();
  const handleMode = () => setDarkTheme(!darkTheme);

  const router = useRouter()

  const navigateHome = () => {
    router.push("/")
  }

  return (
    <div className="w-full h-screen  px-6 dark:bg-white dark:text-black bg-black p-4 text-white">

    <Head>
      <title>Before Launch</title>
      <meta name="description" content="The 404 page, from codingnotes.io" />

    </Head>

        <h1 data-aos="fade-up" className="text-center font-extrabold text-6xl lg:text-7xl mb-8 mt-8">Launch is on the 10th December !</h1>

        <h1 data-aos="fade-up" className="text-center mb-4 text-transparent bg-clip-text  bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500   font-extrabold text-4xl mt-16">Get notified on launch day ! </h1>

        

        <div className=" flex justify-center items-center">

          <form action= {process.env.NEXT_PUBLIC_KEY}
              method="POST"
              
            className=" flex flex-col w-full md:w-1/2 "
          >
            
            <input
              type="text"
              name="email"
              placeholder="Enter your email"
              className="my-4 p-2 bg-transparent border-2  dark:border-black rounded-md text-black focus:outline-none"
            />
            

            <button className="text-black shadow-md hover:shadow-white bg-white dark:bg-black dark:text-white hover:bg-black hover:text-white px-8 py-4
             my-8 mx-auto flex  items-center rounded-md hover:scale-110 duration-300 mb-8">
              Notify me !
            </button>
          </form>
        </div>

        
            <Image className=" mx-auto " src={Center} alt="The Header"  width={500}
            height={300}   />
    

    </div>
  )
}

export default BeforeLaunch