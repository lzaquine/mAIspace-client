import React, { useEffect } from 'react';
import { Link } from "react-router-dom";
import Glide from '@glidejs/glide';
import '@glidejs/glide/dist/css/glide.core.min.css';
import '@glidejs/glide/dist/css/glide.theme.min.css';
import { library } from '@fortawesome/fontawesome-svg-core';
import '@fortawesome/fontawesome-free/css/all.min.css';
import { faAngleLeft, faAngleRight } from '@fortawesome/free-solid-svg-icons';
import NavbarPlayground from "../../components/NavbarPlayground.jsx";
import Blober from '../../components/Blober'
import booksImg from '../../Image/books.jpeg'
import marv from '../../Image/robooot.jpg'
import terror from '../../Image/terror.jpeg'
import coding from '../../Image/cod.jpeg'
import interview from '../../Image/interview.jpeg'
import key from '../../Image/key.jpeg'
import school from '../../Image/skul.png'
import kid from '../../Image/kid.jpeg'
import keywords from '../../Image/keywordss.png'

library.add(faAngleLeft, faAngleRight);

const MyCarousel = () => {
  useEffect(() => {
    const config = {
      type: 'carousel',
      startAt: 0,
      perView: 4,
      gap: 38,
      autoplay: 4000,
      keyboard: true,
      breakpoints: {
        1280: {
          perView: 4,
        },
        1024: {
          perView: 2,
        },
        768: {
          perView: 1,
        },
      },
    };
    new Glide('.glide', config).mount();
  }, []);

  return (
    <>
      <NavbarPlayground/>
      <Blober/>
      <h1 className="text-5xl sm:text-5xl md:text-5xl lg:text-6xl xl:text-7xl text-center text-[#66b1d6] absolute inset-44 ">PLAYGROUND</h1>

    <div className="flex justify-center items-center h-screen">
      <div className="glide xl:w-[96rem] lg:w-[80rem] md:w-[54rem] sm:w-[18rem] px-16 py-8 bg-opacity-60 rounded-3xl">
        <div className="glide__track xl:w-[96rem] lg:w-[80rem] md:w-[54rem] sm:w-[18rem] py-8" data-glide-el="track">
          <ul className="glide__slides">
            <li className="glide__slide transition duration-300 transform">
              <div className="relative flex flex-col text-center h-40 items-center justify-center rounded-3xl duration-300 ease-in-out mb-10">
                <span className="absolute w-4 h-4 rounded-full right-4 top-4"></span>
                <span className=" font-semibold px-6 py-4 rounded-full mb-1">
                 <Link to='/app/list'><img src={booksImg} alt="library" className='max-h-32 max-w-2xl hover:scale-105 duration-500 ease-in-out cursor-pointer'/></Link>
                </span>
                <span className="text-black font-bold">Book List</span>
              </div>
                <span className="text-black font-bold">Generates a list of 10 books based on the user's input, providing relevant options that match their search criteria.</span>
            </li>
            <li className="glide__slide transition duration-300 transform">
              <div className="relative flex flex-col text-center h-40 items-center justify-center rounded-3xl duration-300 ease-in-out mb-10">
                <span className="absolute w-4 h-4 rounded-full right-4 top-4"></span>
                <span className=" font-semibold px-6 py-4 rounded-full mb-1">
                  <Link to='/app/Marvbot'><img src={marv} alt="marv the bot" className='max-h-32 max-w-2xl hover:scale-105 duration-500 ease-in-out cursor-pointer'/></Link>
                </span>
                <span className="text-black font-bold">Marv</span>
              </div>
                <span className="text-black font-bold">A sarcastic and rude chatbot that responds to user input with snarky comments and insults, bringing some humor and attitude to the conversation.</span>
            </li>
            <li className="glide__slide transition duration-300 transform">
              <div className="relative flex flex-col text-center h-40 items-center justify-center rounded-3xl duration-300 ease-in-out mb-10">
                <span className="absolute w-4 h-4 rounded-full right-4 top-4"></span>
                <span className=" font-semibold px-6 py-4 rounded-full mb-1">
                 <Link to='/app/Horrorstory'><img src={terror} alt="horror movie" className='max-h-32 max-w-2xl hover:scale-105 duration-500 ease-in-out cursor-pointer'/></Link>
                </span>
                <span className="text-black font-bold">Horror Story</span>
              </div>
                <span className="text-black font-bold">This will spookify any word you give it by creating a personalized horror story just for you! Get ready to be scared out of your wits and maybe even a little bit entertained.</span>
            </li>
            <li className="glide__slide transition duration-300 transform">
              <div className="relative flex flex-col text-center h-40 items-center justify-center rounded-3xl duration-300 ease-in-out mb-10">
                <span className="absolute w-4 h-4 rounded-full right-4 top-4"></span>
                <span className=" font-semibold px-6 py-4 rounded-full mb-1">
                 <Link to='/app/codequestion'><img src={coding} alt="person coding" className='max-h-32 max-w-2xl hover:scale-105 duration-500 ease-in-out cursor-pointer'/></Link>
                </span>
                <span className="text-black font-bold">Coding Questions</span>
              </div>
                <span className="text-black font-bold">Provides coding answers to your questions, offering expert advice and solutions to help you solve even the trickiest coding problems. Get unstuck and get coding!</span>
            </li>
            <li className="glide__slide transition duration-300 transform">
              <div className="relative flex flex-col text-center h-40 items-center justify-center rounded-3xl duration-300 ease-in-out mb-10">
                <span className="absolute w-4 h-4 rounded-full right-4 top-4"></span>
                <span className=" font-semibold px-6 py-4 rounded-full mb-1">
                 <Link to='/app/interview'><img src={interview} alt="interview" className='max-h-32 max-w-2xl hover:scale-105 duration-500 ease-in-out cursor-pointer'/></Link>
                </span>
                <span className="text-black font-bold">Interview Questions</span>
              </div>
                <span className="text-black font-bold">It's like having a cool, interview-savvy friend in your pocket who will give you all the inside scoop on what questions to expect in your next job interview. Time to show those hiring managers what you're made of!</span>
            </li>
            <li className="glide__slide transition duration-300 transform">
              <div className="relative flex flex-col text-center h-40 items-center justify-center rounded-3xl duration-300 ease-in-out mb-10">
                <span className="absolute w-4 h-4 rounded-full right-4 top-4"></span>
                <span className=" font-semibold px-6 py-4 rounded-full mb-1">
                 <Link to='/app/Keypoints'><img src={key} alt="keys" className='max-h-32 max-w-2xl hover:scale-105 duration-500 ease-in-out cursor-pointer'/></Link>
                </span>
                <span className="text-black font-bold">Keypoints</span>
              </div>
                <span className="text-black font-bold">It'll give you all the juicy details on what to study, so you can impress your profs and own that next exam like a boss. Let's get nerdy!</span>
            </li>
            <li className="glide__slide transition duration-300 transform">
              <div className="relative flex flex-col text-center h-40 items-center justify-center rounded-3xl duration-300 ease-in-out mb-10">
                <span className="absolute w-4 h-4 rounded-full right-4 top-4"></span>
                <span className=" font-semibold px-6 py-4 rounded-full mb-1">
                 <Link to='/app/summarizer'><img src={kid} alt="summarizer" className='max-h-32 max-w-2xl hover:scale-105 duration-500 ease-in-out cursor-pointer'/></Link>
                </span>
                <span className="text-black font-bold">Summarizer</span>
              </div>
                <span className="text-black font-bold">It takes confusing text and makes it easy-peasy for even a 2nd grader to understand! Say goodbye to headache-inducing language and hello to plain and simple explanations that even your pet rock could comprehend.</span>
            </li>
            <li className="glide__slide transition duration-300 transform">
              <div className="relative flex flex-col text-center h-40 items-center justify-center rounded-3xl duration-300 ease-in-out mb-10">
                <span className="absolute w-4 h-4 rounded-full right-4 top-4"></span>
                <span className=" font-semibold px-6 py-4 rounded-full mb-1">
                 <Link to='/app/english'><img src={school} alt="grammar" className='max-h-32 max-w-2xl hover:scale-105 duration-500 ease-in-out cursor-pointer'/></Link>
                </span>
                <span className="text-black font-bold">English Grammar</span>
              </div>
                <span className="text-black font-bold">It's like having a personal grammar cop who will fix all your cringe-worthy language mistakes. Get ready to level up your writing game, nerd!</span>
            </li>
            <li className="glide__slide transition duration-300 transform">
              <div className="relative flex flex-col text-center h-40 items-center justify-center rounded-3xl duration-300 ease-in-out mb-10">
                <span className="absolute w-4 h-4 rounded-full right-4 top-4"></span>
                <span className=" font-semibold px-6 py-4 rounded-full mb-1">
                 <Link to='/app/Keywords'><img src={keywords} alt="keywords" className='max-h-32 max-w-2xl hover:scale-105 duration-500 ease-in-out cursor-pointer'/></Link>
                </span>
                <span className="text-black font-bold">Keywords</span>
              </div>
                <span className="text-black font-bold">A magician that can pull out the most important words from a sea of text. It'll save you time, brain power, and a whole lot of scrolling by picking out the juicy bits and leaving the boring stuff behind.</span>
            </li>
          
          </ul>
        </div>
        <div className="glide__arrows border-none" data-glide-el="controls">
    <button className="glide__arrow glide__arrow--left left-4" data-glide-dir="<">
      <div className="h-9 w-9 bg-[#66b1d6] rounded-xl flex justify-center items-center my-auto hover:bg-[#4e98bd] duration-300 ease-in-out">
        <i className="fas fa-angle-left text-white text-2xl"></i>
      </div>
    </button>
    <button className="glide__arrow glide__arrow--right right-4" data-glide-dir=">" style={{outline: 'none'}}>
      <div className="h-9 w-9 bg-[#66b1d6] rounded-xl flex justify-center items-center my-auto hover:bg-[#4e98bd] duration-300 ease-in-out">
        <i className="fas fa-angle-right text-white text-2xl"></i>
      </div>
    </button>
  </div>
      </div>
    </div>
    </>
  );
  }
  export default MyCarousel
          