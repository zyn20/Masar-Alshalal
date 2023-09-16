import React from 'react';
import Testimonial from './Testimonial';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Contact from './Contact';
import { FaArrowRight } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import backgroundImage from '../assets/Background.png';
import Services from './Services';

function Home() {

    const scrollToSection = (sectionId) => {
        const section = document.querySelector(sectionId);
        if (section) {
          section.scrollIntoView({ behavior: 'smooth' });
        }
      };
    
    return (
        <>
        <Navbar />
        <div className='md:px-10 bg-gradient-to-t from-yellow-600 to-green-800 text-white w-full h-screen  ' style={{ backgroundImage: `url(${backgroundImage})` }}>
            <div className='mx-6 sm:mx-10 p-8 flex flex-col justify-center '>
                <h1 className='text-4xl md:text-6xl text-center md:text-left mb-4 '>
                    Your One Place Repo for
                    <br className='hidden md:block' />
                    All Documents Clearing
                </h1>
                <h2 className='lg:w-2/3 mx-auto ml-0 leading-relaxed text-justify'>
                Your Gateway to Seamless Document Processing in the UAE
                </h2>
                <div className='mt-12 flex flex-col  '>
                    
                        <p  className='block  text-gray-300'>
                           
                           Click Below to Get Started
                            
                        </p>
                        <Link to="/" onClick={() => scrollToSection('#about')}>

                        <button className='btn group flex mt-3 w-full sm:w-[20rem] h-18 md:h-10 '>GO <span className='mt-1 ml-1 group-hover:animate-pulse group-hover:ml-5 duration-300'><FaArrowRight/>  </span>  </button>

                        </Link>
                        
                    </div>
                            
            </div>
            
        </div>
        <div className='bg-gray-50' id='about'>
        <Testimonial />

        </div>
        <div id='services'>
            <Services />
        </div>
        <div id='contact'>
            <Contact />
        </div>
       

        <Footer />
        </>
    );
}

export default Home;
