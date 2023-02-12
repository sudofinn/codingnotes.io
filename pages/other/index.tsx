import React from "react";
import Link from "next/link";
import Router from "next/router";


import NavBar from "../../components/home/NavBar";
import Footer from "../../components/home/Footer";

import first from "../../assets/github.png"
import second from "../../assets/github.png"
import third from  "../../assets/github.png"

import monothumbnail from "../../assets/template_covers/focus_thumbnail.png"

import DraculaUI from "../../assets/template_covers/dracula_ui_mockuppng.png"
import DraculaPro from "../../assets/template_covers/dracula_pro_mockupwebp.webp"
import UntitledUI from "../../assets/template_covers/untitled_ui_mockup.jpg"

import Hypefury from "../../assets/template_covers/hypefury_mockup.jpg"
import Notion from "../../assets/template_covers/notion_mockup_adjusted_2.jpg"
import Anki from "../../assets/template_covers/anki_mockup.jpg"

import BlogTemplate from "../../assets/template_covers/blog_first_mockup.png"
import DashboardKit from "../../assets/template_covers/dashboard_kit_mockup.webp"
import MaterialDesignDashboard from "../../assets/template_covers/materialdesign_dashboard_mockup_2.jpg"






import Head from 'next/head'

/* price tag somwhere probably should be added */

/* not commit until easlo, pascio affiliate reqeust was not fulfilled */


import Image from "next/image"

