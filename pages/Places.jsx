import React from 'react'
import PlaceCards from "../components/PlaceCards";
import Img1 from "../assets/bestPlaces/beach2.jpg";
import Img2 from "../assets/bestPlaces/hotel2.jpg";
import Img3 from "../assets/bestPlaces/duns.jpg";
import Img4 from "../assets/bestPlaces/food.jpg";
import Img5 from "../assets/bestPlaces/hike2.jpg";
import Img6 from "../assets/bestPlaces/pool2.jpg";
import Img7 from "../assets/bestPlaces/zipline.jpg";
import Img8 from "../assets/bestPlaces/cave.jpg";
import Img9 from "../assets/bestPlaces/bamboo.jpg";
import Img10 from "../assets/bestPlaces/horse.jpg";
import { motion } from "framer-motion";

const PlacesData = [
    {
        img: Img1,
        title: "The Caribbean beaches ",
        location: "Jamaica",
        description: "stunning beaches with crystal-clear waters and white sandy shores. Some popular beaches in Jamaica include  Negril, Montego Bay, Port Antonio. These beaches offer a perfect setting for relaxation, water sports, and enjoying the beauty of the Caribbean.",
        price: 300,
        type: "Cultural Relax",
    },
    {
        img: Img2,
        title: "Hillton Rose Hotel",
        location: "Ocho Rios Jamaica ",
        description:
            "catering to various budgets and preferences.This hotels offer luxurious accommodations, beautiful beaches, and a taste of Jamaican hospitality.",
        price: 1200,
        type: "Cultural Relax",
    },
    {
        img: Img3,
        title: "Duns River Falls",
        location: "Ocho Rios Jamaica",
        description:
            " A stunning waterfall that cascades over limestone rocks, creating a series of terraced pools. Visitors can climb the falls with the help of experienced guides, making it a fun and adventurous activity.",
        price: 500,
        type: "Cultural Relax",
    },
    {
        img: Img4,
        title: "Miss Pats foods and drink",
        location: "Portland Jamaica",
        description: "offering a delicious variety of traditional Jamaican dishes such as jerk chicken, ackee and saltfish, curry goat, and festival (a type of fried dumpling). These restaurants often provide a vibrant and lively atmosphere with reggae music playing in the background",
        price: 750,
        type: "Cultural Relax",
    },
    {
        img: Img5,
        title: "Blus Mountains Peak Trail ",
        location: "St Andrew Jamaica",
        description:
            " a fantastic experience for nature lovers and adventure seekers. The Blue Mountains offer breathtaking views, lush forests, and a chance to explore Jamaica's diverse flora and fauna.",
        price: 1700,
        type: "Cultural Relax",
    },
    {
        img: Img6,
        title: "Great house , Resorts",
        location: "St Ann Jamaica ",
        description:
            "stunning resorts and hotels that feature beautiful infinity pools with breathtaking views. These infinity pools offer a luxurious and relaxing experience for visitors looking to unwind and enjoy the tropical surroundings.",
        price: 1240,
        type: "Cultural Relax",
    },
    {
        img: Img7,
        title: "Ziplining",
        location: "M0ntego Bay Jamaica  ",
        description:
            "There are several companies that offer ziplining experiences in different parts of the island, such as Montego Bay, Ocho Rios, and Negril. This adventure gives you the opportunity to experience the thrill of flying through the trees and appreciate Jamaica's natural beauty ",
        price: 840,
        type: "Cultural Relax",
    },
    {
        img: Img8,
        title: "  The Green Grotto Caves in Trelawny",
        location: "Trelawny Jamaica ",
        description:
            "fascinating activity that allows you to discover stunning rock formations, underground rivers, and the geological history of the island.These underground adventures offer a unique experience for nature and adventure lovers",
        price: 540,
        type: "Cultural Relax",
    },
    {
        img: Img9,
        title: "  Botanical Gardens, Nature Reserve",
        location: "Kingston Jamaica ",
        description:
            " chance to explore the island's diverse flora and fauna in beautiful settings and  scenic trails or walkways lined with bamboo plants, creating a picturesque and serene environment for visitors to enjoy. These paths often lead through lush forests, gardens, or natural landscapes, providing a peaceful and tranquil setting for leisurely strolls or hikes.",
        price: 240,
        type: "Cultural Relax",
    },
    {
        img: Img10,
        title: " Half Moon Bay in Montego Bay",
        location: "Montego Bay Jamaica ",
        description:
            "a perfect combination of adventure and relaxation. Enjoy riding horses along the scenic coastline or through lush tropical landscapes, and then unwind on the beautiful sandy beaches with crystal clear waters",
        price: 470,
        type: "Cultural Relax",
    },
];



const Places = ({ handleOrderPopup }) => {
    return (

        <div className=" text-white bg-slate-100  w-screen h-full  py-10">
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
                <section data-aos="fade-up" className="container w-4/5 lg:w-full  ml-16 lg:ml-16 flex flex-col items-center justify-center mt-36 ">
                    <h1 className=" my-8 border-l-8 text-black border-bright/50 py-2 pl-2 text-3xl  font-bold">
                        Best Places to Visit
                    </h1>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                        {PlacesData.map((item, index) => (
                            <PlaceCards
                                handleOrderPopup={handleOrderPopup}
                                key={index}
                                {...item}
                            />
                        ))}
                    </div>
                </section>
            </motion.div>
        </div>
    )
}

export default Places
