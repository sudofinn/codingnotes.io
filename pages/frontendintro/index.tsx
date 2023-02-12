import React from 'react'
import Head from "next/head"
import Link from "next/link"

import NavBar from '../../components/home/NavBar';
import Footer from '../../components/home/Footer';

import { useRouter } from 'next/router';



import Image from "next/image"
import Center from "../../assets/app-launch_yellow.svg"

/* only looks good on 27 screen with image */

const BeforeLaunch = () => {

  const router = useRouter()

  const navigateHome = () => {
    router.push("/")
  }
  const toReact = () => {
    router.push("/reactjs")
  }

  return (
    <div className="bg-gray-900 min-h-screen  ">

   <Head>
      <title>Intro to Frontend</title>
      <meta name="description" content="An Introduction to the Frontend in web development."></meta>
      <meta name="author" content="Finn Guha"></meta>
  <meta name="viewport" content="width=device-width, initial-scale=1.0,maximum-scale=1.0, user-scalable=no"></meta>
  <meta name="theme-color" content="none"></meta>
  <meta name="mobile-web-app-capable" content="yes"></meta>
  <meta name="keywords" content="

self introduction for front-end developer,
introduction to front-end development coursera,
introduction to front-end development meta,
front-end developer profile description,
front end web development,
meta front-end developer professional certificate,
front end development overview,
developer introduction
   "></meta>
  

      <meta
          property="og:image"
          content="../public/favicon.ico"
        />
    </Head>     
    <NavBar />

    
      <div className=" max-w-screen-lg mx-auto pt-12  text-center  p-4 flex flex-col justify-center w-full h-full text-white">

        <h1 data-aos="fade-up" className="text-center mx-8  xl:mx-[200px] font-extrabold text-4xl lg:text-5xl mb-8 mt-8">The Intro to Frontend package will be available soon</h1>

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
              className="my-4 p-2 bg-transparent border-2  border-white  rounded-md text-white focus:outline-none"
            />
            

            <button className=" text-black  shadow-md hover:shadow-white bg-white font-extrabold  hover:bg-black  hover:text-white px-8 py-4
             my-8 mx-auto flex  items-center rounded-sm hover:scale-110 duration-300 mb-8">
              Notify me !
            </button>
          </form>
        </div>

    
      <h2 className='text-center font-bold mt-16 text-2xl'>Learn how to make such a page with the power of  <button onClick={toReact} id="badge-dismiss-default" className="inline-flex mt-6   items-center px-6 py-2  text-2xl font-bold bg-yellow-600 hover:bg-yellow-500 text-black rounded">
          #javascript
        </button>. </h2>
 

    </div>

    <Footer />

    </div>
  )
}

export default BeforeLaunch