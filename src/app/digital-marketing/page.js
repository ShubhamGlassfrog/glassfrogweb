'use client'
import Head from 'next/head'; // Import the Head component from next/head
import Footer from '@/components/Footer/Footer'
import Header from '@/components/Header/Header'
import React, { useEffect, useState } from 'react'
import Image from 'next/image';
import Ourwork from "@/components/Ourwork/Ourwork";
import Need from '@/components/Need/Need';

const Page = () => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  return (
      <>
        <head> {/* Use Head from next/head */}
          <title>Digital Marketing Agency London - Digital Ads Agency UK</title>
          <meta name="description" content=" Digital marketing and advertising agency in London that is also an SEO London Agency specializing in Lead Generation, Advertising, Website Creation, and more. "/>
          <meta property="og:url" content="https://www.glassfrogtech.com/digital-marketing"/>
          <meta property="og:type" content="website"/>
          <meta property="og:title" content="Expert Digital Marketing Agency in London & Ads Agency"/>
          <meta property="og:description" content="Looking for Digital Marketing Solutions that communicate your Brand Story to your clients? Connect with Glassfrog, top Digital Marketing Agency in London!"/>
          <meta property="og:image" content="https://www.glassfrogtech.com/_next/image?url=%2Fservice.webp&w=1920&q=75"/>
          <meta name="twitter:card" content="summary_large_image"/>
          <meta property="twitter:domain" content="glassfrogtech.com"/>
          <meta property="twitter:url" content="https://www.glassfrogtech.com/digital-marketing"/>
          <meta name="twitter:title" content="Expert Digital Marketing Agency in London & Ads Agency"/>
          <meta name="twitter:description" content="Looking for Digital Marketing Solutions that communicate your Brand Story to your clients? Connect with Glassfrog, top Digital Marketing Agency in London!"/>
          <meta name="twitter:image" content="https://www.glassfrogtech.com/_next/image?url=%2Fservice.webp&w=1920&q=75" />
        </head>

        <Header />
        <main>
          <section className="bg-slate-950 py-16">
            <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="flex flex-col md:flex-row sm:flex-col items-center gap-10">
                <div className="w-full md:w-1/2 sm:w-1/2">
                  <h1 className="we">Digital 
                    <span className='glassfrog'>Marketing</span>
                  </h1>
                  <p className="text-white mb-6">
The evolution of Digital Marketing has been demanding in the past years. Earlier, the marketing methods were not engaging and productive. Now, with the rise of the Internet, digital marketing is the modern form of marketing that watches consumer behavior, business growth, and global economies. Modern marketing uses different methods to reach more audiences with Search Engine Optimisation (SEO) for page ranking and social media marketing on platforms like Facebook, Instagram, LinkedIn, and Twitter. The future of marketing is Artificial Intelligence, machine learning, and Virtual Reality. Glassfrog Technologies is dedicated to transforming your brand on a personal level and strategizing properly for success using futuristic technology with our expertise for success.                   </p>
                </div>

                <div className="flex space-y-8 justify-center gap-16 pt-14 items-center w-full md:w-1/2 sm:w-1/2">
  <video
    src="/service.mp4"
    alt="services"
    width="1800"
    height="1800"
    controls
    className="rounded-lg shadow-lg"
  />                </div>
              </div>
            </div>
          </section>
          
          <section className="bg-slate-950 py-16 pt-32 px-4 sm:px-6 lg:px-8">
            <div className="max-w-screen-xl mx-auto py-4 sm:py-6 lg:py-8 px-4 sm:px-6 lg:px-8">
              <div className="flex flex-col md:flex-row sm:flex-row gap-10">
                <div className="flex flex-col w-full md:w-1/2 sm:w-1/2">
                  <h2 className="about font-extrabold text-white mb-4">
                    MARKETING
                  </h2>
                  <p className='text-white mb-6 flex items-center'>
We are a team of experienced individuals who help your process of marketing quickly. We strategize in such a way that more audience and reach are targeted for your brand. We carry out different modes of marketing like Social Media Marketing, SEO, pay-per-click, and Email marketing. We ensure relationship-building and clear communication between our client and their audience. We practice new futuristic methods like paid advertising and influencer marketing to attract customers, get more sales, and build the brand.                  </p>
                  <p className="text-white mb-6 flex items-center">
                    <a className='flex items-center gap-5' href='/services'>
                      ALL SERVICES                          
                      <svg width="160" height="14" viewBox="0 0 160 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M151.9 12.293L153.31 13.707L160 6.99997L153.31 0.292969L151.9 1.70697L156.182 5.99997H0V7.99997H156.182L151.9 12.293Z" fill="#ffffff"></path>
                      </svg> 
                    </a>
                  </p>
                </div>
                
                <div className="flex flex-col w-full md:w-1/2 sm:w-1/2">
                  <ul className='flex flex-col gap-5'>
                    <li className='serli'><a href='/social-media-advertising'> Social Media Advertising
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" className="ml-2 h-4 w-4 transition-transform duration-300 transform group-hover:translate-x-1">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </a></li>
                    <li className='serli'><a href='/pay-per-click-ads'> Pay Per Click Ads
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" className="ml-2 h-4 w-4 transition-transform duration-300 transform group-hover:translate-x-1">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg></a>
                    </li>
                    <li className='serli'><a href='/search-engine-optimisation'> Search Engine Optimisation
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" className="ml-2 h-4 w-4 transition-transform duration-300 transform group-hover:translate-x-1">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg></a>
                    </li>
                    <li className='serli'><a href='/email-marketing'> Email Marketing
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" className="ml-2 h-4 w-4 transition-transform duration-300 transform group-hover:translate-x-1">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg></a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          <Ourwork />
          <Need/>
        </main>
        <Footer/>

        {isClient && (
          <>
            <script type="application/ld+json" dangerouslySetInnerHTML={{
              __html: JSON.stringify({
                "@type": "ImageObject",
                "inLanguage": "en-GB",
                "@id": "https://www.glassfrogtech.com/digital-marketing/#primaryimage",
                "url": "https://www.glassfrogtech.com/logo.svg",
                "contentUrl": "https://www.glassfrogtech.com/logo.svg",
                "width": 1500,
                "height": 1000
              })
            }} />
            
            <script type="application/ld+json" dangerouslySetInnerHTML={{
              __html: JSON.stringify({
                "@type": "Organization",
                "@id": "https://www.glassfrogtech.com/digital-marketing/#organization",
                "name": "Expert Digital Marketing Agency in London & Ads Agency",
                "url": "https://www.glassfrogtech.com/digital-marketing",
                "logo": {
                  "@type": "ImageObject",
                  "inLanguage": "en-GB",
                  "@id": "https://www.glassfrogtech.com/digital-marketing/#/schema/logo/image/",
                  "url": "https://www.glassfrogtech.com/whitelogo.png",
                  "contentUrl": "https://www.glassfrogtech.com/whitelogo.png",
                  "caption": "Expert Digital Marketing Agency in London & Ads Agency"
                },
                "image": {
                  "@id": "https://www.glassfrogtech.com/digital-marketing#/schema/logo/image/"
                }
              })
            }} />
            
            <script type="application/ld+json" dangerouslySetInnerHTML={{
              __html: JSON.stringify({
                "@type": "WebSite",
                "@id": "https://www.glassfrogtech.com/digital-marketing#/schema/logo/image/#website",
                "url": "https://www.glassfrogtech.com/digital-marketing",
                "name": "Expert Digital Marketing Agency in London & Ads Agency",
                "description": "Looking for Digital Marketing Solutions that communicate your Brand Story to your clients? Connect with Glassfrog, top Digital Marketing Agency in London!",
                "publisher": {
                  "@id": "https://www.glassfrogtech.com/digital-marketing#organization"
                },
                "potentialAction": [
                  {
                    "@type": "SearchAction",
                    "target": {
                      "@type": "EntryPoint",
                      "urlTemplate": "https://www.glassfrogtech.com/digital-marketing?s={search_term_string}"
                    },
                    "query-input": "required name=search_term_string"
                  }
                ],
                "inLanguage": "en-GB"
              })
            }} />
            
            <script type="application/ld+json" dangerouslySetInnerHTML={{
              __html: JSON.stringify({
                "@context": "https://schema.org/",
                "@type": "BreadcrumbList",
                "itemListElement": [
                  {
                    "@type": "ListItem",
                    "position": 1,
                    "name": "Pay Per Click Ads",
                    "item": "https://www.glassfrogtech.com/pay-per-click-ads"
                  },
                  {
                    "@type": "ListItem",
                    "position": 2,
                    "name": "Search Engine Optimisation",
                    "item": "https://www.glassfrogtech.com/search-engine-optimisation"
                  },
                  {
                    "@type": "ListItem",
                    "position": 3,
                    "name": "Social Media Advertising",
                    "item": "https://www.glassfrogtech.com/social-media-advertising"
                  }
                ]
              })
            }} />

            <script id="faq-schema"
              type="application/ld+json"
              dangerouslySetInnerHTML={{
                __html: JSON.stringify({
                  "@context": "https://schema.org",
                  "@type": "FAQPage",
                  "mainEntity": [
                    {
                      "@type": "Question",
                      "name": "What are the top services offered by digital marketing agencies in cities like London, and others?",
                      "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "There are a variety of marketing services offered by digital marketing agencies in cities such as London, and others. Marketers often seek services such as Lead Generation, Pay Per Click Campaigns, Search Engine Optimization, and Social Network Advertising. These digital marketing services help businesses to increase their online engagement and outreach."
                      }
                    },
                    {
                      "@type": "Question",
                      "name": "How can an Ads Agency help me boost my business through digital marketing?",
                      "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "A good ads agency would offer social media advertising, SEO & Marketing, and Google PPC Ads. These techniques in the domain of digital marketing will help businesses to approach the users online, based on the product audience and niche, through a customized and specific plan. Approaching the right audience on the right platform is a skill that an ads agency specializes in. Therefore, they shall help boost business by running campaigns on digital platforms."
                      }
                    },
                    {
                      "@type": "Question",
                      "name": "What are the methods for a good lead generation campaign that a digital marketing agency uses?",
                      "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "A customized and personalized social media advertising campaign fuels a good lead generation and conversion rate. Selecting the exact type of audience and estimating the best set of users for products and services will help filter out the consumers who are highly interested in purchase. This shall hike the quantity as well as the quality of the leads. A skilled and experienced digital marketing agency shall be the best resource to refer to in order to create a good lead generation campaign."
                      }
                    },
                    {
                      "@type": "Question",
                      "name": "What are the features of the best search engine optimization agency for digital marketing of my business?",
                      "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "A good SEO & Marketing agency would employ the best methods for Search Engine Optimization for your business. These methods will be widely distributed throughout arenas such as on-page SEO, off-page SEO, backlinks creation, and much more. An SEO agency would plan to grow the business and bring a hike in organic traffic within certain intervals of time. Therefore, the best search engine optimization agency would strategically engage in the digital marketing of your business."
                      }
                    }
                  ]
                })
              }}
            />
          </>
        )}
      </>
  )
}

export default Page