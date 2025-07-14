import React from 'react';
import MyPic from "../../assets/MyPic.jpg";
import { personalData } from '../../utils/data/personaldata';

const About = () => {
  return (
    <section id="about" className="max-w-7xl mx-auto px-2 relative flex flex-col items-center justify-between py-4 sm:px-4 lg:py-12 my-8 lg:my-16 ">
      
      <div className="max-w-xl w-full flex flex-wrap items-center justify-center my-8 mb-20 px-2">
  {/* Left line */}
  <div className="flex-grow h-[2px] bg-pink-500"></div>

  {/* Ribbon box */}
  <div className="bg-gradient-to-r from-pink-500 to-violet-600 p-[2px] rounded-lg hover:from-violet-600 hover:to-pink-500 transition-all duration-300 ">
    <div className="bg-[#0d1224] px-4 sm:px-6 py-1.5 sm:py-2 text-base sm:text-lg md:text-xl font-semibold text-white rounded-lg text-center whitespace-nowrap">
      Know Me
    </div>
  </div>

  {/* Right line */}
  <div className="flex-grow h-[2px] bg-violet-600"></div>
</div>




        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16">
        <div className="order-2 lg:order-1">
          <p className="text-3xl font-bold leading-10 mb-5 mt-5 text-[#16f2b3] md:font-extrabold lg:text-[2.6rem] lg:leading-[3.5rem]">
           About Me...
          </p>
          <p className="text-gray-200 text-sm lg:text-lg">
            {personalData.description}&nbsp;
          </p>
        </div>
        <div className="flex justify-center order-1 lg:order-2 mr-5">
            <img 
  src={MyPic} 
  alt="Pic" 
  width={300}
  height={250}
  className='
    rounded-3xl 
    transition-all 
    duration-300 /* Faster transition works better for blur */
    md:grayscale 
    blur-none /* Base state - no blur */
    md:blur-sm /* Blur on large screens */
    transition-all 
    md:duration-1000 
    hover:grayscale-0 
    hover:scale-110 
    md:hover:blur-none /* Remove blur on hover */
    cursor-pointer
  '
/>
        </div>
        </div>
      
    </section>
  );
};

export default About;
