import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

import Header from '../components/home/Header'
import Navbar from '../components/home/NavBar'
import Best from '../components/home/Best'
import Tabs from '../components/home/Tabs'
import Explore from '../components/home/Explore'
import Explain from '../components/home/Explain'
import Reasons from '../components/home/Reasons'
import Footer from '../components/home/Footer'


export default function Home() {
  return (
    <div>
       <Head>
      <title>CodingNotes</title>
      <meta name="description" content="." />
    </Head>
      <Navbar />
      <Header />
      <Best />
      <Tabs />
      <Explain />
      <Explore />
      <Reasons />
      <Footer />
    </div>
  
  )
}
