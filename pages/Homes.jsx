import React from 'react'
import Destinations from '../components/Destinations.jsx';
import Footer from '../components/Footer.jsx';
import Hero from '../components/Hero.jsx';
import Search from '../components/Search.jsx';
import { motion } from "framer-motion";

const Homes = () => {
    return (
        <div>
            <div>
                <Hero />
                <Destinations />
                <Search />
                <Footer />
            </div>
        </div>
    )
}

export default Homes
