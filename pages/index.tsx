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
      <meta name="description" content="Detailed notes and flashcards for various programming languages." />
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
