import React from 'react';
import NavbarAbout from "../../components/NavbarAbout";
import { Link } from "react-router-dom";
import Blober from '../../components/Blober'


const About = () => {
  return (
    <>
    <NavbarAbout/>
    <Blober/>
    <div className='mt-0 md:mt-10'></div>
    <div className="flex flex-col justify-center items-center h-screen">
      <h1 className=" animate-text text-8xl font-bold text-[#66b1d6] md:-mt-24 md:mb-12">ABOUT US</h1>
      <div className="w-7/12">
      <p className="text-md text-black"> 
      Hey there, welcome to our super cool corner of the internet!<br/><br/> We've got an AI playground that's guaranteed to tickle your brain and blow your mind at the same time.

Our founder is a total tech geek who's combined all his fave things (React, Tailwind, CSS, JavaScript, NodeJS, Express, and MongoDB) to create a bunch of apps that are sure to knock your socks off. Plus, he's got a secret weapon: humour. That's right, our apps aren't just smart; they're also hilarious.

We've got something for everyone, from chatbots to data-crunching apps, and everything in between. And we're all about making AI fun and accessible for everyone. So, come join us and let's geek out together!
        </p><br/>
        </div>
        <Link to='/app' className="bg-[#66b1d6] hover:bg-[#4e98bd] text-white hover:text-[#f1faff] font-bold py-2 px-6 rounded-full transition duration-300 transform hover:scale-105 mt-0 md:mt-12">DISCOVER NOW</Link>
        <hr className="border-1 border-black w-1/3 md:w-1/6 mb-4 mt-4 md:-mb-5 md:mt-8" />
    </div>
    </>
  );
};

export default About;


