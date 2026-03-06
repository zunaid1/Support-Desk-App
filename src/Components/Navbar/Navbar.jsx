import React from 'react';
import { BsThreeDots } from "react-icons/bs";
import { IoMdAdd } from "react-icons/io";


const Navbar = () => {
	const NavItems = <>
		<a className='btn btn-outline btn-primary' href='#'>Home</a>
		<a className='btn btn-outline btn-primary' href='#'>FAQ</a>
		<a className='btn btn-outline btn-primary' href='#'>Changelog</a>
		<a className='btn btn-outline btn-primary' href='#'>Blog</a>
		<a className='btn btn-outline btn-primary' href='#'>Download</a>
		<a className='btn btn-outline btn-primary' href='#'>Contact</a>

	</>
	return (
		<div className="navbar bg-base-100 shadow-sm">
			<div className="navbar-start">
				<div className="dropdown">
					<div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
						<svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h7" /> </svg>
					</div>
					<div
						tabIndex="-1"
						className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 w-52 p-2 shadow flex justify-start gap-2">
						{
							NavItems
						}
						<a className='btn btn-primary' href='#'><IoMdAdd />	New Ticket</a>
					</div>
				</div>
				<a className="btn btn-ghost text-xl">Support Desk</a>
			</div>

			<div className="navbar-end">
				<div className='md:flex gap-2 hidden md:block justify-center items-center'>
					{
						NavItems
					}

				</div>
				<a className='btn btn-primary' href='#'><IoMdAdd /> New Ticket</a>
			</div>
		</div>
	);
};

export default Navbar;