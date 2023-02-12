import React from 'react'
import Image from "next/image"
import Head from "next/head"

import Link from "next/link"


import NavBar from "../../components/home/NavBar";
import Footer from "../../components/home/Footer";


import HeaderImage from "../../assets/notion_icon.jpg"
import SecondImage from "../../assets/anki_icon.jpg"
import ThirdImage from "../../assets/popsy_real.png"


const Header = () => {


  return (
    <div className='min-h-screen bg-gradient-to-b from-gray-900 to-gray-800 text-white
    '>

  <Head>
      <title>Third Party</title>
      <meta name="description" content="Third party services listed "></meta>
      <meta name="author" content="Finn Guha"></meta>
  <meta name="viewport" content="width=device-width, initial-scale=1.0,maximum-scale=1.0, user-scalable=no"></meta>
  <meta name="theme-color" content="none"></meta>
  <meta name="mobile-web-app-capable" content="yes"></meta>
  <meta name="keywords" content="


notion,
anki,
popsy,
emojipedia



   "></meta>
  

      <meta
          property="og:image"
          content="../public/favicon.ico"
        />
    </Head>  
    <NavBar />
    
      <div className='text-center flex justify-center     mx-[8] sm:mx-[75px] md:mx-[150px] lg:mx-[300px] xl:mx-[500px] 2xl:mx-[600px] '>
        

        <div className=' '>
            <h1  data-aos="fade-up" className="text-4xl lg:text-6xl bg-pink-600 inline-flex   mt-20 font-extrabold">Things used</h1>
            <h1  data-aos="fade-up" className="text-3xl lg:text-4xl   mt-20 font-extrabold">Notion</h1>


            <p  data-aos="fade-up" className="text-2xl  lg:text-3xl select-none rounded-xl text-orange-400 hover:bg-orange-400 hover:text-white  mx-auto mt-8 mb-8  border-orange-400 border-4 bg-transparent ">Notion is a notetaking app that provides you 
            with everything you need to take high-quality notes. CodingNotes uses Notion for making the notes.  You can download Notion for free
            or just use it in the browser without signing up.</p>

            <Link href="https://www.notion.so/product">
              <button   id="badge-dismiss-default" className="inline-flex mt-6   items-center px-6 py-2 mr-3 text-2xl font-bold bg-purple-600 hover:bg-purple-500 text-black rounded">
                #get_notion
             </button>
            </Link>
        </div>
    </div>
    
    <div className='text-center flex justify-center  mt-64    mx-[8] sm:mx-[75px] md:mx-[150px] lg:mx-[300px] xl:mx-[500px] 2xl:mx-[600px]'>

        <div className=' '>
            <h1  data-aos="fade-up" className="text-3xl lg:text-4xl   mt-12 font-extrabold">Anki</h1>


            <p  data-aos="fade-up" className="text-2xl  lg:text-3xl select-none rounded-xl text-blue-400 hover:bg-blue-400 hover:text-white  mx-auto mt-8 mb-8  border-blue-400 border-4 bg-transparent ">Anki is a flashcard app that 
            uses advanced algorithms to make learning as efficient as possible. CodingNotes uses Anki for the concepts with flashcards. CodingNotes is neither affiliated nor endorsed by Emojipedia. The app is free on almost every OS.</p>

            <Link href="https://apps.ankiweb.net/">
              <button   id="badge-dismiss-default" className="inline-flex mt-6   items-center px-6 py-2 mr-3 text-2xl font-bold bg-green-600 hover:bg-green-500 text-black rounded">
                #get_anki
             </button>
            </Link>
        </div>
    </div>

    <div className='text-center flex justify-center  mt-64    mx-[8] sm:mx-[75px] md:mx-[150px] lg:mx-[300px] xl:mx-[500px] 2xl:mx-[600px]'>

        <div className=' '>
            <h1  data-aos="fade-up" className="text-3xl lg:text-4xl   mt-12 font-extrabold">Popsy</h1>


            <p  data-aos="fade-up" className="text-2xl  lg:text-3xl select-none rounded-xl text-red-400 hover:bg-red-400 hover:text-white  mx-auto mt-8 mb-8  border-red-400 border-4 bg-transparent ">Some illustrations of Popsy.co are 
            used. All credits for the image/images belong to them. CodingNotes is neither affiliated nor endorsed by Popsy. ( Source: popsy.co ) </p>

            <Link href="https://popsy.co/illustrations">
              <button   id="badge-dismiss-default" className="inline-flex mt-6   items-center px-6 py-2 mr-3 text-2xl font-bold bg-orange-600 hover:bg-orange-500 text-black rounded">
                #go_to_popsy
             </button>
            </Link>
        </div>
    </div>

      <div className='text-center flex justify-center  mt-64    mx-[8] sm:mx-[75px] md:mx-[150px] lg:mx-[300px] xl:mx-[500px] 2xl:mx-[600px]'>

        <div className=' '>
            <h1  data-aos="fade-up" className="text-3xl lg:text-4xl   mt-12 font-extrabold">Emojipedia</h1>


            <p  data-aos="fade-up" className="text-2xl  lg:text-3xl select-none rounded-xl text-teal-400 hover:bg-teal-400 hover:text-white  mx-auto mt-8 mb-8  border-teal-400 border-4 bg-transparent ">The Anki Flashcards contain emojis. These 
            emojis are from Emojipedia.  All credits for the image/images belong to them. CodingNotes is neither affiliated nor endorsed by Emojipedia.  </p>

            <Link href="https://emojipedia.org/">
              <button   id="badge-dismiss-default" className="inline-flex mt-6   items-center px-6 py-2 mr-3 text-2xl font-bold bg-fuchsia-300 hover:bg-fuchsia-200 text-black rounded">
                #go_to_emojipedia
             </button>
            </Link>
        </div>
    </div>
    <Footer />


    </div>


  )
}

export default Header