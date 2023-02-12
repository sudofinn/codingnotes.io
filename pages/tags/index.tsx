import React from 'react'
import Head from "next/head"
import Link from "next/link"

import NavBar from '../../components/home/NavBar'
import Footer from '../../components/home/Footer'

const index = () => {
  return (
    <div className='bg-gray-900 min-h-screen  text-white text-center'>

       <Head>
      <title>Tags</title>
      <meta name="description" content="Tags to find packages"></meta>
      <meta name="author" content="Finn Guha"></meta>
  <meta name="viewport" content="width=device-width, initial-scale=1.0,maximum-scale=1.0, user-scalable=no"></meta>
  <meta name="theme-color" content="none"></meta>
  <meta name="mobile-web-app-capable" content="yes"></meta>
  <meta name="keywords" content="


frontend  languages,
frontend frameworks,
best front-end programming language,
frontend and backend programming languages,
full stack developer languages,
app development languages,


   "></meta>
  

      <meta
          property="og:image"
          content="../public/favicon.ico"
        />
    </Head>    
    <NavBar />

        <h1 data-aos="fade-up" className="text-center  font-extrabold text-5xl mb-4 mt-16">Tags</h1>
        <h1 data-aos="fade-up" className="text-center text-gray-500 font-extrabold text-xl mb-4 border-b-2 inline-flex ">Find what you need</h1>

        <div className='sm:grid  grid-cols-3 mx-auto   cursor-pointer mt-32 
    '>
  <Link href="/htmlcss">
        <button id="badge-dismiss-default" className=" mr-8 sm:ml-0 items-center px-6 py-2  text-2xl font-bold bg-red-600 hover:bg-red-500 text-black rounded">
          #html
        </button>
  </Link>
  <Link href="/htmlcss">
        <button id="badge-dismiss-default" className="  items-center px-6 py-2  text-2xl font-bold bg-blue-600 hover:bg-blue-500 text-black rounded">
          #css
        </button>
  </Link>
  <Link href="/javascript">
        <button id="badge-dismiss-default" className=" mr-8 sm:mr-0  items-center px-6 py-2  text-2xl font-bold bg-yellow-600 hover:bg-yellow-500 text-black rounded">
          #javascript
        </button>
  </Link>
  <Link href="/react">
        <button id="badge-dismiss-default" className="mt-6  items-center px-6 py-2  text-2xl font-bold bg-blue-400 hover:bg-blue-300 text-black rounded">
          #react
        </button>
  </Link>
  <Link href="/nextjs">
        <button id="badge-dismiss-default" className=" mt-6 mr-8 sm:ml-0  items-center px-6 py-2  text-2xl font-bold bg-gray-300 hover:bg-gray-200 text-black rounded">
          #nextjs
        </button>
  </Link>
  <Link href="/neovim">
        <button id="badge-dismiss-default" className=" mt-6   items-center px-6 py-2  text-2xl font-bold bg-green-600 hover:bg-green-500 text-black rounded">
          #(neo)vim
        </button>
  </Link>
  <Link href="/frontendbundle">
        <button id="badge-dismiss-default" className=" mt-6   items-center px-6 py-2  text-2xl font-bold bg-orange-600 hover:bg-orange-500 text-black rounded">
          #frontend
        </button>
  </Link>
  <Link href="/markdown">
        <button id="badge-dismiss-default" className=" mt-6   items-center px-6 py-2  text-2xl font-bold bg-gray-600 hover:bg-gray-500 text-black rounded">
          #markdown
        </button>
  </Link>
  <Link href="/frontendintro">
        <button id="badge-dismiss-default" className="mb-32  mt-6 ml-2  items-center px-6 py-2 mr-3 text-2xl font-bold bg-purple-600 hover:bg-purple-500 text-black rounded">
          #intro_to_frontend
        </button>
  </Link>

    </div> 

    <Footer />


    </div>
  )
}

export default index