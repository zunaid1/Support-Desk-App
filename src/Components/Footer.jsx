import React from 'react';
import { FaLinkedin } from "react-icons/fa6";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";


const Footer = () => {
	return (
		<div className='bg-black text-white'>
			<footer className="footer sm:footer-horizontal text-base-content p-10 w-11/12 mx-auto text-white">
				<aside>

					<p>
						<a className='text-2xl font-bold' href="#">Support Desk</a> <br />
						<span className='text-xl'>A simple and efficient customer ticket management system for tracking and resolving support requests.</span>
					</p>
				</aside>
				<nav>
					<h6 className="footer-title">Company</h6>
					<a className="link link-hover">About Us</a>
					<a className="link link-hover">Our Mission</a>
					<a className="link link-hover">Contact Saled</a>

				</nav>
				<nav>
					<h6 className="footer-title">Services</h6>
					<a className="link link-hover">Products & Services</a>
					<a className="link link-hover">Customer Stories</a>
					<a className="link link-hover">Download Apps</a>

				</nav>
				<nav>
					<h6 className="footer-title">Information</h6>
					<a className="link link-hover">Privacy Policy</a>
					<a className="link link-hover">Terms & Conditions</a>
					<a className="link link-hover">Join Us</a>

				</nav>
				<nav>
					<h6 className="footer-title">Social Links</h6>
					<div className='flex items-center justify-center gap-2'>
						<FaLinkedin />
						<a className="link link-hover">
							@Support Desk</a>
					</div>

					<div className='flex items-center justify-center gap-2'>
						<FaFacebook />
						<a className="link link-hover">
							@Support Desk</a>
					</div>

					<div className='flex items-center justify-center gap-2'>
						<FaInstagram />
						<a className="link link-hover">
							@Support Desk</a>
					</div>
					<div className='flex items-center justify-center gap-2'>
						<FaXTwitter />
						<a className="link link-hover">
							@Support Desk</a>
					</div>


				</nav>
			</footer>

		</div>
	);
};

export default Footer;