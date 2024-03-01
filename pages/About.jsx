import React from 'react'
import Grid from '../components/Grid.jsx';
import { motion } from "framer-motion";

const About = () => {
    return (
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
            <div className=" w-screen h-screen flex flex-col   items-center  justify-center ">
                <div className="w-3/5 h-full md:w-2/5 md:h-2/5 flex  flex-col items-center justify-center mt-16 md:mt-0">
                    <h2 className="text-[30px] text-center">LUXURY VACATIONS SPOTS HERE IN JAMAICA</h2>
                    <p className='py-4'>
                        Come experience the very pinnacle of luxury Caribbean all-inclusive Jamaican
                        vacations Resorts and activies. Our luxury  locations,
                        set along the most gorgeous tropical settings and exquisite life experiences.We offer  unlimited gourmet dining, unique bars serving
                        premium liquors and wines, round the clock serive and care , including
                        complimentary hand crafted takeways and momentos at our craft venders and markets and certified bike tour and resuce trained hikes. If you are planning a getaway or adventrue,our island is
                        the leader in Caribbean destination for family size packages.
                    </p>
                </div >
                <div className="w-4/6 h-1/5">
                    <Grid />
                </div>


            </div>
        </motion.div>
    )
}

export default About
