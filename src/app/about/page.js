"use client"
import Footer from '@/components/Footer/Footer'
import Header from '@/components/Header/Header'
import React, { useState } from 'react';
import Image from 'next/image';
import Need from '@/components/Need/Need';


const page = () => {
   
    return (
        <>
            <Header />

            <section className="relative w-full h-screen bg-cover bg-center" style={{ backgroundImage: "url('/client1.avif')" }}>
                <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50">
                    <div className="text-center text-white">
                        <h1 className="   we">WE'RE
                        </h1>
                        <h1 className='glassfrog'>GLASSFROG</h1>
                    </div>
                </div>
            </section>
            <section className="bg-slate-950 py-16 pt-32">
                <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="">
                        {/* First Column */}
                        <div className="flex flex-col justify-center text-center items-center">
                            <h2 className="about font-extrabold text-white mb-4">
                                EXPLORE MARKETING AND TECHNICAL EXCELLENCE WITH
                                ARTIFICIAL INTELLEGENCE EXPERTISE
                            </h2>
                            <p className="text-white mb-6">
                                Create your own channel of online presence on different platforms with meticulous attention to website trends, digital strategies, technical ease, graphic elegance, and much more. Our adept team of market professionals is equipped with the latest skills to hep you navigate through technical differences and devise a personalized approach to marketing strategies.
                            </p>

                        </div>

                        {/* Second Column */}

                    </div>
                </div>
            </section>
            <section className=" bg-slate-950 bg-cover bg-center flex items-center imgbc">
                <div className="container mx-auto px-4 py-8">
                    <video
                        className="w-full top-0 left-0  object-cover"
                        src="/glassfrogweb.mp4"
                        autoPlay
                        controls
                        loop
                        muted
                    /></div>
            </section>
            <section className="bg-slate-950 py-16 pt-32">
                <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex flex-col md:flex-row sm:flex-col gap-10">
                        {/* First Column */}
                        <div className="  justify-center text-center items-center w-full md:w-1/2 sm:w-1/2">
                            <h1 className="   we">HOW
                            </h1><br></br>
                            <h1 className='glassfrog'>IT STARTED</h1>
                            <p className="text-white mb-6">
                                In 2014, Anthony and Tom decided to start their own agency – Make. Despite having no budget, the two friends were full of ambition and determined to make their agency a success, by delivering cutting edge, digital-first creative services.<br></br><br></br>

                                They worked tirelessly to secure their first few clients, often putting in long hours to provide top-quality work. As word spread, more and more clients began to hire them, and the business began to grow.                            </p>

                        </div>

                        {/* Second Column */}
                        <div className="flex space-y-8 justify-center gap-16 pt-14 items-center w-full md:w-1/2 sm:w-1/2">


                            <Image src="/about.jpeg" alt="Logo 2" width={1800} height={1800} />



                        </div>
                    </div>
                </div>
            </section>
            <section className="bg-slate-950 py-16 ">
                <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex flex-col md:flex-row sm:flex-col gap-10">
                        <div className="flex space-y-8 justify-center gap-16 pt-14 items-center w-full md:w-1/2 sm:w-1/2">


                            <Image src="/about.jpeg" alt="Logo 2" width={1800} height={1800} />



                        </div>
                        {/* First Column */}
                        <div className="  justify-center text-center items-center w-full md:w-1/2 sm:w-1/2">
                            <h1 className="   we">HOW 
                            </h1><br></br>
                            <h1 className='glassfrog'>IT'S GOING</h1>
                            <p className="text-white mb-6">
                                In 2014, Anthony and Tom decided to start their own agency – Make. Despite having no budget, the two friends were full of ambition and determined to make their agency a success, by delivering cutting edge, digital-first creative services.<br></br><br></br>

                                They worked tirelessly to secure their first few clients, often putting in long hours to provide top-quality work. As word spread, more and more clients began to hire them, and the business began to grow.                            </p>

                        </div>

                        {/* Second Column */}
                        
                    </div>
                </div>
            </section>
             <section className="bg-slate-950 py-16 ">
                <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
             <div className="flex flex-col md:flex-row sm:flex-row space-y-8 justify-center gap-16 pt-14 items-center">

                        <div className="flex justify-center">
                            <Image className='alogo' src="/a2.png" alt="Logo 2" width={200} height={100} />
                        </div>
                        <div className="flex justify-center">
                            <Image className='alogo' src="/Union.svg" alt="Logo 3" width={200} height={100} />
                        </div>
                        <div className="flex justify-center">
                            <Image className='alogo' src="/awards.svg" alt="Logo 3" width={200} height={100} />
                        </div>
                        <div className="flex justify-center">
                            <Image className='alogo' src="/a3.png" alt="Logo 3" width={200} height={100} />
                        </div>
                    </div>
                </div>
            </section>
            <section className="bg-slate-950 py-16 pt-32 px-4 sm:px-6 lg:px-8">
                <div className="max-w-screen-xl mx-auto  py-4 sm:py-6 lg:py-8 lines">
                    <div className="">
                        {/* First Column */}
                        <div className="flex flex-col ">
                            <h2 className="about font-extrabold text-white mb-4">
                              WANT TO LEARN MORE<br></br>
ABOUT WHAT WE DO?
                            </h2>
                            <p className="text-white mb-6 flex items-center"><a className='flex items-center gap-5' href='/services'>
OUR SERVICES                           <svg width="160" height="14" viewBox="0 0 160 14" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M151.9 12.293L153.31 13.707L160 6.99997L153.31 0.292969L151.9 1.70697L156.182 5.99997H0V7.99997H156.182L151.9 12.293Z" fill="#ffffff"></path></svg> </a></p>

                        </div>

                        {/* Second Column */}

                    </div>
                </div>
            </section>
            <Need/>
           
            <Footer />
        </>
    )
}

export default page