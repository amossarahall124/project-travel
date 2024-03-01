import React from 'react';
import {
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaPinterest,
  FaYoutube,
} from 'react-icons/fa';
import banner from "../assets/banner.jpg"
import { motion } from "framer-motion";

const Footer = () => {
  return (

    <div className='w-full h-[350px] relative'>
      <div className='  w-full  h-[350px] mx-auto flex flex-col '>
        <div className='w-full h-[350px] relative'>
          <img src={banner} alt="old people" className='w-full h-full object-cover' />
          <div className='absolute w-full h-full top-0 left-0 bg-gray-900/80'></div>
        </div>

        <div className='absolute  w-4/5 h-full flex justify-center items-center  gap-6 lg:gap-24'>
          <div className='-mt-28 lg:ml-[400px] p-4'>
            <h1 className='text-primary lg:text-[40px]'>Travel-JA.</h1>
            <div className='flex gap-2 mt-4'>
              <FaFacebook className='text-slate-400 text-[24px]   hover:text-bright cursor-pointer  hover:scale-110' />
              <FaTwitter className='text-slate-400 text-[24px] hover:text-bright cursor-pointer  hover:scale-110' />
              <FaYoutube className='text-slate-400 text-[24px] hover:text-bright cursor-pointer hover:scale-110' />
              <FaPinterest className='text-slate-400 text-[24px] hover:text-bright cursor-pointer  hover:scale-110' />
              <FaInstagram className='text-slate-400 text-[24px] hover:text-bright cursor-pointer hover:scale-110' />
            </div>
          </div>
          <div className='flex flex-col -gap-2 '>
            <h2 className='text-bright  lg:text-[35px]'>Pages </h2>
            <p className='text-[20px] text-slate-300 font-bold hover:scale-110 hover:text-bright cursor-pointer  '>Home</p>
            <p className='text-[20px] text-slate-300 font-bold hover:scale-110 hover:text-bright cursor-pointer  '>Destinations</p>
            <p className='text-[20px] text-slate-300 font-bold hover:scale-110 hover:text-bright cursor-pointer  '>Travel</p>
            <p className='text-[20px] text-slate-300 font-bold hover:scale-110 hover:text-bright cursor-pointer  '>View</p>
            <p className='text-[20px] text-slate-300 font-bold hover:scale-110 hover:text-bright cursor-pointer  '>Book</p>
          </div>
        </div>
      </div>
    </div >
  );
};

export default Footer;
