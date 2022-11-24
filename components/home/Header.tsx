import React from 'react'
import HeaderImage from "../../assets/engineer.svg"
import Image from "next/image"
import useDarkMode from '../hooks/useDarkMode'


const Header = () => {
   const [darkTheme, setDarkTheme] = useDarkMode();
   const handleMode = () => setDarkTheme(!darkTheme);


  return (
      <div className='flex justify-between'>

        <div className=''>
            <h1  data-aos="fade-up" className="text-8xl  ml-32  mt-48 font-extrabold">Learn to code - </h1>
            <h1  data-aos="fade-up" className="text-7xl text-purple-800 ml-32 mt-12 font-extrabold">and never forget it !</h1>

              <button className="text-black shadow-md   dark:bg-black dark:text-white px-7 py-5
                mx-auto  rounded-md hover:scale-110 duration-300 ml-32 mt-16
                bg-gradient-to-r from-blue-400  to-red-800 hover:from-red-800 hover:to-blue-400 hover:shadow-xl hover:shadow-black  hover:bg-white
                ">
              Watch a video
              {/* modal pop up video */}
            </button>

              <button className="text-black shadow-md  bg-white dark:bg-black dark:text-white  px-7 py-5
                mx-auto  rounded-md hover:scale-110 duration-300 ml-16 mt-16 hover:shadow-xl hover:shadow-black hover:text-black hover:bg-white
                ">
              Discover !
            </button>
            </div>



        <div className=''>
            <Image className="mt-24 mr-16  " src={HeaderImage} alt="The Header"  width={700}
            height={500}   />
      </div>


    </div>
  )
}

export default Header