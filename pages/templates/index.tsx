import React from "react";
import Link from "next/link";
import Router from "next/router";

import NavBar from "../../components/home/NavBar";
import Footer from "../../components/home/Footer";

import first from "../../assets/covers/github.png"
import second from "../../assets/covers/github.png"
import third from  "../../assets/covers/github.png"

import FrankSecondBrain from "../../assets/template_covers/frank_second_brain.webp"
import FreelanceOS from "../../assets/freelanceos_1.png"
import StartupOS from "../../assets/template_covers/startup_os_mockup.png"
import MonoFocus from "../../assets/template_covers/mono_focus_adjusted.png"
import GTD from "../../assets/template_covers/gtd_mockup.png"
import EasloSecondBrain from "../../assets/template_covers/second_brain_easlo.webp"
import BigFreelancerOS from "../../assets/template_covers/big_freelancer_os.png"
import ResolutionBoard from "../../assets/template_covers/resolution_board_easlo.png"
import CreatorPlaybook from "../../assets/template_covers/notion_creator_playbook.png"
import HealthHubOS from "../../assets/template_covers/health_hub_os.png"
import ProductLaunchDashboard from "../../assets/template_covers/product_launch_dashboard.png"
import StoicLifeOS from "../../assets/template_covers/stoic_life_os.png"

import monothumbnail from "../../assets/template_covers/focus_thumbnail.png"

import Head from 'next/head'



import Image from "next/image"