const Templates = () => {
  const techs = [
    {
      id: 1,
      src: DraculaUI,
      title: "Dracula UI Library",
      intro: "A dark-first collection of UI patterns and components. Designer friendly, build for darkmode",
      style: "shadow-green-700",
      href: "https://draculatheme.gumroad.com/l/dracula-ui?a=700326739",
      buttonstyle: "bg-green-700 hover:bg-green-600",
      buttontitle: "#dracula"
    },
    {
      id: 2,
      src: DraculaPro,
      title: "Dracula Color Theme",
      intro: " Color scheme and UI theme tailored for programming. For terminal emulators, code editors, and syntax highlighter",
      style: "shadow-purple-700",
      href: "https://draculatheme.gumroad.com/l/dracula-pro?a=700326739",
      buttonstyle: "bg-purple-700 hover:bg-purple-600",
      buttontitle: "#dracula"
    },
     {
      id: 3,
      src: UntitledUI,
      title: "Figma UI kit and design system",
      intro: "  The largest Figma UI kit and design system in the world to kickstart any project",
      style: "shadow-blue-700",
      href: "https://untitledui.gumroad.com/l/untitled-ui?a=700326739",
      buttonstyle: "bg-blue-700 hover:bg-blue-600",
      buttontitle: "#figma"
    },

     {
      id: 4,
      src: Hypefury,
      title: "Twitter Automization",
      intro: " Easily grow & monetize your Twitter audience",
      style: "shadow-blue-400",
      href: "https://hypefury.com/?via=coding-notes83",
      buttonstyle: "bg-blue-400 hover:bg-blue-300",
      buttontitle: "#twitter"
    },
     {
      id: 5,
      src: Notion,
      title: "Notion App",
      intro: "Get the Notion app used for notes on CodingNotes",
      style: "shadow-white",
      href: "https://www.notion.so/pricing",
      buttonstyle: "bg-white hover:bg-gray-100",
      buttontitle: "#notion"
    },
     {
      id: 6,
      src: Anki,
      title: "Anki App",
      intro: "Get the Anki app used for flashcards on CodingNotes",
      style: "shadow-blue-500",
      href: "https://apps.ankiweb.net/",
      buttonstyle: "bg-blue-500 hover:bg-blue-400",
      buttontitle: "#anki"
    },
     {
      id: 7,
      src: BlogTemplate,
      title: "Personal Blog - Template",
      intro: " A minimal yet functional template that attracts readers and which helps you build your very own blog.",
      style: "shadow-gray-400",
      href: "/blogtemplate",
      buttonstyle: "bg-gray-400 hover:bg-gray-300",
      buttontitle: "#template"
    },
     {
      id: 8,
      src: DashboardKit,
      title: "Dashboard Kit - Template",
      intro: " A developer-centric dashboard template.Has everything for any simple or complex backend project",
      style: "shadow-purple-300",
      href: "https://dashboardkit.gumroad.com/l/dashboardkit?a=700326739",
      buttonstyle: "bg-purple-300 hover:bg-purple-200",
      buttontitle: "#dashboard"
    },
     {
      id: 9,
      src: MaterialDesignDashboard,
      title: "React Material Design Admin Template",
      intro: " Fully-featured React Material Design Admin Dashboard template",
      style: "shadow-orange-400",
      href: "https://uilib.gumroad.com/l/matx-react?a=700326739",
      buttonstyle: "bg-orange-400 hover:bg-orange-300",
      buttontitle: "#dashboard"
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
      <title>Other</title>
      <meta name="description" content="Templates, colorthemes, templates to learn coding"></meta>
      <meta name="author" content="Finn Guha"></meta>
  <meta name="viewport" content="width=device-width, initial-scale=1.0,maximum-scale=1.0, user-scalable=no"></meta>
  <meta name="theme-color" content="none"></meta>
  <meta name="mobile-web-app-capable" content="yes"></meta>
  <meta name="keywords" content="

website templates ,
website templates ,
website templates html,
website templates free tailwind
website templates now
website templates english
professional website templates,
website templates github


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
           Some other stuff 
          </h1>
          <p className="py-8 text-center  mx-6 sm:mx-[200px] lg:mx-[200px] xl:mx-[250px] 2xl:mx-[300px] font-extrabold text-xl">Some things that might also be awesome to have. </p>
        </div>

        <div className="w-full grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-16 text-center py-8 px-4 sm:px-0 cursor-pointer">
          {techs.map(({ id, src, title, intro, style, href , buttontitle, buttonstyle }) => (
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
        <p className="mb-3 font-light text-gray-700 dark:text-gray-400">{intro}.</p>
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

// other affiliates, should not choose them //
/*
const techs = [
    {
      id: 1,
      src: first,
      title: "Zero To Production In Rust Book",
      style: "shadow-orange-400",
      href: "https://algoluca.gumroad.com/l/zero2prod?a=700326739"
    },
    {
      id: 2,
      src: second,
      title: "Dracula Color Theme",
      style: "shadow-green-300",
      href: "https://draculatheme.gumroad.com/l/dracula-pro?a=700326739"
    },
     {
      id: 3,
      src: third,
      title: "Blog Template Code",
      style: "shadow-white",
      href: "https://atinyimprovement.vercel.app/"
    },

     {
      id: 4,
      src: third,
      title: "OpenAI Template Starter Kit for ChatGPT / GPT3 ",
      style: "shadow-white",
      href: "https://enhanceui.gumroad.com/l/chatgpt-starter-template?a=700326739"
    },
     {
      id: 5,
      src: third,
      title: " Swift Power Pack",
      style: "shadow-yellow-400",
      href: "https://twostraws.gumroad.com/l/swift-power-pack?a=700326739"
    },
     {
      id: 6,
      src: third,
      title: "Hacking with iOS",
      style: "shadow-blue-400",
      href: "https://twostraws.gumroad.com/l/hws-book-pack?a=700326739"
    },
     {
      id: 7,
      src: third,
      title: " ASP.NET Core Web API ",
      style: "shadow-white",
      href: "https://codemaze.gumroad.com/l/ultimateaspnetcorepremiumv2?a=700326739"
    },
     {
      id: 8,
      src: third,
      title: " Jetpack Compose",
      style: "shadow-green-600",
      href: "https://composeacademy.gumroad.com/l/practicalcompose?a=700326739"
    },
     {
      id: 9,
      src: third,
      title: "The DynamoDB Book",
      style: "shadow-red-300",
      href: "https://alexdebrie.gumroad.com/l/EZyTW?a=700326739"
    },
    */