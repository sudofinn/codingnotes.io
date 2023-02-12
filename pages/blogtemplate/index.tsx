
import React,{useState} from 'react'
import ModalVideo from 'react-modal-video'
import 'node_modules/react-modal-video/scss/modal-video.scss';


import Image from 'next/image'
import Link from "next/link"
import Head from "next/head"
import Router from "next/router"


import { Fade , Bounce , Zoom , Roll ,  } from "react-awesome-reveal";



import LaptopMockup from "../../assets/covers/blogtemplate_mockup.png"


import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css'


import NavBar from '../../components/home/NavBar'
import Footer from '../../components/home/Footer'

import First from "../../assets/template_covers/blog_first.png"
import Second from "../../assets/template_covers/blog_second.png"
import Third from  "../../assets/template_covers/blog_third.png"
import Forth from  "../../assets/template_covers/blog_forth.png"
import Fifth from  "../../assets/template_covers/blog_fifth.png"
import Sixth from  "../../assets/template_covers/blog_sixth.png"





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
    src: Sixth,
    caption: 'Slide 6'
  },

];


  


  function templatePush() {
    Router.push("https://vimfinn.gumroad.com/l/blogtemplate?wanted=true")
  }


 const [isOpen, setOpen] = useState(false)


  return (

    <div className='w-full min-h-screen font-extrabold   bg-gray-900 p-4 text-white '>
           <Head>
      <title>Blog Template</title>
      <meta name="description" content="Blog Template HTML/Javascript"></meta>
      <meta name="author" content="Finn Guha"></meta>
  <meta name="viewport" content="width=device-width, initial-scale=1.0,maximum-scale=1.0, user-scalable=no"></meta>
  <meta name="theme-color" content="none"></meta>
  <meta name="mobile-web-app-capable" content="yes"></meta>
  <meta name="keywords" content="
blog template free,
blog template wordpress,
blog post template,
html blog template free,
webflow blog template,
envato blog templates,
bootstrap blog template,
simple blog template
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
            <h1   className="text-4xl lg:text-7xl mt-12  font-extrabold">Personal Blog Template </h1>



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
                      <li className="mt-6 mb-6">Complete template with various sections and features.</li>
                      <li className="mt-6 mb-6">Built using NextJS with TypeScript and TailwindCSS. </li >
                      <li className="mt-6 mb-6"> This gives you a good starting point for building a stylish and successful blog.</li >

            </ul>
            </Zoom>

            <Link href="https://www.notion.so/pricing" target="_blank">
             
        <button id="badge-dismiss-default" className=" mt-4 inline-flex  mb-8  items-center px-7  py-5  text-2xl font-bold bg-gray-200 hover:bg-gray-100 text-black rounded">
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
                      <p className="mt-6 mb-6 text-xl">When purchasing, you will get a ZIP-file containing the code.</p>
                      <p className="mt-6 mb-6 text-xl"> You can also watch a live demo of the website by clicking on the button below.</p>
                      

            </ul>
            <Link href="https://atinyimprovement.vercel.app/" target="_blank">
             <button id="badge-dismiss-default" className=" mt-4 inline-flex  mb-8  items-center px-7  py-5  text-2xl font-bold bg-gray-200 hover:bg-gray-100 text-black rounded">
          See a live demo
        </button>
            </Link>
            </Zoom>
                      

              
            </div>

    </div>


    {/*credits for pricing card: https://mambaui.com/components/pricing */}

<Zoom>
    <section className="py-20 mt-24  ">
	<div className="container px-4 mx-auto">
		<div className="max-w-2xl mx-auto mb-16 text-center">
			<span className="font-bold tracking-wider uppercase text-gray-200">Pricing</span>
			<h2 className="text-4xl font-bold lg:text-5xl">Become a top developer.</h2>
		</div>
		<div className="flex justify-center -mx-4">
			
			<div className="flex justify-center w-full mb-8 sm:px-4 md:w-5/6 lg:mb-0">
				<div className="flex flex-col p-6 space-y-6 rounded shadow sm:p-8 bg-gray-200 text-gray-900 font-bold text-xl">
					<div className="space-y-2">
						<h4 className="text-2xl font-bold">Template</h4>
						<span className="text-6xl font-bold">$19
						</span>
					</div>
					<p className="leading-relaxed"> The code for whole template: various sections and features, build with the best technologies..</p>
					<ul className="flex-1 space-y-2 ">
						<li className="flex items-center space-x-2">
							<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="#000" className="flex-shrink-0 w-6 h-6">
								<path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
							</svg>
							<span>6 homepage and 2 topic section</span>
						</li>
						<li className="flex items-center space-x-2">
							<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="#000" className="flex-shrink-0 w-6 h-6">
								<path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
							</svg>
							<span>Responsive design ( extensively tested )</span>
						</li>
						<li className="flex items-center space-x-2">
							<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="#000" className="flex-shrink-0 w-6 h-6">
								<path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
							</svg>
							<span>Dark Mode and Form Submission feature</span>
						</li>
						<li className="flex items-center space-x-2">
							<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="#000" className="flex-shrink-0 w-6 h-6">
								<path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
							</svg>
							<span>2 example articles</span>
						</li>
					</ul>
					<button onClick={templatePush} type="button" className="inline-block px-5 py-3 font-semibold tracking-wider text-center rounded bg-gray-900 hover:bg-gray-700 text-white">
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