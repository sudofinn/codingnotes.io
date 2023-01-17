import React,{useState} from 'react'
import ModalVideo from 'react-modal-video'
import 'node_modules/react-modal-video/scss/modal-video.scss';


import Image from 'next/image'
import Link from "next/link"
import Head from "next/head"
import Router from "next/router"


import { Fade , Bounce , Zoom , Roll ,  } from "react-awesome-reveal";



import LaptopMockup from "../../assets/covers/reactjs_mockup.png"


import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css'


import NavBar from '../../components/home/NavBar'
import Footer from '../../components/home/Footer'

import First from "../../assets/covers/frontendbundle_1.1.png"
import Second from "../../assets/covers/frontendbundle_2.png"
import Third from "../../assets/covers/frontendbundle_3.png"
import Forth from "../../assets/covers/frontendbundle_4.png"
import Fifth from "../../assets/covers/frontendbundle_5.png"








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
 
];


  

  function onlyNotesRoute() {
    Router.push("https://vimfinn.gumroad.com/l/frontendbundle?option=Gn6KtC8AdMhaeKKLpdJWyg%3D%3D&_gl=1*mo88b9*_ga*NjU1NjY0OTk2LjE2NDgwNjQ1Nzc.*_ga_6LJN6D94N6*MTY3MzY4NTcyNS4yODQuMS4xNjczNjg1NzY1LjAuMC4w&wanted=true")
  }

  function bothRoute() {
    Router.push("https://vimfinn.gumroad.com/l/frontendbundle?wanted=true")
  }
  function onlyFlashcardsRoute() {
    Router.push("https://vimfinn.gumroad.com/l/frontendbundle?option=V0-sTShBDkOZv4SFfhzcIg%3D%3D&_gl=1*mo88b9*_ga*NjU1NjY0OTk2LjE2NDgwNjQ1Nzc.*_ga_6LJN6D94N6*MTY3MzY4NTcyNS4yODQuMS4xNjczNjg1NzY1LjAuMC4w&wanted=true")
  }


 const [isOpen, setOpen] = useState(false)


  return (

    <div className='w-full min-h-screen font-extrabold   bg-gray-900 p-4 text-white '>
         <Head>
      <title>Frontend Bundle</title>
      <meta name="description" content="Frontend Bundle Notes and Flashcards" />
    </Head>

    


     <div className='text-center '>
      <div className='hidden lg:flex'>
      <NavBar />

      </div>
            <h1   className="text-4xl lg:text-7xl mt-12  font-extrabold">The complete Frontend Bundle  </h1>

            <ModalVideo channel='youtube' isOpen={isOpen} videoId="HjnkRvzmtxQ"  onClose={() => setOpen(false)} />
             
        <button id="badge-dismiss-default"  onClick={()=> setOpen(true)} className="btn-primary inline-flex mt-8 mb-8  items-center px-10  py-5  text-2xl font-bold bg-yellow-500 hover:bg-yellow-400 text-black rounded">
          Discover with a video
        </button>


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
                      <li className="mt-6 mb-6">210+ Notion pages and 1175+ Anki flashcards.</li>
                      <li className="mt-6 mb-6">105+ graphics and 80+ practical examples.</li >
                      <li className="mt-6 mb-6"> This includes every concept you need to know in order to master HTML , CSS, JavaScript, 
                      ReactJS and NextJS.</li >

            </ul>
            </Zoom>

            <Link href="https://www.notion.so/pricing" target="_blank">
             
        <button id="badge-dismiss-default" className=" mt-4 inline-flex  mb-8  items-center px-7  py-5  text-2xl font-bold bg-red-600 hover:bg-red-500 text-black rounded">
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
                      <p className="mt-6 mb-6 text-xl">When purchasing, you will get a Notion website. You can either learn in the browser or download Notion and duplicate the content. You can get Notion <Link href="https://www.notion.so/pricing" className='text-gray-500' target="_blank">here</Link>
                      , it is free ! Notion is an incredbile Notetaking app millions of people use all around the world.</p>
                      <p className="mt-6 mb-6 text-xl"> You will also find an  .apkg file. You can simply import this file into your Anki App. It is free on almost any OS, you can get it <Link href="https://apps.ankiweb.net/" target="_blank" className='text-gray-500'>here.</Link> Anki is an incredible flashcard app that uses advanced algorithms to make learning as efficient as possible.</p>
                      

            </ul>
            <Link href="https://apps.ankiweb.net/" target="_blank">
             <button id="badge-dismiss-default" className=" mt-4 inline-flex  mb-8  items-center px-7  py-5  text-2xl font-bold bg-red-600 hover:bg-red-500 text-black rounded">
          Get Anki here 
        </button>
            </Link>
            </Zoom>
                      

              
            </div>

    </div>


    {/*credits for pricing card: https://mambaui.com/components/pricing */}

<Zoom>
    <section className="py-20 mt-24">
	<div className="container px-4 mx-auto">
		<div className="max-w-2xl mx-auto mb-16 text-center">
			<span className="font-bold tracking-wider uppercase text-red-600">Pricing</span>
			<h2 className="text-4xl font-bold lg:text-5xl">Become a top developer.</h2>
		</div>
		<div className="flex flex-wrap items-stretch -mx-4">
			<div className="flex w-full mb-8 sm:px-4 md:w-1/2 lg:w-1/3 lg:mb-0">
				<div className="flex flex-col p-6 space-y-6 rounded shadow sm:p-8 bg-gray-800 text-xl">
					<div className="space-y-2">
						<h4 className="text-2xl font-bold">Notes</h4>
						<span className="text-6xl font-bold">$12</span>
					</div>
					<p className="mt-3 leading-relaxed text-white">Detailed Notes for HTML, CSS, JavaScript, ReactJS and NextJS.</p>
					<ul className="flex-1 mb-6 ">
						<li className="flex mb-2 space-x-2">
							<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="#dc2626" className="flex-shrink-0 w-6 h-6 ">
								<path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
							</svg>
							<span>210+ Notion Pages</span>
						</li>
						<li className="flex mb-2 space-x-2">
							<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="#dc2626" className="flex-shrink-0 w-6 h-6 ">
								<path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
							</svg>
							<span>105+ visuals/graphics</span>
						</li>
						<li className="flex mb-2 space-x-2">
							<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="#dc2626" className="flex-shrink-0 w-6 h-6 ">
								<path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
							</svg>
							<span>80+ real-world examples</span>
						</li>
					</ul>
					<button onClick={onlyNotesRoute} type="button" className="inline-block px-5 py-3 font-semibold tracking-wider text-center rounded bg-gray-300 hover:bg-gray-200 text-black ">
            I want this !</button>
				</div>
			</div>
			<div className="flex w-full mb-8 sm:px-4 md:w-1/2 lg:w-1/3 lg:mb-0">
				<div className="flex flex-col p-6 space-y-6 rounded shadow sm:p-8 bg-yellow-500 text-gray-900 font-bold text-xl">
					<div className="space-y-2">
						<h4 className="text-2xl font-bold">Both</h4>
						<span className="text-6xl font-bold">$19
						</span>
					</div>
					<p className="leading-relaxed"> Detailed Notes and extensive Flashcards for HTML, CSS, JavaScript, ReactJS and NextJS.</p>
					<ul className="flex-1 space-y-2 ">
						<li className="flex items-center space-x-2">
							<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="#fff" className="flex-shrink-0 w-6 h-6">
								<path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
							</svg>
							<span>210 + Notion Pages</span>
						</li>
						<li className="flex items-center space-x-2">
							<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="#fff" className="flex-shrink-0 w-6 h-6">
								<path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
							</svg>
							<span>1175+ Anki Flashcards</span>
						</li>
						<li className="flex items-center space-x-2">
							<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="#fff" className="flex-shrink-0 w-6 h-6">
								<path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
							</svg>
							<span>105+ visuals/graphics</span>
						</li>
						<li className="flex items-center space-x-2">
							<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="#fff" className="flex-shrink-0 w-6 h-6">
								<path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
							</svg>
							<span>80+ real-world examples</span>
						</li>
					</ul>
					<button onClick={bothRoute} type="button" className="inline-block px-5 py-3 font-semibold tracking-wider text-center rounded bg-gray-900 hover:bg-gray-700 text-white">
            I want this !</button>
				</div>
			</div>

      <div className="flex w-full mb-8 sm:px-4 md:w-1/2 lg:w-1/3 lg:mb-0">
				<div className="flex flex-col p-6 space-y-6 rounded shadow sm:p-8 bg-gray-800 text-xl">
					<div className="space-y-2">
						<h4 className="text-2xl font-bold">Flashcards</h4>
						<span className="text-6xl font-bold">$12
						</span>
					</div>
					<p className="leading-relaxed"> Extensive Flashcards for HTML, CSS, JavaScript, ReactJS and NextJS.</p>
					<ul className="flex-1 space-y-2">
						
						<li className="flex items-center space-x-2">
							<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="#dc2626" className="flex-shrink-0 w-6 h-6">
								<path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
							</svg>
							<span>1175+ Anki Flashcards</span>
						</li>
						<li className="flex items-center space-x-2">
							<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="#dc2626" className="flex-shrink-0 w-6 h-6">
								<path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
							</svg>
							<span>105+ visuals/graphics</span>
						</li>
						<li className="flex items-center space-x-2">
							<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="#dc2626" className="flex-shrink-0 w-6 h-6">
								<path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
							</svg>
							<span>80+ real-world examples</span>
						</li>
					</ul>
					<button onClick={onlyFlashcardsRoute} type="button" className="inline-block px-5 py-3 font-semibold tracking-wider text-center rounded bg-gray-300 hover:bg-gray-200 text-black">
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