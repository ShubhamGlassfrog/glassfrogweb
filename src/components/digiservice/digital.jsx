import React from 'react'
import sma from "../../../public/socialmediaadvertising.png"
import ppc from "../../../public/payperclickads.png"
import seo from "../../../public/searchengineoptimization.png"
import em from "../../../public/emailmarketing.png"
import Image from 'next/image';






const digital = () => {
    const cardsData = [
  {
        title: 'Social Media Advertising',
    image:sma,
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.',
  },
  {
    title: 'Pay Per Click Ads',
    image:ppc,
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.',
  },
  {
    title: 'Search Engine Optimisation',
    image:seo,
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.',
      },
  {
    title: 'Email Marketing',
    image:em,
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.',
  },
];
  return (
      <>
       <section className="bg-white py-16 ">
        <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col justify-center text-center items-center">
                            <h2 className="about font-extrabold text-slate-950 mb-4">
                                Full spectrum of services, for all your needs.
                            </h2>
                            
                        </div>
           <div className="flex justify-center py-10 ">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
        {cardsData.map((card, index) => (
          <div key={index} className="card bg-gradient-to-l from-slate-300 to-slate-100 text-slate-600 border border-slate-300 p-4 gap-4 rounded-lg shadow-md">
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

export default digital