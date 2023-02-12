import React from 'react'
import Head from "next/head"


import NavBar from "../../components/home/NavBar";
import Footer from "../../components/home/Footer";


import {
  FaMoon,
  FaSun,
} from 'react-icons/fa';

const Index = () => {


  return (
    <div className="w-full min-h-screen font-extrabold   bg-gray-900 p-4 text-white">

    <Head>
      <title>Reach out </title>
      <meta name="description" content="Ask questions regarding Frontend packages"></meta>
      <meta name="author" content="Finn Guha"></meta>
  <meta name="viewport" content="width=device-width, initial-scale=1.0,maximum-scale=1.0, user-scalable=no"></meta>
  <meta name="theme-color" content="none"></meta>
  <meta name="mobile-web-app-capable" content="yes"></meta>
  <meta name="keywords" content="
learn html,
learn css,
learn javascript,
learn reactjs,
learn the frontend,
notion templates,
notion for freelancers,
notion to stay productive


   "></meta>
  

      <meta
          property="og:image"
          content="../public/favicon.ico"
        />
    </Head>   
    <NavBar />

      <div className="p-4 justify-center max-w-screen-lg mx-auto ">
        <div className="pb-8  ">
          <p data-aos="fade-up" className="text-4xl font-bold text-center  mb-4 ">
            Contact
          </p>
          <p  data-aos="fade-up" className="py-6 text-xl text-center ">Submit the form below to get in touch with me</p>
          
        </div>

        <div className=" flex justify-center items-center">

          <form action= {process.env.NEXT_PUBLIC_KEY}
              method="POST"
              
            className=" flex flex-col w-full md:w-1/2"
          >
            <input
              type="text"
              name="name"
              placeholder="Enter your name"
              className="p-2 bg-gradient-to-r text-black dark:text-white from-blue-500 to-purple-400 border-2 dark:border-black rounded-md focus:outline-none"
            />
            <input
              type="text"
              name="email"
              placeholder="Enter your email"
              className="my-4 p-2 text-white bg-gradient-to-r from-purple-400 to-blue-500 border-2  dark:border-black rounded-md  focus:outline-none"
            />
            <textarea
              name="message"
              placeholder="Enter your message"
              rows={9}
              className="p-2 bg-gradient-to-r from-yellow-400 to-orange-500  border-2 rounded-md dark:border-black text-black focus:outline-none"
            ></textarea>

            <button className="text-black shadow-md hover:shadow-white bg-white dark:bg-black dark:text-white hover:bg-black hover:text-white px-8 py-4
             my-8 mx-auto flex  items-center rounded-md hover:scale-110 duration-300 mb-8
             bg-gradient-to-r from-blue-500 via-purple-500 to-orange-500">
              Let us talk
            </button>
          </form>
        </div>

        
        
    <Footer />
      </div>
      
    </div>
    
  );
}

export default Index