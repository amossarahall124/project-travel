import React from 'react'
import { useLocation, useNavigate } from "react-router-dom";
import Blogs from "../pages/Blogs";
import { motion } from "framer-motion";

const BlogsInfor = (props) => {
    const navigate = useNavigate();
    const location = useLocation();
    console.log(props, " props");
    console.log(location, " useLocation Hook");
    const { image, date, title, description, author } = location.state;


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
            <div className=" pt-20 w-4/5 ml-12 md:ml-24 lg:ml-52">
                <div className="h-[300px] overflow-hidden">
                    <img
                        src={image}
                        alt={title}
                        className="mx-auto h-[300px] w-full object-cover transition duration-700 hover:scale-110"
                    />
                </div>
                <div className="container w-screen h-full flex flex-col p-2  ">
                    <p className="text-slate-600 text-sm py-3">

                        written by {author} on {date}
                    </p>
                    <h1 className="w-3/5 text-2xl font-semibold">{title}</h1>
                    <p className='w-4/5'>{description}</p>
                </div>

                <div className='mt-4 mb-4 flex items-center justify-center '>
                    <button onClick={() => { navigate("/blogs") }} className='bg-gradient-to-r from-primary to-secondary hover:bg-bg-gradient-to-r hover:from-secondary hover:bg-primary transition-all duration-600 text-white px-3 py-1 rounded-full "
                ;
                }}'>Back</button>
                </div>
            </div>
        </motion.div>
    );
};

export default BlogsInfor
