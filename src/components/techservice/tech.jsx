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
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.',
  },
  {
    title: 'Mobile Application',
    image:mobileapplication,
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.',
  },
  {
    title: 'Web Application',
    image:webapplication,
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.',
        },
   {
     title: 'AI Application',
     image:aiapplication,
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.',
  }, {
     title: 'Security Services',
     image:securityservices,
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.',
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