import React from 'react'
import { FaArrowRight } from 'react-icons/fa';
import Image from 'next/image';

const Letsgo = () => {
    return (
        <>

            <section className="bg-slate-950 py-16 pt-48 pb-48">
                <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="">
                        {/* First Column */}
                        <div className="flex flex-col justify-center text-center items-center">
                            <h4 className='ready'>READY</h4>
                            <h2 className="letsgo mb-4">
                                LET’S GO!
                            </h2>
                            <p className="text-white mb-6">
                                Let’s discuss your goals and challenges over a quick email or call.<br></br>
                                Enter your details and we’ll be in touch!                            </p>
                            <button className="enquire ">Enquire Now!</button>

                        </div>

                        {/* Second Column */}

                    </div>
                </div>
            </section>

        </>
    )
}

export default Letsgo