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
     const [darkTheme, setDarkTheme] = useDarkMode();
    const handleMode = () => setDarkTheme(!darkTheme);



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
            link: "Our Why",
            href: "/why"
        },

        {
            id:4,
            link: "Reach out",
            href: "/reachout"
        },

        {
            id:5,
            link: (
            <>
             {darkTheme ? (
                    <FaSun size='40' className='top-navigation-icon' />
                    ) : (
                    <FaMoon size='40' className='top-navigation-icon' />
                    )}
            </>
            ),
            href: (
            <>
             onClick={handleMode}
                
            </>
            ),
        }

    ]

    return (
        <div className="flex justify-between items-center 
             px-4 w-full h-20 text-black bg-white fixed ">
            <div>
                <Link href="/">
                <h1 className="text-2xl font-signature font-bold
                            ml-4 md:ml-16">CodingNotes</h1>
                </Link>
            </div>

            {/* desktop */}

            <ul className="hidden md:flex">
                
             {links.map(({ id, link, href }) => (
           <Link
            key={id}
            href={href}
            className="px-4  cursor-pointer capitalize 
             text-black hover:scale-105 mr-8
            duration-200 font-bold" 
            onClick={handleMode}
            >

                
              {link}

              
            
            
          </Link> 
            ))}

            </ul>

            {/* logic */}
            <div onClick={() => setNav(!nav)} 
            className="cursor-pointer pr-4 z-10
             text-black md:hidden">
                {nav ? <FaTimes size={30} color="white" /> :<FaBars size={30} /> }
            </div>


            {/* mobile */}
            {nav && (
                <ul className="flex flex-col justify-center
                                items-center 
                                absolute top-0 left-0 w-full h-screen bg-black text-white">

                    {links.map(({ id, link, href }) => (
                    <Link
                        key={id}
                        href={href}
                        className="px-4 cursor-pointer capitalize
                                py-6 text-4xl font-bold" >
                        {link}
                        
                        
                    </Link> 
                        ))}
                    

                </ul> 
            ) }



        </div>
    )

}

export default NavBar