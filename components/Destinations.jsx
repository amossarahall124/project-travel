import React from 'react'
import beach4 from "../assets/destin/beach4.jpg";
import falls from "../assets/destin/falls.jpg";
import beach3 from "../assets/destin/beach3.jpg";
import rocks from "../assets/destin/rocks.jpg";
import falls1 from "../assets/destin/falls1.jpg";
import { motion } from "framer-motion";



const Destinations = () => {
  return (
    <motion.div
      className=""
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.5 }}
      transition={{ duration: 2.0 }}
      variants={{
        hidden: { opacity: 0, x: -80 },
        visible: { opacity: 1, x: 0 },
      }}>
      <div className='max-w-[1240px] mx-auto py-16 px-4 text-center'>
        <h1>Breathtaking Views</h1>
        <p className='py-4'>On the Caribbean's Best locations</p>
        <div className='grid grid-rows-none md:grid-cols-5 py-4 gap-2 md:gap-4'>
          <img className='w-full h-full object-cover col-span-2 md:col-span-3 row-span-2' src={beach4} alt="/" />
          <img className='w-full h-full object-cover' src={falls} alt="/" />
          <img className='w-full h-full object-cover' src={beach3} alt="/" />
          <img className='w-full h-full object-cover' src={rocks} alt="/" />
          <img className='w-full h-full object-cover' src={falls1} alt="/" />
        </div>
      </div>
    </motion.div>
  )
}

export default Destinations