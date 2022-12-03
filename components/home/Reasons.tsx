import React from 'react'
import HeaderImage from "../../assets/Launch.svg"
import SecondHeaderImage from "../../assets/work-from-home.svg"
import Image from "next/image"
import useDarkMode from '../hooks/useDarkMode'

const Reasons = () => {
   const [darkTheme, setDarkTheme] = useDarkMode();
   const handleMode = () => setDarkTheme(!darkTheme);


  return (
      <div className='flex justify-center flex-wrap lg:flex-nowrap  lg:justify-between'>

        <div className=''>
            <h1  data-aos="fade-up" className="text-6xl 2xl:text-8xl  ml-2 mx-2  xl:ml-32   mt-48 font-extrabold">It´s your chance ! </h1>
            <ul className=" list-disc ml-12 xl:ml-40 mt-8 font-extrabold text-2xl 2xl:text-3xl mr-4  ">
                      <li className="mt-6 mb-6">Get access to up to hundres of pages and thousands of flashcards !</li>
                      <li className="mt-6 mb-6"> Explore advanced features by using a Notes app that instantlythe concept you need</li>
                      <li className="mt-6 mb-6"> Easily add , delete or replace your notes</li>
                      <li className="mt-6 mb-6"> Shorten your learning time by using a flashcard app that uses efficient
                        algorithms so that you learn effectively
                          
                      </li>
                      
                    </ul>

              
            </div>



        <div className=''>
            <Image className="mt-72  hidden lg:block mr-48 w-[800px] h-[400px] 2xl:w-[1000px] 2xl:h-[500px]  " src={HeaderImage} alt="The Header"    />
      </div>

        <div className='flex flex-wrap'>
            <Image className="mt-16 flex flex-wrap  lg:hidden  mr-48 w-[800px] h-[400px] 2xl:w-[1000px] 2xl:h-[500px]  " src={SecondHeaderImage} alt="The Header"    />
      </div>


    </div>
  )
}

export default Reasons