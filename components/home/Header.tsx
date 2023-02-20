import React from 'react'
import {useState} from "react"
import HeaderImage from "../../assets/covers/header_3.png"
import HeaderImageSecondTry from  "../../assets/covers/primary_header_secondtry.png"
import useDarkMode from '../hooks/useDarkMode'


import ModalVideo from 'react-modal-video'
import 'node_modules/react-modal-video/scss/modal-video.scss';

import Link from "next/link"
import Image from "next/image"




const Header = () => {
   const [isOpen, setOpen] = useState(false)


  return (
  <div className=' min-h-screen      bg-gray-900 w-full p-4 text-white'>
    <div className='  ' >
      <div className='text-center font-bold   '>

        
            <h1  className=" text-4xl sm:text-5xl xl:text-6xl 2xl:text-7xl
             mx-[4] sm:mx-[75px] md:mx-[150px] lg:mx-[300px]  2xl:mx-[300px] min-[1700px]:mx-[500px]
            mb-4 mt-8 sm:mt-12  ">
              Learn to <span className='font-extrabold text-purple-600'>code</span> and <span className='font-extrabold text-blue-400'> never forget</span>  it</h1>
            <h1 className='text-lg md:text-xl mt-4 mb-4 
            mx-[8] sm:mx-[75px] md:mx-[150px] lg:mx-[300px]  xl:mx-[550px] 2xl:mx-[500px] min-[1700px]:mx-[650px]'> Detailed Notes and extensive Flashcards for various programming languages and technologies.</h1>

             <ModalVideo channel='youtube' isOpen={isOpen} videoId="qrTHDAbPN9I"  onClose={() => setOpen(false)} />

             <button id="badge-dismiss-default"  onClick={()=> setOpen(true)}  className="px-10 py-3 font-semibold select-none rounded-md text-white 
              hover:border-gray-500 border-2  border-white  bg-gradient-to-r from-blue-400 to-purple-600 
              hover:bg-gradient-to-r hover:from-gray-800 hover:to-gray-900
              
                ">
              Discover
            </button>

            <Image src={HeaderImageSecondTry} alt="The Header" className="mt-12 mx-auto mb-12 " />

      <div className="flex justify-center mt-16 mb-8 ">
        <Link href="https://www.producthunt.com/posts/codingnotes?utm_source=badge-top-post-badge&utm_medium=badge&utm_souce=badge-codingnotes" target="_blank"><img src="https://api.producthunt.com/widgets/embed-image/v1/top-post-badge.svg?post_id=370406&theme=dark&period=daily"
        alt="CodingNotes" className="  mt-12 w-[500px] h-[100px]   "  /></Link>
      </div>


      <p className="mb-4 mt-4 mx-auto text-lg sm:text-2xl">&quot; The notes and flashcards are really helpful and I am  sure they will  be a big help to a lot of people. &quot;</p>
      <p className=" mb-16 mx-auto text-xl underline text-gray-300"><Link href="https://www.producthunt.com/@samalyx" target="_blank" >Samar Ali, Full-Stack Developer and CEO </Link>  </p>


       <div className='sm:grid  grid-cols-3 mx-auto   cursor-pointer 
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


               


    </div>

    

    </div>


    </div>

   


  )
}

export default Header