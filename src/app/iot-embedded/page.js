import Footer from '@/components/Footer/Footer'
import Header from '@/components/Header/Header'
import React from 'react'
import Image from 'next/image';
import Ourwork from "@/components/Ourwork/Ourwork";
import Need from '@/components/Need/Need';
import Tech from '@/components/techservice/tech';


const page = () => {
    const cardsData = [
  {
    title: 'Card Title 1',
    description: 'Using Lorem ipsum to focus attention on graphic elements in a webpage design proposal · One of the earliest examples of the Lorem ipsum placeholder text on 1960s advertising...',
  },
  {
    title: 'Card Title 2',
    description: 'Using Lorem ipsum to focus attention on graphic elements in a webpage design proposal · One of the earliest examples of the Lorem ipsum placeholder text on 1960s advertising...',
  },
  {
    title: 'Card Title 3',
    description: 'Using Lorem ipsum to focus attention on graphic elements in a webpage design proposal · One of the earliest examples of the Lorem ipsum placeholder text on 1960s advertising...',
  },
];

  return (
      <>
      
          <Header />
          <section className="bg-slate-950 py-16 ">
                <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex flex-col md:flex-row sm:flex-col items-center gap-10">
                        {/* First Column */}
                        <div className="   w-full md:w-1/2 sm:w-1/2">
                            <h1 className="   we">IOT & 

                            </h1><br></br>
                            <h1 className='glassfrog'>Embedded</h1>
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
          <section className="bg-white py-16 ">
              <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
                   <div className="flex flex-col justify-center text-center items-center">
                            <h2 className="about font-extrabold text-slate-950 mb-4">
                                BALANCING DIGITAL ACCESS AND TECHNICAL ABILITIES WITH ARTIFICIAL INTELLIGENCE  
                            </h2>
                            <p className="text-slate-950 mb-6">
Our approach to businesses is very simple. We combine our passion for technicalities with digital marketing to create a virtual experience that drives engagement for you. Our services in Website Design, Development, Advertising, Search Engine Optimisation, Content Marketing, Social Media Management, and Graphic Design are intricately loomed to suit your expectations.                            </p>

                        </div>
          <div className="flex justify-center py-10  ">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {cardsData.map((card, index) => (
          <div key={index} className="bg-gradient-to-l from-slate-300 to-slate-100 text-slate-600 border border-slate-300 p-4 gap-4 rounded-lg shadow-md">
            <div className="col-span-2 text-lg font-bold capitalize rounded-md">
              {card.title}
            </div>
            <div className="col-span-2 rounded-md">
              {card.description}
            </div>
            <div className="col-span-1">
              <button className="rounded-md  bg-slate-300 hover:bg-slate-600 hover:text-slate-200 duration-300 p-2"><a className='flex' href='/contact'>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-external-link">
                  <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                  <polyline points="15 3 21 3 21 9"></polyline>
                  <line x1="10" y1="14" x2="21" y2="3"></line>
                </svg> Contact Us</a>
              </button>
            </div>
          </div>
        ))}
      </div>
                  </div>
          </div>
          </section>
          
        <Tech/>
         
          <Need/>
          <Footer/>
      
      </>
  )
}

export default page