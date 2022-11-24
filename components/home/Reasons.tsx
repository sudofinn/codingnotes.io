import React from 'react'
import HeaderImage from "../../assets/Launch.svg"
import Image from "next/image"
import useDarkMode from '../hooks/useDarkMode'

const Reasons = () => {
   const [darkTheme, setDarkTheme] = useDarkMode();
   const handleMode = () => setDarkTheme(!darkTheme);


  return (
      <div className='flex justify-between'>

        <div className=''>
            <h1  data-aos="fade-up" className="text-8xl  ml-32   mt-48 font-extrabold">It´s your chance ! </h1>
            <ul className=" list-disc ml-40 mt-8 text-4xl mr-64">
                      <li className="mt-6 mb-6">Get access to up to hundres of pages and thousands of flashcards !</li>
                      <li className="mt-6 mb-6"> Explore advanced features by using a Notes app that instantlythe concept you need</li>
                      <li className="mt-6 mb-6"> Easily add , delete or replace your notes</li>
                      <li className="mt-6 mb-6"> Shorten your learning time by using a flashcard app that uses efficient
                        algorithms so that you learn effectively
                          
                      </li>
                      
                    </ul>

              
            </div>



        <div className=''>
            <Image className="mt-56 mr-48   " src={HeaderImage} alt="The Header"  width={1000}
            height={500}   />
      </div>


    </div>
  )
}

export default Reasons