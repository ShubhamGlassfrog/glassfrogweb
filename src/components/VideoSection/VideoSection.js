"use client"
import React, { useState } from 'react';

const VideoSection = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const handlePlayButtonClick = () => {
        setIsModalOpen(true);
    };

    const handleCloseModal = () => {
        setIsModalOpen(false);
    };

    return (
        <div className="relative w-full h-screen overflow-hidden">
            <video
                className="absolute top-0 left-0 w-full h-full object-cover"
                src="/glassfrogweb.mp4"
                autoPlay
                loop
                muted
            />
            <div className="absolute top-0 left-0 w-full h-full flex flex-col items-center justify-center bg-black bg-opacity-70">
                <div className="container relative flex flex-col  justify-center h-full">
                    <h1 className="text-white vhead font-bold mb-4">
                        THRIVING BUSINESSES WITH TECHNICAL EXCELLENCE
                    </h1>

                    <div className="flex gap-5">
                        <button className="servicebutton1  ">Marketing/Social</button>
                        <button className="servicebutton">Technology/Website</button>
                    </div>
                </div>
            </div>

            <button
                className="absolute bottom-20 left-5 bg-white text-black p-3 rounded-full shadow-lg"
                onClick={handlePlayButtonClick}
            >
                ▶
            </button>

            {isModalOpen && (
                <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50">
                    <div className="relative bg-white rounded-lg p-4 w-full max-w-3xl">
                        <button
                            className="absolute top-2 right-2 text-black"
                            onClick={handleCloseModal}
                        >
                            ✖
                        </button>
                        <video
                            className="w-full h-full object-cover"
                            src="/glassfrogweb.mp4"
                            controls
                            autoPlay
                        />
                    </div>
                </div>
            )}
        </div>
    );
};

export default VideoSection;
