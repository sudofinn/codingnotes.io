import React from 'react'
import Head from "next/head"
import Link from "next/link"
import Router from "next/router"

import NavBar from '../components/home/NavBar';
import Footer from '../components/home/Footer';

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
  const toReact = () => {
    router.push("/reactjs")
  }

  return (
    <div className="bg-gray-900 min-h-screen  text-white">

    <Head>
        <Head>
      <title>404 page</title>
      <meta name="description" content="404 page of CodingNotes"></meta>
      <meta name="author" content="Finn Guha"></meta>
  <meta name="viewport" content="width=device-width, initial-scale=1.0,maximum-scale=1.0, user-scalable=no"></meta>
  <meta name="theme-color" content="none"></meta>
  <meta name="mobile-web-app-capable" content="yes"></meta>
  <meta name="keywords" content="javascript, coding, web development,  learn to code, become a front end developer,learn  html, front end masters,front end developer,
  front end website development, learn reactjs, learn the frontend
   "></meta>
  

      <meta
          property="og:image"
          content="../public/favicon.ico"
        />
    </Head>

    </Head>
    <NavBar />

        <h1 data-aos="fade-up" className="text-center font-extrabold text-7xl mb-16 mt-16">Oops, page not found !</h1>


       <Link href="/">
        <button id="badge-dismiss-default" className="mx-auto flex items-center mt-6  px-6 py-3  text-2xl font-bold bg-green-600 hover:bg-green-500 text-black rounded">
          #to_homepage
        </button>
      </Link> 
    
      <h2 className='text-center font-bold mt-16 text-2xl'>Learn how to make such a 404 page with the power of  <button onClick={toReact} id="badge-dismiss-default" className="inline-flex mt-6   items-center px-6 py-2  text-2xl font-bold bg-blue-400 hover:bg-blue-300 text-black rounded">
          #react_js
        </button>. </h2>

        
    
    <Footer />

    </div>
  )
}

export default Custom404