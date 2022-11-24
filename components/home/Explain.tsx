import React from 'react'
import NotesImage from "../../assets/second.png"
import FlashcardImage from "../../assets/third.png"
import Image from "next/image"
import useDarkMode from '../hooks/useDarkMode'


const Explain = () => {
  return (
      <div className='flex justify-between'>

        <div className=''>
            <h1  data-aos="fade-up" className="text-8xl  ml-32  mt-48 font-extrabold">1.Notes </h1>
            <h3  data-aos="fade-up" className="text-3xl text-orange-600 ml-32 mr-32 mt-12 font-extrabold">- Learn the fundamentals
            of the language</h3>

            <h3  data-aos="fade-up" className="text-3xl text-orange-600 ml-32 mr-32 mt-12 font-extrabold">- Understand basic or advanced material 
            with comprehensive examples.</h3>

            <h3  data-aos="fade-up" className="text-3xl text-orange-600 ml-32 mr-32 mt-12 font-extrabold">- Grasp the 
            theory and deepen your knowledge with examples. </h3>

            <h3  data-aos="fade-up" className="text-3xl text-gray-600  border-l-8 pl-2  border-gray-400 ml-32 mr-32 mt-12 font-extrabold">Notes are made 
            with Notion. You can download it or just use it in the browser without signing up. </h3>

            <button className="text-black shadow-md  bg-white dark:bg-black dark:text-white  px-7 py-5
                  rounded-md hover:scale-110 duration-300 ml-32 mt-8 hover:shadow-xl hover:shadow-black hover:text-black hover:bg-white
                ">
              The science of notes !
            </button>

              <div className=''>
            <Image className="mt-16 ml-32 mr-16  " src={NotesImage} alt="The Header"  width={700}
            height={500}   />
      </div>

             
            </div>



        <div className=''>
             <div className=''>
            <h1  data-aos="fade-up" className="text-8xl  ml-32  mt-48 font-extrabold">2.Flashcards </h1>
             <h3  data-aos="fade-up" className="text-3xl text-yellow-600 ml-32 mr-32 mt-12 font-extrabold">- Deepen your knowledge
            of the language</h3>

            <h3  data-aos="fade-up" className="text-3xl text-yellow-600 ml-32 mr-32 mt-12 font-extrabold"> - Use the most advanced way of learning
            with comprehensive examples.</h3>

            <h3  data-aos="fade-up" className="text-3xl text-yellow-600 ml-32 mr-32 mt-12  font-extrabold">- Make it stick in your brain
            forever </h3>


            <h3  data-aos="fade-up" className="text-3xl text-gray-400  border-l-8 pl-2  border-gray-400 ml-32 mr-32 mt-12 font-extrabold">Flashcards are made
            using Anki, arguably the most popular and advanced Flaschard App. </h3>


            <button className="text-black shadow-md  bg-white dark:bg-black dark:text-white  px-7 py-5
                  rounded-md hover:scale-110 duration-300 ml-32 mt-8 hover:shadow-xl hover:shadow-black hover:text-black hover:bg-white
                ">
              The science of flashcards !
            </button>

              <div className=''>
            <Image className="mt-16 ml-32 mr-16  " src={FlashcardImage} alt="The Header"  width={700}
            height={500}   />
      </div>

             
            </div>
      </div>


    </div>
  )
}

export default Explain