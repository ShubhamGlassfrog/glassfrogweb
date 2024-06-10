import Image from 'next/image';
import React from 'react'
import uxui from "../../../public/uiuxx.png"
import mobileapplication from "../../../public/mobileapplication.png"
import webapplication from "../../../public/webapplication.png"
import aiapplication from "../../../public/aiapplication.png"
import securityservices from "../../../public/securityservices.png"
import iot from "../../../public/iot.png"





const tech = () => {
    const cardsData = [
  {
        title: 'UX/Ui Design',
    image:uxui,
    description: 'Building personalised and highly consumer-centric experiences to create meaningful and uncomplicated User Experiences is what we strive for, for our clients! ',
  },
  {
    title: 'Mobile Application',
    image:mobileapplication,
    description: 'Grow your outreach to the fingertips of your brand’s target audience by building a competent mobile application with Glassfrog’s intelligent app solutions.',
  },
  {
    title: 'Web Application',
    image:webapplication,
    description: 'Connect with your customers conveniently and securely by delivering the information and services remotely in the most opportunely way possible with Glassfrog’s proficient Web Development Solutions. ',
        },
   {
     title: 'AI Application',
     image:aiapplication,
    description: 'In order to ensure perfect execution, team at Glassfrog Technologies is much well versed with Artificial Intelligence. We induce AI algorithm to inspire automation in myriad of domains, resulting in unending success. ',
  }, {
     title: 'Security Services',
     image:securityservices,
    description: 'Create servers and technical infrastructure that is ecure, encrypted, and dependable with Glassfrog with complete trust and understanding supopported by thorough assistance.',
  }, {
     title: 'IOT & Embedded',
    image:iot,
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.',
  },
];
  return (
      <>
       <section className="bg-white py-16 ">
        <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="about font-extrabold text-slate-950 mb-4 text-center">
Full spectrum of services, for all your needs.                            </h2>
           <div className="flex justify-center py-10 ">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {cardsData.map((card, index) => (
          <div key={index} className="card w-60 bg-gradient-to-l from-slate-300 to-slate-100 text-slate-600 border border-slate-300 p-4 gap-4 rounded-lg shadow-md">
            <Image className='cardimg' src={card.image}/>
            <div className="card__content">
              <p className="card__title text-lg font-bold mb-2">{card.title}</p>
              <p className="card__description">{card.description}</p>
            </div>
          </div>
        ))}
      </div>
                  </div>
                  </div></section>
      
      </>
  )
}

export default tech