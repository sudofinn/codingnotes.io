import React from 'react'
import Head from "next/head"
import Link from "next/link"

import NavBar from '../../components/home/NavBar'
import Footer from "../../components/home/Footer"

const Terms = () => {
 return (
    <div className="bg-gray-900 min-h-screen  ">

    <Head>
      <title>Terms</title>
      <meta name="description" content="Terms and Conditions for CodingNotes" />
    </Head>
    <NavBar />

      <div className=" max-w-screen-lg mx-auto pt-12  italic text-center  p-4 flex flex-col justify-center w-full h-full text-white">
<h1 className="text-3xl font-extrabold mt-16  bg-yellow-500   ">Impressum </h1>
<p>CodingNotes is a German startup. Therefore, an &apos;impressum&apos; ( imprint ) is necessary.</p>

<h3>WEBSEITENBETREIBER </h3>
<p>Finn Guha </p>

<h3>INFORMATIONEN ÜBER DAS UNTERNEHMEN </h3>
<p>Einzelunternehmer </p>

Scharnhorststraße 45

Dinslaken , 46535

<Link className="text-gray-500" href="mailto:figuzwei127@gmail.com">figuzwei127@gmail.com </Link>

+4915736470782

<h3>INFORMATIONEN ÜBER DIE UNTERNEHMENSREGISTRIERUNG </h3>
<p>Informationen zur Online-Streitbeilegung: Die EU-Kommission hat eine Internetplattform zur Online-Beilegung von Streitigkeiten (sog. „OS-Plattform“) geschaffen. Die OS-Plattform dient als Anlaufstelle zur außergerichtlichen Beilegung von Streitigkeiten betreffend vertragliche Verpflichtungen, die aus Online-Kaufverträgen erwachsen. Sie können die OS-Plattform unter dem folgenden Link erreichen:
     <Link className='text-gray-500 ' href="http://ec.euopa.eu/consumers/odr">http://ec.euopa.eu/consumers/odr </Link> „Hinweis gemäß § 36 Verbraucherstreitbeilegungsgesetz (VSBG). </p>





<Footer />





</div>


        
        
    
      </div>
      
 
  
  );

}

export default Terms