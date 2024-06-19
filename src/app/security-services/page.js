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
    title: 'Cloud Security',
    description: 'To ensure that your cloud-based infrastructure is completely secure and accomplished, our comprehensive cloud security solutions will hold the fort for you at all times. ',
  },
  {
    title: 'DevSecOps',
    description: 'We ensure the application of Development, Security and Operations to integrate security and relative measures at every phase of your software development for a seamlessly encrypted system. ',
  },
  {
    title: 'Security Code Review',
    description: 'A very prominent part of the Software Development Life Cycle SDLC, our Security Code Review shall ensure that all the security vulnerabilities in your software are completely scrapped out. ',
  },
];

  return (
    <>
      <head>
        <title>Network Security in Networking | Cyber Security Companies</title>
<meta name="description" content="Network security in networking protects data integrity and access. Cybersecurity companies and computer security companies offer solutions. Cyber security in companies ensures corporate data safety."/>
      </head>
      
          <Header />
          <section className="bg-slate-950 py-16 ">
                <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex flex-col md:flex-row sm:flex-col items-center gap-10">
                        {/* First Column */}
                        <div className="   w-full md:w-1/2 sm:w-1/2">
                            <h1 className="   we">Security

                            </h1>
                            <span className='glassfrog'>Services</span>
                            <p className="text-white mb-6">
                               Create servers and technical infrastructure that is secure, encrypted, and dependable with Glassfrog with complete trust and understanding supported by thorough assistance.    </p>

                        <p className="text-white mb-6 flex items-center"><a className='flex items-center gap-5' href='/technology'>
                              BACK TO SERVICES                          <svg width="160" height="14" viewBox="0 0 160 14" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M8.09999 12.293L6.68999 13.707L0 6.99997L6.68999 0.292969L8.09999 1.70697L3.81799 5.99997H160V7.99997H3.81799L8.09999 12.293Z" fill="#ffffff"/>
</svg>
 </a></p> </div>

                        {/* Second Column */}
                        <div className="flex space-y-8 justify-center gap-16 pt-14 items-center w-full md:w-1/2 sm:w-1/2">


                            <Image src="/securityservices.png" alt="security-service" width={1800} height={1800} />



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
Building systems and having security threats have been a common apprehension. But, with services that are encrypted and fully secure, the trust multiplies. This has been and is our prime objective as we deliver services in the technical domain. We ensure network, data, and software security with our seamless solutions that are executed with sheer command.  </p>
                       </div>
          <div className="flex justify-center py-10  ">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {cardsData.map((card, index) => (
          <div key={index} className="text-white bg-[#020617] border-slate-300 p-4 gap-4 rounded-lg shadow-md">
            <div className="col-span-2 text-lg font-bold capitalize rounded-md pb-4">
              {card.title}
            </div>
            <div className="col-span-2 rounded-md pb-4">
              {card.description}
            </div>
            <div className="col-span-1">
              <button className="rounded-md   hover:text-slate-200 duration-300 p-2"><a className='flex' href='/contact'>
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