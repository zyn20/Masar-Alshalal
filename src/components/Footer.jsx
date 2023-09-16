import React from 'react';
import { FaDiscord, FaTwitter, FaGithub, FaFacebook, FaLinkedin, FaInstagram } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import logo from "../assets/logo.png";

const Footer = () => {

  return (
    <footer className="bg-blue-900 py-10">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="md:flex md:justify-between">
          <div className="mb-6 md:mb-0">
            <Link to='/'>
              <img src={logo} className="h-20 mr-3" alt="Logo" />
            </Link>
          </div>
          <div className="flex text-white mt-4 space-x-5 sm:justify-center sm:mt-0">
            <a href="facebook.com" target='_blank' rel='noreferrer' className="hover:text-blue-500 duration-300">
              <FaFacebook className="w-8 h-8" />
              <span className="sr-only">Facebook page</span>
            </a>
            <a href="https://www.discord.com" target='_blank' rel='noreferrer' className="hover:text-purple-500 duration-300">
              <FaDiscord className="w-8 h-8" />
              <span className="sr-only">Discord community</span>
            </a>
            <a href="https://www.twitter.com" target='_blank' rel='noreferrer' className="hover:text-blue-300 duration-300">
              <FaTwitter className="w-8 h-8" />
              <span className="sr-only">Twitter page</span>
            </a>
            <a href="https://www.github.com" target='_blank' rel='noreferrer' className="hover:text-black duration-300">
              <FaGithub className="w-8 h-8" />
              <span className="sr-only">GitHub account</span>
            </a>
            <a href="https://www.linkedin.com" target='_blank' rel='noreferrer' className="hover:text-blue-500 duration-300">
              <FaLinkedin className="w-8 h-8" />
              <span className="sr-only">LinkedIn account</span>
            </a>
            <a href="https://www.instagram.com" target='_blank' rel='noreferrer' className="hover:text-pink-500 duration-300">
              <FaInstagram className="w-8 h-8" />
              <span className="sr-only">Instagram account</span>
            </a>
          </div>
        </div>
        <hr className="my-6 border-gray-200 sm:mx-auto d lg:my-8" />
        <div className="text-gray-300 flex flex-col items-center justify-center sm:flex-row sm:justify-between">
          <div className="text-center sm:text-left">
            <h1 className="sm:text-2xl text-lg font-medium text-white mb-2">Our Services</h1>
            <ul className="space-y-2">
              <li>
                <Link to="/services" className="text-gray-300 hover:text-blue-500">Document Clearing</Link>
              </li>
              <li>
                <Link to="/services" className="text-gray-300 hover:text-blue-500">New Business Setup</Link>
              </li>
              <li>
                <Link to="/services" className="text-gray-300 hover:text-blue-500">Visa Processing</Link>
              </li>
        
            </ul>
            
          </div>
          <div className="text-center sm:text-left">
            <h1 className="sm:text-2xl text-lg font-medium text-white mt-10">{''}</h1>
            <ul className="space-y-2">
              <li>
                <Link to="/services" className="text-gray-300 hover:text-blue-500">PRO Services</Link>
              </li>
              <li>
                <Link to="/services" className="text-gray-300 hover:text-blue-500">Tourist Visa</Link>
              </li>
              <li>
                <Link to="/services" className="text-gray-300 hover:text-blue-500">Visa Renewals</Link>
              </li>
              

            </ul>
            
          </div>
          <div className="text-gray-300 flex items-center justify-center mt-4 sm:mt-0">
            <Link to={'/terms-and-condition'} className="hover:underline">Terms</Link>
            <Link to={'/privacy-policy'} className="mx-4 hover:underline">Privacy</Link>
            <span className="text-sm">&copy; 2021-2023 <Link to="/" className="hover:underline">Masar Alshalal™</Link>. All Rights Reserved.</span>
          </div>
        </div>
      </div>
    </footer>

  );
};

export default Footer;
