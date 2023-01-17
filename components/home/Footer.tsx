import React from 'react'
import Link from "next/link"
import Router from "next/router"

import { FaTwitter } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaTiktok } from 'react-icons/fa';
import { FaInstagram } from 'react-icons/fa';
import {AiFillHome} from "react-icons/ai"

const Footer = () => {
	
  return (
		<>
			<div className="  mt-32 h-1/2 w-full flex md:flex-row flex-col justify-around items-start p-20">
				<div className="p-5  ">
					<ul>
						<Link href="/">
						<p className="text-gray-500 hover:text-yellow-600 duration-500 font-extrabold text-4xl pb-6">
							Coding<span className="text-blue-600 hover:text-teal-500 duration-500">Notes</span>
						</p>
						</Link>
						<div className="flex gap-6 pb-5 hover:shadow-xl shadow-black duration-500">

							<Link href="https://twitter.com/coding_notes" target="_blank">
								<FaTwitter className="text-2xl cursor-pointer hover:text-blue-600 duration-300" />
							</Link>
							

							<Link href="https://www.youtube.com/@officialcodingnotes" target="_blank">
								<FaYoutube className="text-2xl cursor-pointer hover:text-red-600 duration-300" />
							</Link>

							<Link href="https://www.tiktok.com/@coding_notes" target="_blank">
								<FaTiktok className="text-2xl cursor-pointer hover:text-teal-600 duration-300" />
							</Link>


							<Link href="/" >
								<AiFillHome className="text-2xl cursor-pointer hover:text-gray-900 duration-300" />
							</Link>



							

							

						</div>
					</ul>
				</div>
				<div className="p-5 ">
					<ul>
						<p className="text-gray-500 font-extrabold text-3xl pb-4">Products </p>
						<li  onClick={() => Router.push("/products")} className="text-gray-500 font-extrabold text-md pb-2  hover:text-orange-600 cursor-pointer">
							Notes, Flashcards
						</li>
						
						<li onClick={() => Router.push("/templates")} className="text-gray-500 text-md pb-2 font-extrabold  hover:text-orange-600 cursor-pointer">
							Templates
						</li>
						<li onClick={() => Router.push("/other")} className="text-gray-500 text-md pb-2 font-extrabold  hover:text-orange-600 cursor-pointer">
							Other
							
						</li>
					</ul>
				</div>
				<div className="p-5">
					<ul>
						<p className="text-gray-500 font-extrabold  text-3xl pb-4">Company</p>
						<li onClick={() => Router.push("/tags")} className="text-gray-500 text-md pb-2 font-extrabold  hover:text-purple-600 cursor-pointer">
							Tags
						</li>
						<li onClick={() => Router.push("/thirdparty")} className="text-gray-500 text-md pb-2 font-extrabold  hover:text-purple-600 cursor-pointer">
							Third Party & Download
						</li>
						
						
						<li onClick={() => Router.push("/sources")} className="text-gray-500 text-md pb-2 font-extrabold  hover:text-purple-600 cursor-pointer">
							All Sources
						</li>
					</ul>
				</div>
				<div className="p-5">
					<ul>
						<p className="text-gray-500  text-3xl font-extrabold  pb-4">Legal</p>
						<li onClick={() => Router.push("/terms")} className="text-gray-500 text-md pb-2 font-extrabold  hover:text-indigo-600 cursor-pointer">
							Terms and Conditions
						</li>
						
						<li onClick={() => Router.push("/privacy")} className="text-gray-500 text-md pb-2 font-extrabold  hover:text-indigo-600 cursor-pointer">
							Privacy Policy
						</li>
						<li onClick={() => Router.push("/cookie_policy")} className="text-gray-500 text-md pb-2 font-extrabold  hover:text-indigo-600 cursor-pointer">
							Cookie Policy
						</li>
						<li onClick={() => Router.push("/impressum")} className="text-gray-500 text-md pb-2 font-extrabold  hover:text-indigo-600 cursor-pointer">
							Impressum
						</li>
						
					</ul>
				</div>
			</div>
			<div className="flex flex-col justify-center items-center text-center  p-5 ">
				<h1 className=" text-gray-500 font-extrabold ">
					© 2022 | All rights reserved | {" "}
					<Link href="/" className="hover:text-blue-600 font-extrabold  cursor-pointer">
						CodingNotes{" "}
					</Link>
				</h1>
			</div>
		</>
	);
}

export default Footer