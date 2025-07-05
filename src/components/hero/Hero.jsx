import React from 'react'
import { personalData } from '../../utils/data/personaldata'
import Lottie from 'lottie-react';
import { RiContactsFill } from "react-icons/ri";
import { BsPersonVcardFill } from "react-icons/bs";
import { Link } from 'react-scroll';
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { FaSquareTwitter } from "react-icons/fa6";
import { FaInstagram} from "react-icons/fa6";
import animation from '../../assets/Animation1.json';
const Hero = () => {
  return (
    <section id="hero" className='max-w-9xl mx-auto px-4 relative flex flex-col items-center justify-between py-4 lg:py-12'>
        <img
  src="/hero.svg"
  alt="Hero"
  width="1572"
  height="795"
  className="absolute -top-[98px] -z-10"
/>


       <div className="grid grid-cols-1 items-start lg:grid-cols-2 lg:gap-12 gap-y-8">
        <div className="order-1 lg:order-1 flex flex-col items-start justify-center p-2 pb-20 md:pb-10 lg:pt-10">
            <h1 className="text-3xl font-bold leading-10 text-white md:font-extrabold lg:text-[2.6rem] lg:leading-[3.5rem]">
            Hello, <br />
            This is {' '}
            <span className=" text-pink-500"><a href={personalData.github} target="_blank">{'Harshavardhan'}</a></span>
            </h1>
            <p className="mt-4 text-white/80 text-lg font-medium">
            MERN developer by passion, problem solver by mindset.
I build full-stack web apps and strengthen logic with DSA.
            </p>
            <br/>
            
            {/* Social Links */}
            <div className="mt-6 flex items-center gap-5">
                <a
                href={personalData.github}
                target="_blank"
                rel="noreferrer"
                className="text-pink-500 hover:text-white hover:scale-110 transition-all"
                >
              <FaGithub size={28} />
            </a>
            <a
              href={personalData.linkedIn}
              target="_blank"
              rel="noreferrer"
              className="text-pink-500 hover:text-white hover:scale-110 transition-all"
            >
              <FaLinkedin size={28} />
            </a>
            <a
              href={personalData.instagram}
              target="_blank"
              rel="noreferrer"
              className="text-pink-500 hover:text-white hover:scale-110 transition-all"
            >
              <FaInstagram size={28} />
            </a>
            <a
              href={personalData.twitter}
              target="_blank"
              rel="noreferrer"
              className="text-pink-500 hover:text-white hover:scale-110 transition-all"
            >
              <FaSquareTwitter size={28} />
            </a>
            </div>
            <div className="mt-8 flex flex-wrap gap-4">
               <Link
                    to="contact"
              smooth={true}
              duration={500}
              offset={-80}
              className="bg-gradient-to-r from-violet-600 to-pink-500 p-[2px] rounded-full hover:from-pink-500 hover:to-violet-600 transition-all duration-300 cursor-pointer"
               >
                <button className="bg-[#0d1224] text-white text-sm md:text-base font-medium uppercase tracking-wide px-6 py-3 rounded-full flex items-center gap-2 hover:gap-4 transition-all duration-200">
                Contact Me
                <RiContactsFill size={16} />
              </button>
               </Link> 
               {/* <a
              href={personalData.resume}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2 bg-gradient-to-r from-pink-500 to-violet-600 text-white text-sm md:text-base font-medium uppercase tracking-wide hover:from-violet-600 hover:to-pink-500 px-6 py-3 rounded-full hover:gap-4 transition-all duration-300"
            >
              Get Resume
              <BsPersonVcardFill size={16} />
            </a> */}
            </div>
        </div>
        <div className="order-1 lg:order-1 flex items-center justify-center">
            <Lottie animationData={animation} loop={true} className="w-50 md:w-70" />
        </div>
       </div>
    </section>
  )
}

export default Hero
