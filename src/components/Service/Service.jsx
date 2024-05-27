import React from 'react'

const Service = () => {
    return (
        <div className='flex flex-row justify-center py-20 items-center bg-slate-950'>
            <div className=" flex flex-col md:flex-row sm:flex-row justify-center items-center container gap-10">
                <div className="relative w-1/2">
                    <video autoPlay loop muted className="w-full">
                        <source src="/Marketing.mp4" type="video/mp4" />
                        Your browser does not support the video tag.
                    </video>
                    <button className="servicebutton text-black py-2 px-4 rounded absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                        Digital Marketing
                    </button>
                </div>
                <div className="relative w-1/2">
                    <video autoPlay loop muted className="w-full">
                        <source src="/Website.mp4" type="video/mp4" />
                        Your browser does not support the video tag.
                    </video>
                    <button className="servicebutton text-black py-2 px-4 rounded absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                        Technology & Web
                    </button>
                </div>

            </div>

        </div>)
}

export default Service