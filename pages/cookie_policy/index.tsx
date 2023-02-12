import React from 'react'
import Head from "next/head"
import Link from "next/link"

import NavBar from '../../components/home/NavBar'
import Footer from "../../components/home/Footer"

const Terms = () => {
 return (
    <div className="bg-gray-900 min-h-screen  ">

         <Head>
      <title>Cookie Policy</title>
      <meta name="description" content="Cookie Policy for CodingNotes"></meta>
      <meta name="author" content="Finn Guha"></meta>
  <meta name="viewport" content="width=device-width, initial-scale=1.0,maximum-scale=1.0, user-scalable=no"></meta>
  <meta name="theme-color" content="none"></meta>
  <meta name="mobile-web-app-capable" content="yes"></meta>
  <meta name="keywords" content="

cookie policy deutsch,
cookie policy generator,
eu cookie policy,
cookie clicker,
cookie-banner,
cookies zulassen,
cookie-einstellungen,
cookie template
   "></meta>
  

      <meta
          property="og:image"
          content="../public/favicon.ico"
        />
    </Head>  
    <NavBar />

      <div className=" max-w-screen-lg mx-auto pt-12  text-center  p-4 flex flex-col justify-center w-full h-full text-white">
<h1 className="text-3xl font-extrabold mt-16  bg-green-500   ">Cookie Policy </h1>


<p>We and Gumroad use cookies and similar technologies. This Cookie Policy explains how we use cookies in connection with the Platform and your related choices.
Capitalized terms used in this Cookie Policy but not defined here will have the meanings given to them in our <Link className='text-gray-500' href="/privacy">Privacy Policy</Link>.
The Privacy Policy of Gumroad , a company which is used for payments, explains how they deal with Cookies in there <Link className='text-gray-500' href="https://gumroad.com/privacy">Privacy Policy</Link>.
You may also contact at <Link  className="text-gray-500" href="mailto:figuzwei127@gmail.com">figuzwei127@gmail.com</Link>   with any additional questions. </p> 


<h1 className="text-3xl font-extrabold mt-24"> What are Cookies, Pixels and Local Storage? </h1>
<p>Cookies are small files that websites place on your computer as you browse the web. Like many commercial websites, we use cookies. Cookies — and similar technologies — do lots of different jobs, like letting you navigate between pages efficiently, remembering your preferences, and generally improving the user experience. Cookies and other technologies may also be used to measure the effectiveness of marketing and otherwise assist us in making your use of the Platform and its features more relevant and useful to you.
Pixel tags (also known as web beacons or pixels) are small blocks of code on a web page or in an email notification. Pixels allow companies to collect information such as an individua`s IP address, when the individual viewed the pixel and the type of browser used. We use pixel tags to understand whether you have interacted with content on our Platform, which helps CodingNotes measure and improve our Platform and personalize your experience.
Local storage allows a website to store information locally on your computer or mobile device. Local storage is mainly used to store and retrieve data in HTML pages from the same domain. We use local storage to customize what we show you based on your past interactions with our Platform.
It is important to understand that cookies (and the technologies listed above) collect personal information as well as non-identifiable information. </p>


<h1  className="text-3xl font-extrabold mt-24"> How and Why do We Use Cookies? </h1>
<p>We use  3rd party cookies (which are set by a server located outside the domain of our Site).
We solely use Performance and Analytics Cookies.  These cookies allow CodingNotes to count visits and traffic sources so we can measure and improve the performance of our Site. They help CodingNotes to know which pages are the most and least popular and see how visitors navigate the Site. Performance cookies are used to help CodingNotes with the analytics, including to compile statistics and analytics about your use of and interaction with the Site, including details about how and where our Site are accessed, how often you visit or use the Site, the date and time of your visits, your actions on the Site, and other similar traffic, usage, and trend data.
</p>


<h1 className="text-3xl font-extrabold mt-24">Your Choices </h1>
<p>You can learn more about cookies by visiting <Link className='text-gray-500' href="https://www.allaboutcookies.org/">https://www.allaboutcookies.org/</Link> , which includes additional useful information on cookies and how to block cookies using different types of browsers.
If you`d like to remove or disable cookies via your browser, please refer to your browser`s configuration documentation. Please note, however, that by blocking or deleting all cookies used on the Site, you may not be able to take full advantage of the Site and their may be further issues.
For analytics, we may  use Google Analytics. To opt out from Google Analytics, you can download a plug-in by visiting <Link className='text-gray-500' href="https://tools.google.com/dlpage/gaoptout">https://tools.google.com/dlpage/gaoptout </Link>. </p>

<h1  className="text-3xl font-extrabold mt-24"> Changes to this Cookie Policy </h1>
We may update this Cookie Policy from time to time, at our sole discretion. If so, we will post an updated Cookie Policy within the Platform. Changes, modifications, additions, or deletions will be effective immediately on their posting to the Platform. We encourage you to review this Cookie Policy regularly for any changes. Your continued use of the Platform and/or your continued provision of personal information to CodingNotes after the posting of the updated Cookie Policy will be subject to the terms of the then-current Privacy Policy and Cookie Policy. If you continue to use the Platform you will be deemed to have accepted the change.
Contact Information: 
If you have any questions or concerns about this Cookie Policy, please email at <Link className='text-gray-500' href="mailto:figuzwei127@gmail.com">figuzwei127@gmail.com </Link>.



<Footer />





</div>


        
        
    
      </div>
      
 
  
  );

}

export default Terms