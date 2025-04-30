import React from "react";
import { Link } from "react-router-dom";
import {
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaInstagram,
} from "react-icons/fa";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className='bg-headerColor py-6 z-50 relative'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 xl:px-10 flex flex-col lg:flex-row justify-between items-center gap-6'>
        {/* Navigation Links */}
        <ul className='flex flex-wrap gap-4 text-white justify-center lg:justify-start'>
          <li>
            <Link to='/about' className='hover:underline'>
              About Us
            </Link>
          </li>
          <li>
            <Link to='/' className='hover:underline'>
              Services
            </Link>
          </li>
          <li>
            <Link to='/contact' className='hover:underline'>
              Contact
            </Link>
          </li>
          <li>
            <Link to='/' className='hover:underline'>
              Privacy Policy
            </Link>
          </li>
        </ul>

        {/* Copyright */}
        <p className='text-white text-sm text-center'>
          &copy; {currentYear} SecureNote | All rights reserved.
        </p>

        {/* Social Media Icons */}
        <div className='flex gap-4 justify-center lg:justify-end'>
          <a
            href='https://facebook.com'
            target='_blank'
            rel='noreferrer'
            className='text-white border border-white rounded-full h-10 w-10 flex items-center justify-center hover:bg-blue-600 transition-colors duration-300'
          >
            <FaFacebookF />
          </a>
          <a
            href='https://linkedin.com'
            target='_blank'
            rel='noreferrer'
            className='text-white border border-white rounded-full h-10 w-10 flex items-center justify-center hover:bg-blue-600 transition-colors duration-300'
          >
            <FaLinkedinIn />
          </a>
          <a
            href='https://twitter.com'
            target='_blank'
            rel='noreferrer'
            className='text-white border border-white rounded-full h-10 w-10 flex items-center justify-center hover:bg-blue-600 transition-colors duration-300'
          >
            <FaTwitter />
          </a>
          <a
            href='https://instagram.com'
            target='_blank'
            rel='noreferrer'
            className='text-white border border-white rounded-full h-10 w-10 flex items-center justify-center hover:bg-blue-600 transition-colors duration-300'
          >
            <FaInstagram />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
