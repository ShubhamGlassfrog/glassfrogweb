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
                             TECHNOLOGY
                          </h2>
                          <p className='text-white mb-6 flex items-center'>Our in-house tech team work as a fully integrated department within your team to discover, design, develop and deliver bespoke and best-in-class digital products.</p>
                            <p className="text-white mb-6 flex items-center"><a className='flex items-center gap-5' href='/services'>
                               WEB SERVICES                          <svg width="160" height="14" viewBox="0 0 160 14" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M151.9 12.293L153.31 13.707L160 6.99997L153.31 0.292969L151.9 1.70697L156.182 5.99997H0V7.99997H156.182L151.9 12.293Z" fill="#ffffff"></path></svg> </a></p>

                      </div>
                       <div className="flex flex-col w-full md:w-1/2 sm:w-1/2">
                            
                         <ul className='flex flex-col gap-5'>
                              <li className=' serli' ><a href='/ux-ui-design'>UX/Ui Design</a></li>
                              <li className=' serli'><a href='/mobile-application'>Mobile Application</a></li>
                              <li className=' serli'><a href='/web-application'>Web Application</a></li>
                              <li className=' serli'><a href='/ai-application'>AI Application</a></li>
                              <li className=' serli'><a href='/security-services'>Security Services</a></li>
                              <li className=' serli'><a href='/iot-embedded'>IOT & Embedded</a></li>
                                                            


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