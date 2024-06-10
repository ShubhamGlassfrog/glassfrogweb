import Footer from '@/components/Footer/Footer'
import Header from '@/components/Header/Header'
import React from 'react'
import Image from 'next/image';
import Ourwork from "@/components/Ourwork/Ourwork";
import Need from '@/components/Need/Need';



const page = () => {
  return (
      <>
      
          <Header />
          <section className="bg-slate-950 py-16 ">
                <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex flex-col md:flex-row sm:flex-col items-center gap-10 items-center">
                        {/* First Column */}
                        <div className="   w-full md:w-1/2 sm:w-1/2">
                            <h1 className="   we">Digital

                            </h1><br></br>
                            <h1 className='glassfrog'>Marketing</h1>
                            <p className="text-white mb-6">
              Glassfrog explores marketing and technical excellence. We are committed to both the creative and technical aspects of marketing. By incorporating AI, we offer advanced marketing solutions that wouldn't be possible with traditional methods. With AI we analyze vast amounts of data to gain deep insights into your target audience. We believe that personalized and relevant marketing messages lead to improved customer engagement and satisfaction.                
              
              </p>

                        </div>

                        {/* Second Column */}
                        <div className="flex space-y-8 justify-center gap-16 pt-14 items-center w-full md:w-1/2 sm:w-1/2">


                            <Image src="/service.webp" alt="Logo 2" width={1800} height={1800} />



                        </div>
                    </div>
                </div>
          </section>
         
          
          <section className="bg-slate-950 py-16 pt-32 px-4 sm:px-6 lg:px-8">
                <div className="max-w-screen-xl mx-auto  py-4 sm:py-6 lg:py-8 ">
                    <div className="flex flex-col md:flex-row sm:flex-row gap-10">
                        {/* First Column */}
                        <div className="flex flex-col w-full md:w-1/2 sm:w-1/2">
                            <h2 className="about font-extrabold text-white mb-4">
                             MARKETING
                          </h2>
                          <p className='text-white mb-6 flex items-center'>Our digital marketing team is highly skilled in data-driven strategies for creative campaigns across PPC, social media, and influencer marketing. They constantly explore new trends and deliver high-quality results to drive business growth for clients.</p>
                            <p className="text-white mb-6 flex items-center"><a className='flex items-center gap-5' href='/services'>
                               MARKETING SERVICES                          <svg width="160" height="14" viewBox="0 0 160 14" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M151.9 12.293L153.31 13.707L160 6.99997L153.31 0.292969L151.9 1.70697L156.182 5.99997H0V7.99997H156.182L151.9 12.293Z" fill="#ffffff"></path></svg> </a></p>

                      </div>
                       <div className="flex flex-col w-full md:w-1/2 sm:w-1/2">
                            
                          <ul className='flex flex-col gap-5'>
                              <li className=' serli' ><a href='/social-media-advertising'>01. Social Media Advertising<svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="2"
                stroke="currentColor"
                className="ml-2 h-4 w-4 transition-transform duration-300 transform group-hover:translate-x-1"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg></a></li>
                              <li className=' serli'><a href='/pay-per-click-ads'>02. Pay Per Click Ads<svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="2"
                stroke="currentColor"
                className="ml-2 h-4 w-4 transition-transform duration-300 transform group-hover:translate-x-1"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg></a></li>
                            <li className=' serli'><a href='/search-engine-optimisation'>03. Search Engine Optimisation<svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="2"
                stroke="currentColor"
                className="ml-2 h-4 w-4 transition-transform duration-300 transform group-hover:translate-x-1"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg></a></li>
                                                          <li className=' serli'><a href='/email-marketing'>04. Email Marketing<svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="2"
                stroke="currentColor"
                className="ml-2 h-4 w-4 transition-transform duration-300 transform group-hover:translate-x-1"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg></a></li>

                              
                                                           


                      </ul>
                      
                      </div>

                        {/* Second Column */}

                    </div>
                </div>
          </section>
          <Ourwork />
          <Need/>
          <Footer/>
      
      </>
  )
}

export default page