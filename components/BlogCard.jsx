import React from 'react'
import { Link } from "react-router-dom";
import black from '../assets/blog/black.jpg';
import mountatin from '../assets/blog/mountatin.jpg';
import ocho from '../assets/blog/ocho.jpg';
import tree from '../assets/blog/tree.jpg';

const BlogCard = ({ image, date, title, description, author }) => {
    return (
        <>
            <Link
                to={`/blogs/${title}`}
                onClick={() => {
                    window.scrollTo(0, 0);

                }}
                state={{ image, date, title, description, author }}
            >
                <div className="p-4 shadow-lg transition-all duration-500 hover:shadow-xl dark:bg-slate-600 dark:text-white">
                    <div className="overflow-hidden">
                        <img
                            src={image}
                            alt="No image"
                            className="mx-auto h-[250px] w-full object-cover transition duration-700 hover:skew-x-2 hover:scale-110"
                        />
                    </div>
                    <div className="flex justify-between pt-2 text-slate-400">
                        <p>{date}</p>
                        <p className="line-clamp-1">By {author}</p>
                    </div>
                    <div className="space-y-2 py-3">
                        <h1 className="line-clamp-1 font-bold lg:text-[24px]">{title}</h1>
                        <p className="line-clamp-2">{description}</p>
                    </div>
                </div>
            </Link>
        </>
    )
}

export default BlogCard
