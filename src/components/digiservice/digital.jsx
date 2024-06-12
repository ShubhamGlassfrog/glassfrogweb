import React from 'react'
import sma from "../../../public/socialmediaadvertising.png"
import ppc from "../../../public/payperclickads.png"
import emm from "../../../public/emailmarketing.png"

import seo from "../../../public/searchengineoptimization.png"
import Image from 'next/image';






const digital = () => {
    const cardsData = [
  {
        title: 'Social Media Advertising',
    image:sma,
    description: "Social media is the ultimate platform for real-time engagement with your target audience. We craft strategic campaigns that instantly get you seen, heard, and connected. Our team implement strategies to boost web traffic, engagement, and lead conversion rates.",
  },
  {
    title: 'Pay Per Click Ads',
    image:ppc,
    description: "Our marketing agency makes Pay-Per-Click ads easy and effective. We create ads that attract potential customers to your website when they search for products or services like yours. We ensure you get the best results for your money, helping you attract new customers fast.",
  },
  {
    title: 'Search Engine Optimisation',
    image:seo,
    description: "We specialise in SEO which will help your website show up higher in search results when people look for things related to your business. This will lead to more customers for you. We use smart techniques like choosing the right keywords, making your website easy to navigate, and getting other websites to link to yours. ",
      },
  {
    title: 'Email Marketing',
    image:emm,
    description:"Email marketing is a super effective way to connect with your customers. We send out emails to people who are interested in your business, telling them about your latest products, promotions, or news. It's like having a direct line to your customers' inboxes. We create compelling email campaigns that delight the audience and encourage them to take action, whether it's making a purchase, subscribing to a service, or simply keeping in touch.",
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
          <div key={index} className="card bg-gradient-to-l from-slate-300 to-slate-100 text-slate-600 border border-slate-300  gap-4 rounded-lg shadow-md">
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