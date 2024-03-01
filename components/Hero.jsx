import React from 'react';
import { AiOutlineSearch } from 'react-icons/ai';
import beachVid from '../assets/beachVid.webm';
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <div className='w-full h-screen relative'>
      <video
        className='w-full h-full object-cover'
        src={beachVid}
        autoPlay
        loop
        muted
      />
      <motion.div
        className=""
        initial="hidden"
        animate="visible"
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 2.0 }}
        variants={{
          hidden: { opacity: 0, x: -80 },
          visible: { opacity: 1, x: 0 },
        }}>
        <div className='absolute w-full h-full top-0 left-0 bg-gray-900/30'></div>
        <div className='absolute top-0 w-full h-full flex flex-col justify-center text-center text-white p-4'>
          <h1>Come to Paradis</h1>
          <h2 className='py-4'>Jamaica Best Caribbean Destination</h2>
          <form
            className='flex justify-between items-center max-w-[400px]  mx-auto w-full border p-1 ml-34 
          rounded-md text-black bg-gray-100/90'
          >
            <div>
              <input
                className='bg-transparent w-[300px] sm:w-[400px] font-[Poppins] focus:outline-none
                  '
                type='text'
                placeholder='Search Destinations'
              />
            </div>
            <div>
              <button>
                <AiOutlineSearch size={20} className='icon' style={{ color: '#ffffff' }} />
              </button>
            </div>
          </form>
        </div>
      </motion.div>
    </div>
  );
};

export default Hero;
