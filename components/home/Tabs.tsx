import { useState } from 'react'
import { Tab } from '@headlessui/react'


import Router from "next/router"
import Image from "next/image"
import Link from "next/link"



function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}


export default function Tabs() {
  let [categories] = useState({
    HTMLCSS: [
      {
        id: 1,
        title: 'The fundamentals of the Web !',
        date: 'Learn More',
        commentCount: "/htmlcss",
        shareCount: "HTML is the language every web developer uses. Learn the foundation of web development with the right technique.",
        shareCountStyle: " bg-gradient-to-r hover:from-blue-600  hover:to-red-800 from-red-800 to-blue-400",
        pageAmount: 70,
        flashcardAmount: 500,
        visualsAmount: 40,
        praticequestionAmount: 25,
        color:"black",
        buttonstyle: "hover:bg-gradient-to-r from-blue-600  to-red-800 hover:from-red-800 hover:to-blue-400"
        
      },
    
    ],
    JavaScript: [
      {
        id: 1,
        title: 'The language that powers the web !',
        date: 'Lets script ',
        commentCount: "/javascript",
        shareCount: "JavaScript gives the web functionality. When you want to become a Frontend Developer , JavaScript is a must. Learn it right , don´t waste time !",
        shareCountStyle: " bg-yellow-600",
        pageAmount: 60,
        flashcardAmount: 350,
        visualsAmount: 20,
        praticequestionAmount: 30,
        color:"black",
        buttonstyle: "hover:bg-yellow-600 "
      },
     
    ],
    React: [
      {
        id: 1,
        title: 'The best JavaScript Framework !',
        date: 'Be reactive',
        commentCount:"/reactjs",
        shareCount: "React is the most popular JavaScript library. Millions of developer use it to make their lives easier. Be one of them and learn this awesome technology !",
        shareCountStyle: " bg-blue-400",
        pageAmount: 40,
        flashcardAmount: 225,
        visualsAmount: 30,
        praticequestionAmount: 15,
        color:"black",
        buttonstyle: "hover:bg-blue-400 "

        
      },
      
    ],
  })

  function handleTransfer() {
    Router.push("/products")
  }

  return (
    <div className="max-w-5xl mt-32 lg:mt-64 px-4 text-black  py-16 mx-auto  " >
      <Tab.Group>
        <Tab.List className="flex space-x-1 rounded-xl  py-3 bg-blue-900/20 p-1">
          {Object.keys(categories).map((category) => (
            <Tab
              key={category}
              
              className={({ selected }) =>
                classNames(
                  'w-full rounded-lg  text-lg py-7 hover:shadow-xl duration-500 font-extrabold shadow-black  leading-5 text-orange-700 ',
                  'ring-white ring-opacity-60 ring-offset-4 ring-offset-teal-800 focus:outline-none focus:ring-4',
                  selected
                    ? 'bg-white shadow'
                    : 'text-teal-400 hover:bg-white/[0.12] hover:text-black '
                    
                )
                
              }
            >
              {category}
            </Tab>
          ))}
        </Tab.List>
        <Tab.Panels className="mt-2">
          {Object.values(categories).map((posts, idx) => (
            <Tab.Panel
              key={idx}
              className={classNames(
                'rounded-xl bg-white p-3',
                'ring-white ring-opacity-60 ring-offset-2 ring-offset-teal-900 focus:outline-none focus:ring-2'
              )}
            >
              <ul>
                {posts.map((post) => (
                  <li
                    key={post.id}
                    onClick={(() => Router.push(`${post.commentCount}`))}
                    className="relative rounded-md  hover:bg-gray-100"
                  >
                    <Link href={post.commentCount}></Link>
                    <h1 className=" text-4xl lg:text-5xl xl:text-6xl mt-4 mb-4 font-extrabold ">
                      {post.title}
                    </h1>
                    <h3 className={`text-2xl lg:text-3xl mt-4 mb-8  items-center px-6 py-2  duration-300 transition text-black rounded ${post.shareCountStyle}`}>{post.shareCount} </h3>
                    <ul className="text-xl lg:text-2xl list-disc ml-8 mb-8">
                      <li> {post.pageAmount} + pages</li>
                      <li> {post.flashcardAmount} + flashcards</li>
                      <li> {post.visualsAmount} + visuals</li>
                      <li> {post.praticequestionAmount} + pratical practice questions</li>
                      
                    </ul>

                    
                      <button className={`px-4  cursor-pointer   text-black py-4
                                 text-2xl font-extrabold transition duration-500 hover:scale-110  
                                items-center     rounded-xl
                                 select-none  border-black  border-4 bg-transparent ${post.buttonstyle}`}  >{post.date}</button>

                    
                     
                      
                      {/*}
                      <li>{post.commentCount} comments</li>
                      <li>&middot;</li>
                      <li>{post.shareCount} shares</li>
                    
                */}
                

                   
                  </li>
                ))}
              </ul>
            </Tab.Panel>
          ))}
        </Tab.Panels>
      </Tab.Group>
    </div>
  )
}