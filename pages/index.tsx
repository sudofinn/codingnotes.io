import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

import Header from '../components/home/Header'
import Navbar from '../components/home/NavBar'
import Explain_home from '../components/home/Explain_home'
import Best from '../components/home/Best'
import Tabs from '../components/home/Tabs'
import Explore from '../components/home/Explore'
import Explain from '../components/home/Explain'
import NotionTemplates from '../components/home/NotionTemplates'
import OtherStuff from '../components/home/OtherStuff'
import Reasons from '../components/home/Reasons'
import SocialProof from '../components/home/SocialProof'
import CallToAction from '../components/home/CallToAction'
import Footer from '../components/home/Footer'


export default function Home() {
  return (
    <div className='bg-gray-900 text-white     '>
       <Head>
      <title>CodingNotes</title>
      <meta name="description" content="Detailed notes and flashcards for various programming languages."></meta>
      <meta name="author" content="Finn Guha"></meta>
  <meta name="viewport" content="width=device-width, initial-scale=1.0,maximum-scale=1.0, user-scalable=no"></meta>
  <meta name="theme-color" content="none"></meta>
  <meta name="mobile-web-app-capable" content="yes"></meta>
  <meta name="keywords" content="javascript, coding, web development,  learn to code, become a front end developer,learn  html, front end masters,front end developer,
  front end website development, learn reactjs, learn the frontend
   "></meta>
  

      <meta
          property="og:image"
          content="../public/favicon.ico"
        />
    </Head>
      <Navbar />  
      <Header />
      <Explain_home />
      <Tabs />
      <NotionTemplates />
      <OtherStuff />
      <SocialProof />
      <CallToAction />
      <Footer />
  
    </div>
  
  )
}
