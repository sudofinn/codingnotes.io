import React from 'react'
import NotesImage from "../../assets/second.png"
import FlashcardImage from "../../assets/third.png"

import Image from "next/image"
import Link from "next/link"
import Head from "next/head"

import NavBar from '../../components/home/NavBar'
import Footer from '../../components/home/Footer'


const Explain = () => {
  return (
    <div className='bg-gray-900 text-white'>
        <Head>
      <title>Notes and Flashcards</title>
      <meta name="description" content="Notes and Flashcards to learn  web development"></meta>
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

    
      <div className='flex xl:flex-row flex-col  bg-gray-900 text-white '>
        

        <div className='text-center xl:text-left  mx-4 '>
            <h1  data-aos="fade-up" className="text-4xl md:text-5xl xl:text-6xl bg-blue-500 inline-flex xl:ml-16 mr-0 xl:mr-16  mt-32 font-extrabold">1.Notes </h1>
            <li  data-aos="fade-up" className="text-2xl list-none px-4 sm:px-24 md:px-0  md:text-3xl md:mx-16   mr-0 xl:mr-32 mt-12 font-extrabold"> Learn the fundamentals
            of the language</li>

            <li  data-aos="fade-up" className="text-2xl list-none px-4 sm:px-24 md:px-0 md:text-3xl md:mx-16   mr-0 xl:mr-32 mt-12 font-extrabold"> Understand basic or advanced material 
            with comprehensive examples.</li>

            <li  data-aos="fade-up" className="text-2xl list-none px-4 sm:px-24 md:px-0 md:text-3xl md:mx-16   mr-0 xl:mr-32 mt-12 font-extrabold"> Grasp the 
            theory and deepen your knowledge with examples. </li>

            <h3 data-aos="fade-up" className="text-3xl  ml-4 sm:px-24 md:px-4 mt-36 xl:mt-16  text-gray-600  border-l-8 pl-2 mr-8 xl:mr-32 xl:ml-16  border-gray-400   font-extrabold">Notes are made 
            with Notion. You can download it or just use it in the browser without signing up. </h3>
            
            <Link href="https://www.notion.so/pricing" target="_blank">
               
        <button id="badge-dismiss-default" className="inline-flex xl:mx-16 mt-8  items-center px-10 py-4 text-2xl font-bold bg-purple-500 hover:bg-purple-400 text-black rounded">
          Get Notion
        </button>
            </Link>

             

             
            </div>



        <div className='text-center xl:text-left mb-32 '>
             <div className=''>
            <h1  data-aos="fade-up"  className="text-4xl md:text-6xl xl:text-6xl bg-green-500 inline-flex xl:ml-16 mr-0 xl:mr-16  mt-32 font-extrabold">2.Flashcards </h1>
             <li  data-aos="fade-up" className="text-2xl list-none px-4 sm:px-24 md:px-0  md:text-3xl md:mx-16   mr-0 xl:mr-32 mt-12 font-extrabold"> Deepen your knowledge
            of the language</li>

            <li  data-aos="fade-up" className="text-2xl list-none px-4 sm:px-24 md:px-0  md:text-3xl md:mx-16   mr-0 xl:mr-32 mt-12 font-extrabold">  Use the most advanced way of learning
            with comprehensive examples.</li>

            <li data-aos="fade-up" className="text-2xl list-none px-4 sm:px-24 md:px-0  md:text-3xl md:mx-16   mr-0 xl:mr-32 mt-12 font-extrabold"> Make it stick in your brain
            forever </li>


            <h3  data-aos="fade-up" className="text-3xl  ml-4 sm:px-24 md:px-4 mt-36 xl:mt-28  text-gray-600  border-l-8 pl-2 mr-8 xl:mr-32 xl:ml-16  border-gray-400   font-extrabold">Flashcards are made
            using Anki, arguably the most popular and advanced Flashcard App. </h3>

          
          <Link href="https://apps.ankiweb.net/" target="_blank">
                
        <button id="badge-dismiss-default" className="inline-flex xl:mx-16 mt-8  items-center px-10 py-4 text-2xl font-bold bg-yellow-500 hover:bg-yellow-400 text-black rounded">
          Get Anki
        </button>
          </Link>

             

             
            </div>
      </div>

     


    </div>
     <Footer />

    </div>
  )
}

export default Explain