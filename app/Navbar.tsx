"use client"
import Link from "next/link";
import React, { useState } from "react";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";

const Navbar = () => {
	const [nav, setNav] = useState(false);

	const handleNav = () => {
		setNav(!nav);
	};

	return (
		<div className="fixed w-full h-20 z-[100]">
			<div className="flex justify-end md:justify-center items-center w-auto h-full px-2 2xl:px-16 bg-transparent">
				<div>
					<ul className="hidden shadow-lg shadow-black/20 rounded-xl md:flex p-3 navbar">
						<Link href="./">
							<li className="text-md hover:underline p-2 font-heading">
								Home
							</li>
						</Link>
						<Link href="./#about">
							<li className="ml-10 text-md hover:underline p-2 font-heading">
								About
							</li>
						</Link>
						<Link href="./#projects">
							<li className="ml-10 text-md hover:underline p-2 font-heading">
								Projects
							</li>
						</Link>
						<Link href="#footer">
							<li className="ml-10 text-md hover:underline p-2 font-heading">
								Contact
							</li>
						</Link>
					</ul>
					<div
						onClick={handleNav}
						className="md:hidden justify-end mr-4 bg-pink p-3 rounded-full cursor-pointer"
					>
						<AiOutlineMenu size={30} />
					</div>
				</div>
			</div>

			<div
				className={
					nav
						? "md:hidden fixed left-0 top-0 w-full h-screen opacity:100 transition-opacity ease-in duration-500 bg-gradient-to-br from-pink via-purple to-blue"
						: "hidden"
				}
			>
				<div
					onClick={handleNav}
					className="flex width-full justify-end h-20 items-center mr-6 p-3 cursor-pointer"
				>
					<AiOutlineClose size={30} />
				</div>
				<div className="h-full w-full">
					<ul className="flex flex-col items-center justify-center pt-10">
						<Link href="./#home">
							<li onClick={handleNav} className="py-4 text-4xl">
								Home
							</li>
						</Link>
						<Link href="./#about">
							<li onClick={handleNav} className="py-4 text-4xl">
								About
							</li>
						</Link>
						<Link href="./#projects">
							<li onClick={handleNav} className="py-4 text-4xl">
								Projects
							</li>
						</Link>
						<Link href="#footer">
							<li onClick={handleNav} className="py-4 text-4xl">
								Contact
							</li>
						</Link>
					</ul>
				</div>
			</div>
		</div>
	);
};

export default Navbar;
