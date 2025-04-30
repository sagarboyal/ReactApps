import React from "react";
import { Link } from "react-router-dom";
import {
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaInstagram,
} from "react-icons/fa";
//import aboutImage from "./path/to/your/image.jpg"; // Add your image path here

const AboutPage = () => {
  return (
    <div className='bg-gray-100 min-h-screen flex items-center justify-center p-4'>
      <div className='max-w-6xl w-full p-8 bg-white rounded-lg shadow-lg'>
        <h1 className='text-4xl font-semibold text-center text-gray-800 mb-6'>
          About Us
        </h1>
        <p className='text-lg text-gray-700 mb-6 leading-relaxed'>
          Welcome to SecureNote, your trusted companion for secure and private
          note-taking. We believe in providing a safe space where your thoughts
          and ideas are protected with the highest level of security. Our
          mission is to ensure that your notes are always accessible to you and
          only you. With state-of-the-art encryption and user-friendly features,
          SecureNote is designed to keep your information confidential and
          secure.
        </p>

        <ul className='list-disc list-inside text-gray-700 mb-6'>
          <li className='mb-2'>
            <span className='font-semibold'>
              Add an extra layer of security
            </span>{" "}
            with two-factor authentication.
          </li>
          <li className='mb-2'>
            <span className='font-semibold'>Your notes are encrypted</span> from
            the moment you create them.
          </li>
          <li className='mb-2'>
            <span className='font-semibold'>
              Access your notes from anywhere
            </span>{" "}
            with the assurance that they are stored safely.
          </li>
          <li className='mb-2'>
            <span className='font-semibold'>Our app is designed</span> to be
            intuitive and easy to use.
          </li>
        </ul>

        <div className='flex justify-center space-x-6 mt-8'>
          <Link
            className='text-white rounded-full p-3 bg-blue-600 hover:bg-blue-800 transition-colors duration-300'
            to='/'
          >
            <FaFacebookF size={24} />
          </Link>
          <Link
            className='text-white rounded-full p-3 bg-blue-500 hover:bg-blue-700 transition-colors duration-300'
            to='/'
          >
            <FaTwitter size={24} />
          </Link>
          <Link
            className='text-white rounded-full p-3 bg-blue-700 hover:bg-blue-900 transition-colors duration-300'
            to='/'
          >
            <FaLinkedinIn size={24} />
          </Link>
          <Link
            className='text-white rounded-full p-3 bg-pink-600 hover:bg-pink-800 transition-colors duration-300'
            to='/'
          >
            <FaInstagram size={24} />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
