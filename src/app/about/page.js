"use client"
import Footer from '@/components/Footer/Footer'
import Header from '@/components/Header/Header'
import React, { useState } from 'react';
import Image from 'next/image';
import Need from '@/components/Need/Need';


const page = () => {
   
    return (
        <>
            <head>
        <title>About Us - Glassfrog Technologies</title>
<meta name="description" content="Glassfrog offers specialised solutions in Website Development, Mobile Application, Digital Marketing, SEO, SMM, and more. Learn everything about us here."/>
      </head>
            <Header />

            <section className="relative w-full h-screen bg-cover bg-center" style={{ backgroundImage: "url('/client1.avif')" }}>
                <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50">
                    <div className="text-center text-white">
                        <h1 className="   we">WE'RE <span className='glassfrog'>GLASSFROG</span>
                        </h1>
                        
                    </div>
                </div>
            </section>
            <section className="bg-slate-950 py-16 pt-32">
                <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="">
                        {/* First Column */}
                        <div className="flex flex-col justify-center text-center items-center">
                            <h2 className="about font-extrabold text-white mb-4">
                                BALANCING DIGITAL ACCESS AND TECHNICAL ABILITIES WITH ARTIFICIAL INTELLIGENCE  
                            </h2>
                            <p className="text-white mb-6">
Our approach to businesses is very simple. We combine our passion for technicalities with digital marketing to create a virtual experience that drives engagement for you. Our services in Website Design, Development, Advertising, Search Engine Optimisation, Content Marketing, Social Media Management, and Graphic Design are intricately loomed to suit your expectations. 
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
                                The journey of Glassfrog Technologies began in the year 2021. Fueled by a passion for technical excellence, the Founder, Mr. Amit Bajaj exuded his experience to lay the foundation of a website development and design firm that assisted clients to find the aptly designed platform to market their businesses. <br></br><br></br>

With time, the digital marketing industry induced the sustaining passion for technology as innovation was explored beyond the limitations of traditional website marketing. With growing trends in social media platforms and digital channels, the team developed strategies with an urge to deliver branding outlooks to businesses, big and small. 

</p>

                        </div>

                        {/* Second Column */}
                        <div className="flex space-y-8 justify-center gap-16 pt-14 items-center w-full md:w-1/2 sm:w-1/2">


                            <Image src="/about.jpeg" alt="Glassfrohtech" width={1800} height={1800} />



                        </div>
                    </div>
                </div>
            </section>
            <section className="bg-slate-950 py-16 ">
                <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex flex-col md:flex-row sm:flex-col gap-10">
                        <div className="flex space-y-8 justify-center gap-16 pt-14 items-center w-full md:w-1/2 sm:w-1/2">


                            <Image src="/about.jpeg" alt="Glassfrohtech" width={1800} height={1800} />



                        </div>
                        {/* First Column */}
                        <div className="  justify-center text-center items-center w-full md:w-1/2 sm:w-1/2">
                            <h1 className="   we">HOW 
                            </h1><br></br>
                            <h1 className='glassfrog'>IT'S GOING</h1>
                            <p className="text-white mb-6">
                            
Presently, Glassfrog Technologies works in two directions. The first and foremost is Website Development and Design. With the growing employability of Artificial intelligence, the team has developed their adaptability to come up with very innovative solutions to integrate AI to produce promising results. <br></br><br></br>

The second and very creative side of Glassfrog deals with the Virtual Marketing domain. The marketing team deals with Social Media Management, Marketing, Search Engine Optimisation, and Advertising, and works in the Graphic Design arena. One of the notable things about the marketing team is the ability to understand and personalise the strategies according to the suitability of the trends and the brand identities. This significant understanding has been a pivotal point in the sustained growth of the company. 
   
                            </p>

                        </div>

                        {/* Second Column */}
                        
                    </div>
                </div>
            </section>
             <section className="bg-slate-950 py-16 ">
                <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
             <div className="flex flex-col md:flex-row sm:flex-row space-y-8 justify-center gap-16 pt-14 items-center">

                        <div className="flex justify-center">
                            <Image className='alogo' src="/a2.png" alt="Glassfrohtech" width={200} height={100} />
                        </div>
                        <div className="flex justify-center">
                            <Image className='alogo' src="/Union.svg" alt="Glassfrohtech" width={200} height={100} />
                        </div>
                        <div className="flex justify-center">
                            <Image className='alogo' src="/awards.svg" alt="Glassfrohtech" width={200} height={100} />
                        </div>
                        <div className="flex justify-center">
                            <Image className='alogo' src="/a3.png" alt="Glassfrohtech" width={200} height={100} />
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
                            <p className="text-white mb-6 flex items-center">
  <a className='flex items-center gap-5 group' href='/services'>
    OUR SERVICES
    <svg
      className="transform transition-transform duration-300 group-hover:translate-x-2"
      width="160"
      height="14"
      viewBox="0 0 160 14"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M151.9 12.293L153.31 13.707L160 6.99997L153.31 0.292969L151.9 1.70697L156.182 5.99997H0V7.99997H156.182L151.9 12.293Z"
        fill="#ffffff"
      ></path>
    </svg>
  </a>
</p>

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