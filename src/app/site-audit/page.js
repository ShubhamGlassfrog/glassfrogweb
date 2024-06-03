"use client"
import Footer from '@/components/Footer/Footer'
import Header2 from '@/components/Header2/Header2'
import React, { useState } from 'react';
import Image from 'next/image';


const page = () => {

    return (
        <>
            <Header2 />
             
            <div className="relative w-full h-screen overflow-hidden">
            <img
                className="absolute top-0 left-0 w-full h-full object-cover"
                src="/siteaudit.png"
               
            />
            <div className="absolute top-0 left-0 w-full h-full flex flex-col items-center justify-center bg-black bg-opacity-70">
                    <div className="container relative flex items-center  justify-center h-full gap-8">
                        <div className='w-full md:w-1/2 sm:w-1/2'>
                    <h1 className="text-white shead font-bold mb-4">
                        THRIVING BUSINESSES WITH TECHNICAL EXCELLENCE
                    </h1></div>
                        <div className='w-full md:w-1/2 sm:w-1/2'>
                            <h3 className='text-white' style={{fontSize:"30px", fontWeight:"700"}}>How are your website really
                                performing?</h3>
                            <p className='text-white' >Get an extensive audit finished within
2 days for free. No strings attached.</p>
                            <form action="#" class="space-y-8">
                                <div>
                                    <label htmlFor="name" className="block mb-2 text-sm font-medium text-white">Your Name</label>
        <input
          type="text"
          id="name"
          
          className="shadow-sm bg-white border border-white text-black text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5"
          placeholder="John Doe"
          required
        />
                                </div>
          <div>
              <label for="email" class="block mb-2 text-sm font-medium text-white ">Your email</label>
              <input type="email" id="email" class="shadow-sm bg-gray-50 border border-gray-300 text-black text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 " placeholder="name@flowbite.com" required/>
                                </div>
                                <div>
                                   
        <label htmlFor="phone" className="block mb-2 text-sm font-medium text-white">Phone Number</label>
        <input
          type="tel"
          id="phone"
         
          className="shadow-sm bg-white border border-white text-black text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5"
          placeholder="+1234567890"
          required
        />
                                </div>
          <div>
              <label for="subject" class="block mb-2 text-sm font-medium text-white ">Website</label>
              <input type="text" id="subject" class="block p-3 w-full text-sm text-black bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 " placeholder="Let us know how we can help you" required/>
          </div>
          
          <button type="submit" class="py-3 px-5 text-sm font-medium text-center text-white rounded-lg bg-primary-700 sm:w-fit hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">Send message</button>
      </form>
  
</div>
                    
                </div>
            </div>



            
        </div>
            <Footer />
        </>
    )
}

export default page