import React from 'react'
import HeaderImage from "../../assets/engineer_yellow.svg"
import useDarkMode from '../hooks/useDarkMode'

import Link from "next/link"
import Image from "next/image"


const Header = () => {
   const [darkTheme, setDarkTheme] = useDarkMode();
   const handleMode = () => setDarkTheme(!darkTheme);


  return (
      <div className='flex flex-wrap   md:justify-between  '>

        <div className=''>
            <h1  data-aos="fade-up" className=" text-6xl xl:text-7xl 2xl:text-8xl  text-center sm:text-left ml-4    sm:ml-32  mt-20 sm:mt-48 font-extrabold">Learn to code</h1>
            <h1   className="text-4xl xl:text-5xl 2xl:text-6xl text-orange-600 text-center sm:text-left  ml-0   sm:ml-32 mt-4 font-extrabold">and never forget it !</h1>
               
               <Link className='' href="/products">

              <button className="text-black shadow-md  mt-8  dark:bg-black dark:text-white px-12 md:px-12 py-4 lg:px-12 lg:py-5 
                  rounded-md hover:scale-110 duration-300 ml-28 md:ml-32 
                bg-gradient-to-r from-yellow-400  to-red-800 hover:from-red-800 hover:to-yellow-400 hover:shadow-xl hover:shadow-black  hover:bg-white
                ">
              Discover
              {/* modal pop up video */}
            </button>
               </Link>

               

            
        
            <Link href="https://www.producthunt.com/posts/codingnotes?utm_source=badge-top-post-badge&utm_medium=badge&utm_souce=badge-codingnotes" target="_blank"><img src="https://api.producthunt.com/widgets/embed-image/v1/top-post-badge.svg?post_id=370406&theme=dark&period=daily"
        alt="CodingNotes" className=" mt-8 text-center md:text-left ml-8 sm:ml-24 lg:ml-28   w-[400px] h-[80px] "  /></Link>


            

            </div>



        <div className=' mx-auto md:mx-0 '>
            <Image className="mt-8 md:mt-36 lg:mt-36 md:hidden lg:block mr-8 mx-auto text-center w-[350px] h-[400px]  lg:w-[400px] lg:h-[450px]  xl:w-[500px] xl:h-[450px] 2xl:w-[600px] 2xl:h-[550px] object-cover  " src={HeaderImage} alt="The Header"    />
      </div>


    </div>
  )
}

export default Header