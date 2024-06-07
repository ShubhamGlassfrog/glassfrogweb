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
                    <div className="flex flex-col md:flex-row sm:flex-col items-center gap-10">
                        {/* First Column */}
                        <div className="   w-full md:w-1/2 sm:w-1/2">
                            <h1 className="   we">OUR

                            </h1><br></br>
                            <h1 className='glassfrog'>SERVICES</h1>
                            <p className="text-white mb-6">
                               We execute effective strategies that drive traffic, engagement and lead conversion across the web: from websites, organic search, paid media and social advertising to email marketing and display campaigns.   </p>

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
                              <li className=' serli' ><a href='/social-media-advertising'>Social Media Advertising</a></li>
                              <li className=' serli'><a href='/pay-per-click-ads'>Pay Per Click Ads</a></li>
                            <li className=' serli'><a href='/search-engine-optimisation'>Search Engine Optimisation</a></li>
                                                          <li className=' serli'><a href='/email-marketing'>Email Marketing</a></li>

                              
                                                           


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