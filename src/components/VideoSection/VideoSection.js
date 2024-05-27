import React from 'react'

const VideoSection = () => {
    return (
        <div className="relative w-full h-screen overflow-hidden">
            <video
                className="absolute top-0 left-0 w-full h-full object-cover"
                src="/glassfrogweb.mp4"
                autoPlay
                loop
                muted
            />
            <div className="absolute top-0 left-0 w-full h-full flex flex-col items-center justify-center bg-black bg-opacity-50">
                <div className="container relative flex flex-col items-center justify-center h-full">
                    <h1 className="text-white text-4xl md:text-6xl font-bold mb-4 text-center">
                        DIGITAL AGENCY WITH A PASSION FOR MARKETING
                    </h1>
                    <p className="text-white text-lg md:text-2xl text-center">
                        We're glad to have you here. Explore and enjoy!
                    </p>
                    <div className='flex gap-5'>
                        <button className="servicebutton mt-5 text-black p-4 rounded">Marketing/ Social</button>
                        <button className="servicebutton mt-5 text-black p-4 rounded">Technology/Website</button>

                    </div>
                </div>
            </div>
        </div>

    )
}

export default VideoSection