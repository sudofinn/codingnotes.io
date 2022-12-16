import React from 'react'
import Head from "next/head"

const index = () => {
  return (
    <div>

         <Head>
      <title>FAQ</title>
      <meta name="description" content="FAQ on CodingNotes" />
    </Head>


    <div>
        <h1  data-aos="fade-up" className="text-5xl lg:text-7xl text-center     mt-16 font-extrabold">The most important questions - answered ! </h1>

        <h1  data-aos="fade-up" className="text-4xl lg:text-5xl  text-center mt-20 font-extrabold">What format are the notes ? </h1>
            <ul className="  mt-8 text-2xl lg:text-3xl ">
                      <p className="mt-6 bg-gradient-to-r from-blue-400  to-gray-800 mb-6 mx-8 md:mx-16 xl:mx-80 font-extrabold border-b-8 border-l-8 border-t-8 border-r-8   border-black">When purchasing the notes, you will get a simple link to a Notion page. You can either 
                      use this or duplicate the page into your own Notion App. For this, you need to download Notion which is free.</p>
                      
            </ul>

        

    </div>

    <div className="justify-center align-items text-center">
          <button className="  hover:shadow-md  shadow-black bg-black text-white px-7 py-5
                rounded-md hover:scale-110 duration-300  mt-4 mb-16
            
                ">
              Get Notion for free !
            </button>
    </div>




    <div>

        <h1  data-aos="fade-up" className="text-4xl lg:text-5xl  text-center mt-20 font-extrabold">What format are the flashcards ? </h1>
            <ul className=" mt-8 text-2xl lg:text-3xl">
                      <p className="mt-6 bg-gradient-to-r from-teal-400  to-yellow-800 mb-6 mx-8 md:mx-16 xl:mx-80 font-extrabold border-b-8 border-l-8 border-t-8 border-r-8   border-black">
                        When purchasing the flashcards, you will get an .apkg file. You can then import this file into your Anki App. For this,
                        you need to have Anki.
                     </p>
                      
            </ul>

        

    </div>

    <div className="justify-center align-items text-center">
          <button className="  hover:shadow-md  shadow-black bg-black text-white px-7 py-5
                rounded-md hover:scale-110 duration-300  mt-4 mb-16
            
                ">
              Get Anki now !
            </button>
    </div>




     <div>

        <h1  data-aos="fade-up" className="text-4xl lg:text-5xl  text-center mt-20 font-extrabold">Which sources were used ? </h1>
            <ul className="mt-8 text-2xl lg:text-3xl">
                      <p className="mt-6 bg-gradient-to-r from-gray-200  to-red-300 mb-6 mx-8 md:mx-16 xl:mx-80 font-extrabold border-b-8 border-l-8 border-t-8 border-r-8   border-black">
                        In order to write the notes and flashcards , I had to use lots of external sources. You can find all of them at codingnotes.io/sources and at the Notion pages.
                     </p>
                      
            </ul>

        

    </div>

    <div className="justify-center align-items text-center">
          <button className="  hover:shadow-md  shadow-black bg-black text-white px-7 py-5
                rounded-md hover:scale-110 duration-300  mt-4 mb-16
            
                ">
              See all Sources
            </button>
    </div>


    </div>
  )
}

export default index