import React from 'react'
import Head from "next/head"
import Link from "next/link"

import NavBar from '../../components/home/NavBar';
import Footer from '../../components/home/Footer';

import { useRouter } from 'next/router';


import {
  FaMoon,
  FaSun,
} from 'react-icons/fa';

import Image from "next/image"

import Center from "../../assets/digital-nomad.svg"
/* only looks good on 27 screen with image */

const IntroToCode = () => {

  

  return (
    <div className="bg-gradient-to-b from-gray-900 text-center to-gray-800 w-full min-h-screen text-white">

   <Head>
      <title>Sources</title>
      <meta name="description" content="Every source listed "></meta>
      <meta name="author" content="Finn Guha"></meta>
  <meta name="viewport" content="width=device-width, initial-scale=1.0,maximum-scale=1.0, user-scalable=no"></meta>
  <meta name="theme-color" content="none"></meta>
  <meta name="mobile-web-app-capable" content="yes"></meta>
  <meta name="keywords" content="


codex notes,
note-taking app with code snippets,
notion,
coding notes for beginners,
best note-taking app,
digital notes,
notes app


   "></meta>
  

      <meta
          property="og:image"
          content="../public/favicon.ico"
        />
    </Head>   
    <NavBar />


    
    <div className='border-4 border-white'>
         <h1 data-aos="fade-up" className="text-center  mt-16 font-extrabold text-5xl inline-flex  bg-purple-600 lg:text-7xl mb-16 ">Science</h1>
        <h1 data-aos="fade-up" className="text-center mx-auto font-bold text-2xl  lg:text-2xl mb-16 ">Sources used to 
        justify the way of teaching. </h1>

       

  <Link href="/science" target="_blank">
        <button id="badge-dismiss-default" className="mx-auto flex items-center px-6 py-4 mb-32 text-2xl font-bold bg-yellow-600 hover:bg-yellow-500 text-black rounded">
          Jump to Sources 🖱️
        </button>
  </Link>



     <h1 data-aos="fade-up" className="text-center   font-extrabold mt-32 text-5xl inline-flex  bg-green-600 lg:text-7xl mb-16 ">Product</h1>
        <h1 data-aos="fade-up" className="text-center mx-auto font-bold text-2xl   lg:text-2xl mb-16 ">Sources used to build
        CodingNotes including the notes and flashcards and the websites. </h1>

       

  <Link href="https://a-tiny-improvement.notion.site/All-Sources-d9a1e85a6d6c42c2a40c0dab44354a55" target="_blank">
        <button id="badge-dismiss-default" className="mx-auto flex items-center px-6 py-4 mb-32 text-2xl font-bold bg-blue-600 hover:bg-blue-500 text-black rounded">
          Jump to Sources 🖱️
        </button>
  </Link>


    </div>

     

        

        
        
        <Footer />

        
            

    </div>
  )
}

export default IntroToCode