const Templates = () => {
  const techs = [
    {
      id: 1,
      src: FrankSecondBrain,
      title: "Second Brain",
      intro:"Seamlessly combines tasks, projects, notes, and goals.",
      style: "shadow-gray-500",
      href: "https://thomasfrank.gumroad.com/l/ultimatebrain?a=700326739",
      buttonstyle: "bg-gray-500 hover:bg-gray-400",
      buttontitle: "#second_brain"
    },
    {
      id: 2,
      src: FreelanceOS ,
      title: "Freelance OS",
      intro:"A productivity template every freelancer will benefit from.",
      style: "shadow-white",
      href: "https://freelance.codingnotes.io/",
      buttonstyle: "bg-white hover:bg-gray-100",
      buttontitle: "#freelance"
    },
     {
      id: 3,
      src: StartupOS,
      title: "Startup OS",
      intro:"Plan, launch, and grow your startup all in one place.",
      style: "shadow-red-500",
      href: "https://alirashidy.gumroad.com/l/notionstartup?a=700326739",
      buttonstyle: "bg-red-500 hover:bg-red-400",
      buttontitle: "#startup"
    },

     {
      id: 4,
      src: MonoFocus,
      title: "Mono Focus OS ",
      intro:"Simple workspace to focus and get meaningful work done.",
      style: "shadow-teal-500",
      href: "/monofocus",
      buttonstyle: "bg-teal-500 hover:bg-teal-400",
      buttontitle: "#mono_focus"
    },
     {
      id: 5,
      src: GTD,
      title: " GTD Dashboard",
      intro:"Capture, organize and prioritize your to-dos.",
      style: "shadow-orange-500",
      href: "https://easlo.gumroad.com/l/gtd?a=700326739",
      buttonstyle: "bg-orange-500 hover:bg-orange-400",
      buttontitle: "#gtd_method"
    },
     {
      id: 6,
      src: EasloSecondBrain,
      title: "Mono Second Brain",
      intro:" Capture and organize your knowledge, projects, tasks, goals.",
      style: "shadow-blue-500",
      href: "https://easlo.gumroad.com/l/brain?a=700326739",
      buttonstyle: "bg-blue-500 hover:bg-blue-400",
      buttontitle: "#second-brain"
    },
     {
      id: 7,
      src: BigFreelancerOS,
      title: " Big Freelancer OS ",
      style: "shadow-gray-700",
      intro:"  All-in-one toolkit to manage  projects, clients or finances.",
      href: "https://easlo.gumroad.com/l/freelanceos?a=700326739",
      buttonstyle: "bg-gray-700 hover:bg-ray-600",
      buttontitle: "#freelance"
    },
     {
      id: 8,
      src: ResolutionBoard,
      title: " Resolution Board", 
      intro:"  Eeady-to-use templates that will help you achieve anything.",
      style: "shadow-yellow-500",
      href: "https://easlo.gumroad.com/l/YkJkr?a=700326739",
      buttonstyle: "bg-yellow-600 hover:bg-yellow-500",
      buttontitle: "#consistency"
    },
     {
      id: 9,
      src: CreatorPlaybook,
      title: "Creator Playbook",
      intro:"  Learn to create and sell Notion templates in one week..",
      style: "shadow-pink-500",
      href: "https://easlo.gumroad.com/l/BplZF?a=700326739",
      buttonstyle: "bg-pink-600 hover:bg-pink-500",
      buttontitle: "#creator"
    },
     {
      id: 9,
      src: HealthHubOS ,
      title: "Health Hub OS",
      intro:" Easily manage your health by tracking your calories and more - all in one operating system. ",
      style: "shadow-orange-800",
      href: "https://gumroad.com/a/281620691/NLTuC",
      buttonstyle: "bg-orange-800 hover:bg-orange-700",
      buttontitle: "#health"
    },
     {
      id: 9,
      src: ProductLaunchDashboard,
      title: "Product Launch Dashboard",
      intro:" Reach the top positions on Producthunt. ",
      style: "shadow-orange-800",
      href: "https://gumroad.com/a/281620691/zloaa",
      buttonstyle: "bg-orange-800 hover:bg-orange-700",
      buttontitle: "#launch"
    },
     {
      id: 9,
      src: StoicLifeOS,
      title: "Stoic Life OS",
      intro:"Manage your entire life as a Stoic to make it easier with a complete system. ",
      style: "shadow-yellow-600",
      href: "https://gumroad.com/a/281620691/xbkhy",
      buttonstyle: "bg-yellow-600 hover:bg-yellow-500",
      buttontitle: "#stoic"
    },
     
  ];

  function transferPage() {
    Router.push("/")
    
  }

  return (
     <div
    
      
      className="bg-gray-900 min-h-screen  "
    >
      <Head>
      <title>Templates</title>
      <meta name="description" content="Notion Templates for coder freelancer "></meta>
      <meta name="author" content="Finn Guha"></meta>
  <meta name="viewport" content="width=device-width, initial-scale=1.0,maximum-scale=1.0, user-scalable=no"></meta>
  <meta name="theme-color" content="none"></meta>
  <meta name="mobile-web-app-capable" content="yes"></meta>
  <meta name="keywords" content="


notion templates aesthetic,
notion templates free,
notion templates english,
notion templates for programmers,
notion templates aesthetic download free,
notion templates reddit,
best free notion templates


   "></meta>
  

      <meta
          property="og:image"
          content="../public/favicon.ico"
        />
    </Head>  
    <NavBar />
      <div className="max-w-screen-lg mx-auto pt-12  text-center  p-4 flex flex-col justify-center w-full h-full text-white">
        <div className="mx-auto">
          <h1 className="text-4xl  lg:text-5xl  font-extrabold text-white   p-2 inline ">
            Templates
          </h1>
          <p className="py-8 text-center  mx-6 sm:mx-[200px] lg:mx-[200px] xl:mx-[250px] 2xl:mx-[300px] font-extrabold text-xl">The systems that make you an efficient developer. </p>
        </div>

        <div className="w-full grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-16 text-center py-8 px-4 sm:px-0 cursor-pointer">
          {techs.map(({ id, src, title,intro, style, href , buttontitle, buttonstyle }) => (
            <Link
              key={id}
              className={`shadow-xl hover:shadow-md hover:scale-110  duration-500 py-2 rounded-xl ${style}`}
              href={href}
            >
              <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700
       ">
            <Image className="rounded-t-lg mx-auto" src={src} alt="" />
    <div className="p-5">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{title}</h5>
        <p className="mb-3 font-light text-gray-700 dark:text-gray-400">{intro}</p>
        <button id="badge-dismiss-default" className={`inline-flex  items-center px-4 py-1  text-lg font-bold 
         text-black rounded ${buttonstyle}`}>
          {buttontitle}
        </button>
    </div>  
</div>
              
            </Link>
          ))}
        </div>
         <h1 className="py-8 text-center text-gray-500 mr-8 mt-16  font-extrabold text-lg">Many of these products are  Affiliate Products. The creator of CodingNotes 
        earns a small percentage of the money you payed once you buy such a template. You will still pay the same and are completely unaffected by this. For general information, check out 
        the <Link href="/terms" className="underline">Terms and Conditions</Link>.</h1>
      </div>
      <Footer />
    </div> 
     
  );
};

export default Templates