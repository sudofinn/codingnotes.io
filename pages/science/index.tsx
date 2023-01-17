import React from 'react'
import Image from "next/image"
import Link from "next/link"
import Head from "next/head"

import NavBar from '../../components/home/NavBar'
import Footer from '../../components/home/Footer'

import HeaderImage from "../../assets/codingnotes_science_pic.png"

const index = () => {
  return (
    
    <div className='bg-gradient-to-b from-gray-900 text-center to-gray-800 w-full min-h-screen text-white'>
      <Head>
      <title>Science</title>
      <meta name="description" content="The Science of CodingNotes" />
    </Head>
    <NavBar />
        <h1 className="text-2xl  inline-flex justify-center mt-12 bg-pink-500  lg:text-7xl font-extrabold">The Science of CodingNotes</h1>

            <Image className="w-[1000px] mx-auto mt-12 " src={HeaderImage} alt="The Header"    />

        <h1 className=" flex justify-center  text-3xl mt-12 font-extrabold"> <Link className="underline text-gray-300" href=" https://crlt.umich.edu/sites/default/files/resource_files/CRLT_no16.pdf" target="_blank"> Notetaking study link</Link></h1>
        <h1 className=" flex justify-center  text-3xl mt-12 font-extrabold"> <Link className="underline text-gray-300" href="https://www.researchgate.net/publication/251573566_The_Use_of_Flashcards_in_an_Introduction_to_Psychology_Class" target="_blank"> Flashcard study link</Link> </h1>

        <Footer />
    </div>
  )
}

export default index