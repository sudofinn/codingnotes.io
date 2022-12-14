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
/* dark mode is clearly not working , icon moves but not good, idk */
/* is working nowhere ( also not on reach out page where I just copied from atinyimprovement,
    must be general problem )) */


const NavBar : React.FC = () => {
     



   const [nav, setNav] = useState(false)

    const links = [ 
        {
            id:1,
            link: "Products",
            href: "/products"
        },

        {
            id:2,
            link: "Templates",
            href:"/templates"
        },

        {
            id:3,
            link: "Why",
            href: "/why"
        },

        {
            id:4,
            link: "Reach out",
            href: "/reachout"
        },

        

    ]

    return (
        <div className="flex justify-between items-center 
             px-4 w-full h-20 text-black bg-white fixed ">
            <div>
                <Link href="/">
                <h1 className="text-2xl font-signature hidden md:block font-extrabold
                            ml-32">CodingNotes</h1>
                </Link>
            </div>

            {/* desktop */}

            <ul className="hidden lg:flex">
                
             {links.map(({ id, link, href }) => (
           <Link
            key={id}
            href={href}
            className="px-4  cursor-pointer capitalize transition duration-200  hover:border-b-4 border-black
             text-black hover:scale-105 mr-8
             font-bold" 
            >

                
              {link}

              
            
            
          </Link> 
            ))}

            </ul>

            {/* logic */}
            <div onClick={() => setNav(!nav)} 
            className="cursor-pointer pr-4 z-10
             text-black lg:hidden">
                {nav ? <FaTimes size={30} color="white" /> :<FaBars size={30} /> }
            </div>


            {/* mobile */}
            {nav && (
                <ul className="flex flex-col justify-center
                                items-center 
                                absolute top-0 left-0 w-full h-screen   bg-black  ">

                    {links.map(({ id, link, href }) => (
                    <Link
                        key={id}
                        href={href}
                        className="px-4 cursor-pointer capitalize text-indigo-200 hover:text-teal-400
                                py-6 text-4xl font-extrabold transition duration-500 hover:scale-110  hover:border-b-4" >
                        {link}
                        
                        
                    </Link> 
                        ))}
                    

                </ul> 
            ) }



        </div>
    )

}

export default NavBar