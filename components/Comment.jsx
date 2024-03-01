import React from 'react'
import Slider from "react-slick";

const CommentData = [
    {
        id: 1,
        name: "Samuel",
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque reiciendis inventore iste ratione ex alias quis magni at optio",
        img: "https://picsum.photos/101/101",
    },
    {
        id: 2,
        name: "John Doe",
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque reiciendis inventore iste ratione ex alias quis magni at optio",
        img: "https://picsum.photos/102/102",
    },
    {
        id: 3,
        name: "Smith",
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque reiciendis inventore iste ratione ex alias quis magni at optio",
        img: "https://picsum.photos/103/103",
    },
];

const Comment = () => {

    return (
        <>
            <div data-aos="fade-up" data-aos-duration="300" className="py-10">
                <div className="container">

                    <div className="text-center mb-20 max-w-[400px] mx-auto">

                        <h1 className="text-4xl p-2 font-bold">Comments</h1>

                    </div>

                    <div data-aos="zoom-in"
                        data-aos-duration="300"
                        className="flex flex-row items-center justify-center gap-4 mb-12 max-w-[900px] max-h-[150px] mx-auto " >
                        {CommentData.map(({ id, name, text, img }) => {
                            return (
                                <div key={id} className="my-4">
                                    <div className="flex flex-col justify-center items-center gap-2 text-center shadow-lg p-2 mx-4 rounded-xl dark:bg-gray-700 bg-primary/10 relative">
                                        <img
                                            src={img}
                                            alt=""
                                            className="rounded-full block mx-auto"
                                        />
                                        <h1 className="text-xl font-bold">{name}</h1>
                                        <p className="text-gray-400 text-[12px]">{text}</p>

                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </>
    )
}

export default Comment
