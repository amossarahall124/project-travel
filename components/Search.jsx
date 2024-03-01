import React from 'react';
import { RiCustomerService2Fill } from 'react-icons/ri';
import { MdOutlineTravelExplore } from 'react-icons/md';
import { motion } from "framer-motion";

const Search = () => {
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
      <div className='max-w-[1240px] mx-auto grid lg:grid-cols-3 gap-4 px-4 py-16'>
        <div className='lg:col-span-2 flex flex-col justify-evenly'>
          <div>
            <h2>LUXURY INCLUDED VACATIONS FOR EVERYONE</h2>
            <p className='py-4'>
              Come experience the very pinnacle of luxury Caribbean all-inclusive
              vacations spots for the hold familys . Our luxury resorts,
              set along the most gorgeous tropical settings and exquisite beaches
              in Jamaica, feature unlimited gourmet dining, unique bars serving
              premium liquors and wines, and every land and water sport, including
              complimentary green fees at our certified scuba diving at most resorts.
              If you are planning a vacation why not come to us.
            </p>
          </div>
          <div className='grid sm:grid-cols-2 gap-8 py-4'>
            <div className='flex flex-col lg:flex-row items-center text-center'>
              <button>
                <RiCustomerService2Fill size={50} />
              </button>
              <div>
                <h3 className='py-2'>LEADING SERVICE</h3>
                <p className='py-1'>ALL-INCLUSIVE COMPANY FOR 20 YEARS IN-A-ROW</p>
              </div>
            </div>
            <div className='flex flex-col lg:flex-row items-center text-center'>
              <button>
                <MdOutlineTravelExplore size={50} />
              </button>
              <div>
                <h3 className='py-2'>LEADING SERVICE</h3>
                <p className='py-1'>ALL-INCLUSIVE COMPANY FOR 20 YEARS IN-A-ROW</p>
              </div>
            </div>
          </div>
        </div>

        <div>
          <div className='border text-center'>
            <p className='pt-2'>GET AN ADDITIONAL 10% OFF</p>
            <p className='py-4'>12 HOURS LEFT</p>
            <p className='bg-primary text-gray-200 py-2 cursor-pointer'>BOOK NOW AND SAVE</p>
          </div>
          <form className='w-full'>
            <div className='flex flex-col my-2'>
              <label>Destination</label>
              <select className='border rounded-md p-2 cursor-pointer'>
                <option>Ocho Rios</option>
                <option>Kigston</option>
                <option>Blue Moutains</option>
                <option>Negril</option>
              </select>
            </div>
            <div className='flex flex-col my-4'>
              <label>Check-In</label>
              <input className='border rounded-md p-2 cursor-pointer' type="date" />
            </div>
            <div className='flex flex-col my-2'>
              <label>Check-Out</label>
              <input className='border rounded-md p-2 cursor-pointer' type="date" />
            </div>
            <button className='w-full my-4'>Rates & Availabilities</button>
          </form>
        </div>
      </div>
    </motion.div>
  );
};

export default Search;
