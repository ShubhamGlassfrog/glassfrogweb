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
                            <h1 className="   we">Website

                            </h1><br></br>
                            <h1 className='glassfrog'>Development</h1>
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
        
          <Need/>
          <Footer/>
      
      </>
  )
}

export default page