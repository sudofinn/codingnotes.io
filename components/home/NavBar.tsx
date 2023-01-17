import React, {useState} from "react"
import {FaBars, FaTimes} from "react-icons/fa"
import Link from "next/link"

//import {Link} from "react-scroll" 
//( gives duplicate , might have to replace all next/link with react scroll link) ( programming with yash 1:49 h)

import useDarkMode from '../hooks/useDarkMode'


import {
  FaMoon,
  FaSun,
} from 'react-icons/fa';




/* make animation from yash patel tailwind tutorial */


const NavBar : React.FC = () => {
     



   const [nav, setNav] = useState(false)

    const links = [ 
        {
            id:1,
            link: "#products",
            href: "/products",
            style: "hover:text-black hover:bg-green-400 select-none rounded-xl text-green-400 border  border-green-400 border-4 bg-transparent   ",
        },

        {
            id:2,
            link: "#templates",
            href:"/templates",
            style:"hover:text-blue-600 "
        },

        {
            id:3,
            link: "#other",
            href: "/other",
            style:"hover:text-purple-600 "
        },

        {
            id:4,
            link: "#reach_out",
            href: "/reachout",
            style:"hover:text-black border-4 border-gray-900 border-double hover:bg-orange-500   "
        },

        

    ]

    return (
        <div className="flex justify-between items-center 
             px-4 w-full h-20 text-white relative ">
            <div>
                <Link href="/">
                <h1 className="text-2xl font-signature hidden md:block font-extrabold bg-gradient-to-r from-yellow-500 to-red-600
                hover:shadow-xl shadow-white hover:text-black hover:bg-gradient-to-r hover:from-red-600 hover:to-yellow-500 duration-500 ml-32">CodingNotes</h1>
                </Link>
            </div>

            {/* desktop */}

            <ul className="hidden lg:flex">
                
             {links.map(({ id, link, href , style }) => (
           <Link
            key={id}
            href={href}
            className={`px-4  cursor-pointer  transition duration-200  hover:border-b-4 
             text-white hover:scale-105 mr-8 
             font-bold  ${style}`}
            >

                
              {link}

              
            
            
          </Link> 
            ))}

            </ul>

            {/* logic */}
            <div onClick={() => setNav(!nav)} 
            className="cursor-pointer pr-4 z-10
             text-white lg:hidden">
                {nav ? <FaTimes size={30} color="white" /> :<FaBars size={30} /> }
            </div>


            {/* mobile */}
            {nav && (
                <ul className="flex flex-col justify-center 
                                items-center 
                                absolute   top-0 left-0 w-full h-screen   bg-gray-900  ">

                    {links.map(({ id, link, href, style}) => (
                    <Link
                        key={id}
                        href={href}
                        className={`px-4  cursor-pointer   text-white py-4
                                my-6 text-2xl font-extrabold transition duration-500 hover:scale-110  
                                items-center  mr-3    rounded-xl ${style}`} >
                        {link}
                        
                        
                    </Link> 
                        ))}
                    

                </ul> 
            ) }



        </div>
    )

}

export default NavBar