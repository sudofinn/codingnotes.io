import React,{useState} from 'react'
import ModalVideo from 'react-modal-video'
import 'node_modules/react-modal-video/scss/modal-video.scss';


import Image from 'next/image'
import Link from "next/link"
import Head from "next/head"
import Router from "next/router"


import { Fade , Bounce , Zoom , Roll ,  } from "react-awesome-reveal";



import LaptopMockup from "../../assets/covers/monofocus_mockup.png"


import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css'


import NavBar from '../../components/home/NavBar'
import Footer from '../../components/home/Footer'

import First from "../../assets/template_covers/focus2_1.png"
import Second from "../../assets/template_covers/focus2_2.png"
import Third from "../../assets/template_covers/focus2_3.png"
import Forth from "../../assets/template_covers/focus2_4.png"
import Fifth from "../../assets/template_covers/focus2_5.png"
import Six from "../../assets/template_covers/focus2_6.png"
import Seven from "../../assets/template_covers/focus2_7.png"
import Eight from "../../assets/template_covers/focus2_8.png"





const Index = () => {

  const slideImages = [
  {
    src: First,
    caption: 'Slide 1'
  },
  {
    src: Second,
    caption: 'Slide 2'
  },
  {
    src: Third,
    caption: 'Slide 3'
  },
  {
    src: Forth,
    caption: 'Slide 4'
  },
  {
    src: Fifth,
    caption: 'Slide 5'
  },
  {
    src: Six,
    caption: 'Slide 6'
  },
  {
    src: Seven,
    caption: 'Slide 7'
  },
];


  

  function smallRoute() {
    Router.push("https://vimfinn.gumroad.com/l/monofocus?option=Xn3qsPT_Dym9W6k5oh02eQ%3D%3D&_gl=1*1yxzhbx*_ga*NjU1NjY0OTk2LjE2NDgwNjQ1Nzc.*_ga_6LJN6D94N6*MTY3MzY5MTc1NC4yODUuMS4xNjczNjkzNTU5LjAuMC4w&wanted=true")
  }

  function largeRoute() {
    Router.push("https://vimfinn.gumroad.com/l/monofocus?option=y70Mnbbnhq_s8_OJ9Cmaxg%3D%3D&_gl=1*6shire*_ga*NjU1NjY0OTk2LjE2NDgwNjQ1Nzc.*_ga_6LJN6D94N6*MTY3MzY5MTc1NC4yODUuMS4xNjczNjkzNTU5LjAuMC4w&wanted=true")
  }
  function mediumRoute() {
    Router.push("https://vimfinn.gumroad.com/l/monofocus?option=AlJu3ClWBWAZ1OtsFbKv-g%3D%3D&_gl=1*1yxzhbx*_ga*NjU1NjY0OTk2LjE2NDgwNjQ1Nzc.*_ga_6LJN6D94N6*MTY3MzY5MTc1NC4yODUuMS4xNjczNjkzNTU5LjAuMC4w&wanted=true")
  }


 const [isOpen, setOpen] = useState(false)


  return (

    <div className='w-full min-h-screen font-extrabold   bg-gray-900 p-4 text-white '>
      <Head>
      <title>Mono Focus OS </title>
      <meta name="description" content="Notion Mono Focus Operating System"></meta>
      <meta name="author" content="Finn Guha"></meta>
  <meta name="viewport" content="width=device-width, initial-scale=1.0,maximum-scale=1.0, user-scalable=no"></meta>
  <meta name="theme-color" content="none"></meta>
  <meta name="mobile-web-app-capable" content="yes"></meta>
  <meta name="keywords" content="




notion templates,
notion planer,
notion examples,
notion notes template,
notion pages,
project50 notion,
second brain notion template,
to-do notion template,
   "></meta>
  

      <meta
          property="og:image"
          content="../public/favicon.ico"
        />
    </Head>       


     <div className='text-center '>
      <div className='hidden lg:flex'>
      <NavBar />

      </div>
            <h1   className="text-4xl lg:text-7xl mt-12  font-extrabold">Mono Focus OS ( Notion Template) </h1>



    </div>
     <div className="slide-container  mt-8 lg:mt-0 mx-0 lg:mx-32  ">
        <Slide transitionDuration={500} >
         {slideImages.map((slideImage, index)=> (
            <div className="each-slide  " key={index}>
               <Image className="  rounded-xl mx-auto  mt-10 md:mt-8 shadow-xl shadow-black" src={slideImage.src} alt="The Header" width={1200} height={200} >

               </Image>
            </div>
          ))} 
        </Slide>
      </div>

        <div className='text-center'>
       
        <div  data-aos-delay="100" className='mt-0 md:mt-32 xl:mt-0'>
          <Zoom>
            <h1   className="text-4xl xl:text-6xl  mt-32 xl:mt-64 inline-flex mx-auto  px-14 py-6 mb-8 
         font-extrabold bg-white text-black hover:bg-gray-200 duration-500 rounded  ">A quick summary </h1>
            <ul className="  mt-8 text-2xl xl:text-4xl mx-[10px] sm:mx-[100px] lg:mx-[200px] xl:mx-[300px] 2xl:mx-[550px] ">
                      <li className="mt-6 mb-6"> 3 different versions.</li>
                      <li className="mt-6 mb-6">Up to 25+ subpages,11 databases, 25+ pictures, 50+ quotes.</li >
                      <li className="mt-6 mb-6"> This gives you an affordable all-in-one productivity system.</li >

            </ul>
            </Zoom>

            <Link href="https://www.notion.so/pricing" target="_blank">
             
        <button id="badge-dismiss-default" className=" mt-4 inline-flex  mb-8  items-center px-7  py-5  text-2xl font-bold bg-[#FFB800] hover:bg-yellow-200   text-black rounded">
          Get Notion for free
        </button>
            </Link>


        <div className=''>
            <Image className=" mt-4  w-full  md:w-5/6 xl:w-2/3 mx-auto  " src={LaptopMockup} alt="The Mockup"     />
      </div>
      
      <Zoom>
      <Link href="/notesandflashcards" target="_blank">
        
            <h1   className="text-4xl xl:text-6xl  mt-32 inline-flex mx-auto  px-14 py-6 mb-8 
         font-extrabold bg-white text-black hover:bg-gray-200 duration-500 rounded">How to start 🖱️ </h1>
      </Link>
            <ul className=" list-disc mt-8 text-lg xl:text-4xl  mx-[10px] sm:mx-[100px] lg:mx-[200px] xl:mx-[300px] 2xl:mx-[550px] ">
                      <p className="mt-6 mb-6 text-xl">When purchasing, you will get a Notion website. From there on, you can duplicate this page into your Notion App. You can get Notion <Link href="https://www.notion.so/pricing" className='text-gray-500' target="_blank">here</Link>
                      , it is free ! It is is an incredbile Notetaking app millions of people use all around the world to stay productive and get stuff done.</p>
                      

            </ul>
            </Zoom>
                      

              
            </div>

    </div>


    {/*credits for pricing card: https://mambaui.com/components/pricing */}

<Zoom>
    <section className="py-20 mt-24">
	<div className="container px-4 mx-auto">
		<div className="max-w-2xl mx-auto mb-16 text-center">
			<span className="font-bold tracking-wider uppercase text-purple-700">Pricing</span>
			<h2 className="text-4xl font-bold lg:text-5xl">Become a top developer.</h2>
		</div>
		<div className="flex flex-wrap items-stretch -mx-4">
			<div className="flex w-full mb-8 sm:px-4 md:w-1/2 lg:w-1/3 lg:mb-0">
				<div className="flex flex-col p-6 space-y-6 rounded shadow sm:p-8 bg-gray-800 text-xl">
					<div className="space-y-2">
						<h4 className="text-2xl font-bold">Small</h4>
						<span className="text-6xl font-bold">$5</span>
					</div>
					<p className="mt-3 leading-relaxed text-white">The small version of the Notion Mono Focus OS.</p>
					<ul className="flex-1 mb-6 ">
						<li className="flex mb-2 space-x-2">
							<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="#2dd4bf" className="flex-shrink-0 w-6 h-6 ">
								<path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
							</svg>
							<span>5 databases</span>
						</li>
						<li className="flex mb-2 space-x-2">
							<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="#2dd4bf" className="flex-shrink-0 w-6 h-6 ">
								<path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
							</svg>
							<span>30+ quotes</span>
						</li>
						<li className="flex mb-2 space-x-2">
							<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="#2dd4bf" className="flex-shrink-0 w-6 h-6 ">
								<path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
							</svg>
							<span>15+ pictures</span>
						</li>
						<li className="flex mb-2 space-x-2">
							<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="#2dd4bf" className="flex-shrink-0 w-6 h-6 ">
								<path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
							</svg>
							<span>&apos;Inventory section&apos;with 2 subpages</span>
						</li>
						<li className="flex mb-2 space-x-2">
							<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="#2dd4bf" className="flex-shrink-0 w-6 h-6 ">
								<path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
							</svg>
							<span>No &apos;Develop yourself section&apos; </span>
						</li>
						<li className="flex mb-2 space-x-2">
							<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="#2dd4bf" className="flex-shrink-0 w-6 h-6 ">
								<path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
							</svg>
							<span>&apos;Your 24 hours section&apos; with 4 subpages</span>
						</li>
						<li className="flex mb-2 space-x-2">
							<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="#2dd4bf" className="flex-shrink-0 w-6 h-6 ">
								<path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
							</svg>
							<span>No &apos;Journal + Habit Tracker section&apos; </span>
						</li>
						<li className="flex mb-2 space-x-2">
							<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="#2dd4bf" className="flex-shrink-0 w-6 h-6 ">
								<path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
							</svg>
							<span>No &apos;Focus hub section &apos; </span>
						</li>
						<li className="flex mb-2 space-x-2">
							<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="#2dd4bf" className="flex-shrink-0 w-6 h-6 ">
								<path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
							</svg>
							<span>&apos;Challenges&apos; section with 10 subpages</span>
						</li>
						<li className="flex mb-2 space-x-2">
							<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="#2dd4bf" className="flex-shrink-0 w-6 h-6 ">
								<path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
							</svg>
							<span>Consistent use of Notion Icons</span>
						</li>
					</ul>
					<button onClick={smallRoute} type="button" className="inline-block px-5 py-3 font-semibold tracking-wider text-center rounded bg-purple-700 hover:bg-purple-600 ">
            I want this !</button>
				</div>
			</div>
			<div className="flex w-full mb-8 sm:px-4 md:w-1/2 lg:w-1/3 lg:mb-0">
				<div className="flex flex-col p-6 space-y-6 rounded shadow sm:p-8 bg-teal-400 text-gray-900 font-bold text-xl">
					<div className="space-y-2">
						<h4 className="text-2xl font-bold">Large</h4>
						<span className="text-6xl font-bold">$9
						</span>
					</div>
					<p className="leading-relaxed"> The large version of the Notion Mono Focus OS.</p>
					<ul className="flex-1 space-y-2 ">
						<li className="flex items-center space-x-2">
							<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="#fff" className="flex-shrink-0 w-6 h-6">
								<path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
							</svg>
							<span>11 databases</span>
						</li>
						<li className="flex items-center space-x-2">
							<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="#fff" className="flex-shrink-0 w-6 h-6">
								<path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
							</svg>
							<span>50 + quotes</span>
						</li>
						<li className="flex items-center space-x-2">
							<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="#fff" className="flex-shrink-0 w-6 h-6">
								<path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
							</svg>
							<span>25 + pictures</span>
						</li>
						<li className="flex items-center space-x-2">
							<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="#fff" className="flex-shrink-0 w-6 h-6">
								<path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
							</svg>
							<span>&apos;Inventory section&apos; with 4 subpages</span>
						</li>
						<li className="flex items-center space-x-2">
							<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="#fff" className="flex-shrink-0 w-6 h-6">
								<path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
							</svg>
							<span>&apos;Develop yourself section&apos; with 4 subpages</span>
						</li>
						<li className="flex items-center space-x-2">
							<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="#fff" className="flex-shrink-0 w-6 h-6">
								<path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
							</svg>
							<span>&apos;Your 24 hours section&apos; with 4 subpages</span>
						</li>
						<li className="flex items-center space-x-2">
							<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="#fff" className="flex-shrink-0 w-6 h-6">
								<path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
							</svg>
							<span>&apos;Journal and Habit Tracker section &apos; with 2 subpages</span>
						</li>
						<li className="flex items-center space-x-2">
							<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="#fff" className="flex-shrink-0 w-6 h-6">
								<path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
							</svg>
							<span>&apos;Focus Hub  section &apos; with 2 subpages</span>
						</li>
						<li className="flex items-center space-x-2">
							<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="#fff" className="flex-shrink-0 w-6 h-6">
								<path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
							</svg>
							<span>&apos;Challenges section &apos; with 10 subpages</span>
						</li>
						<li className="flex items-center space-x-2">
							<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="#fff" className="flex-shrink-0 w-6 h-6">
								<path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
							</svg>
							<span>&apos;Consistent use of Notion Icons.</span>
						</li>
					</ul>
					<button onClick={largeRoute} type="button" className="inline-block px-5 py-3 font-semibold tracking-wider text-center rounded bg-gray-900 hover:bg-gray-700 text-white">
            I want this !</button>
				</div>
			</div>

      <div className="flex w-full mb-8 sm:px-4 md:w-1/2 lg:w-1/3 lg:mb-0">
				<div className="flex flex-col p-6 space-y-6 rounded shadow sm:p-8 bg-gray-800 text-xl">
					<div className="space-y-2">
						<h4 className="text-2xl font-bold">Medium</h4>
						<span className="text-6xl font-bold">$7
						</span>
					</div>
					<p className="leading-relaxed"> The medium version of the Notion Mono Focus OS.</p>
					<ul className="flex-1 space-y-2">
						
						<li className="flex mb-2 space-x-2">
							<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="#2dd4bf" className="flex-shrink-0 w-6 h-6 ">
								<path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
							</svg>
							<span>8 databases</span>
						</li>
						<li className="flex mb-2 space-x-2">
							<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="#2dd4bf" className="flex-shrink-0 w-6 h-6 ">
								<path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
							</svg>
							<span>40+ quotes</span>
						</li>
						<li className="flex mb-2 space-x-2">
							<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="#2dd4bf" className="flex-shrink-0 w-6 h-6 ">
								<path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
							</svg>
							<span>20+ pictures</span>
						</li>
						<li className="flex mb-2 space-x-2">
							<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="#2dd4bf" className="flex-shrink-0 w-6 h-6 ">
								<path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
							</svg>
							<span>&apos;Inventory section&apos;with 4 subpages</span>
						</li>
						<li className="flex mb-2 space-x-2">
							<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="#2dd4bf" className="flex-shrink-0 w-6 h-6 ">
								<path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
							</svg>
							<span>&apos;Develop yourself section&apos; with 2 subpages </span>
						</li>
						<li className="flex mb-2 space-x-2">
							<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="#2dd4bf" className="flex-shrink-0 w-6 h-6 ">
								<path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
							</svg>
							<span>&apos;Your 24 hours section&apos; with 4 subpages</span>
						</li>
						<li className="flex mb-2 space-x-2">
							<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="#2dd4bf" className="flex-shrink-0 w-6 h-6 ">
								<path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
							</svg>
							<span>No &apos;Journal + Habit Tracker section&apos; </span>
						</li>
						<li className="flex mb-2 space-x-2">
							<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="#2dd4bf" className="flex-shrink-0 w-6 h-6 ">
								<path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
							</svg>
							<span> &apos;Focus hub section &apos; with 1 subpage </span>
						</li>
						<li className="flex mb-2 space-x-2">
							<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="#2dd4bf" className="flex-shrink-0 w-6 h-6 ">
								<path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
							</svg>
							<span>&apos;Challenges&apos; section with 10 subpages</span>
						</li>
						<li className="flex mb-2 space-x-2">
							<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="#2dd4bf" className="flex-shrink-0 w-6 h-6 ">
								<path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
							</svg>
							<span>Consistent use of Notion Icons</span>
						</li>
					</ul>
					<button onClick={mediumRoute} type="button" className="inline-block px-5 py-3 font-semibold tracking-wider text-center rounded bg-purple-700 hover:bg-purple-600 text-white">
            I want this !</button>
				</div>
			</div>


			
		</div>
	</div>
</section>
</Zoom>

<Footer />



      </div>

      
    

  )
}

export default Index