import Footer from '@/components/Footer/Footer'
import Header from '@/components/Header/Header'
import React from 'react'
import Image from 'next/image';
import Ourwork from "@/components/Ourwork/Ourwork";
import Need from '@/components/Need/Need';
import Head from 'next/head';

const page = () => {
  return (
      <>
       <Head>
        <title>Expert Digital Marketing Agency in London & Ad Agency</title>
        <meta name="description" content="Looking for Digital Marketing Solutions that communicate your Brand Story to your clients? Connect with Glassfrog, top Digital Marketing Agency in London!"/>
        <meta property="og:url" content="https://www.glassfrogtech.com/digital-marketing"/>
        <meta property="og:type" content="website"/>
        <meta property="og:title" content="Expert Digital Marketing Agency in London & Ads Agency"/>
        <meta property="og:description" content=" Looking for Digital Marketing Solutions that communicate your Brand Story to your clients? Connect with Glassfrog, top Digital Marketing Agency in London! "/>
        <meta property="og:image" content="https://www.glassfrogtech.com/_next/image?url=%2Fservice.webp&w=1920&q=75"/>

        <meta name="twitter:card" content="summary_large_image"/>
        <meta property="twitter:domain" content="glassfrogtech.com"/>
        <meta property="twitter:url" content="https://www.glassfrogtech.com/digital-marketing"/>
        <meta name="twitter:title" content="Expert Digital Marketing Agency in London & Ads Agency"/>
        <meta name="twitter:description" content=" Looking for Digital Marketing Solutions that communicate your Brand Story to your clients? Connect with Glassfrog, top Digital Marketing Agency in London! "/>
        <meta name="twitter:image" content="https://www.glassfrogtech.com/_next/image?url=%2Fservice.webp&w=1920&q=75" />

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

        {/* Remove the duplicate FAQPage schema */}

        <script
          id="faq-schema"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: `
              {
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
                    "name": "How can a Ads Agency help me boost my business through digital marketing?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "A good ads agency would offer social media advertising, SEO & Marketing, and Google PPC Ads. These techniques in the domain of digital marketing will help businesses to approach the users online, based on the product audience and niche, through a customised and specific plan. Approaching the right audience on the right platform is a skill that an ads agency specialises in. Therefore, they shall help boosting business by running campaigns on digital platforms."
                    }
                  },
                  {
                    "@type": "Question",
                    "name": "What are the methods for good lead generation campaign that a digital marketing agency uses?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "A customised and personalised social media advertising campaign fuels a good lead generation and conversion rate. Selecting the exact type of audience and estimating the best set of users for products and services will help filter out the consumers who are highly interested in purchase. This shall hike the quantity as well as the quantity of the leads. A skilled and experienced digital marketing agency shall be the best resource to refer to in order to create a good lead generation campaign."
                    }
                  },
                  {
                    "@type": "Question",
                    "name": "What are the features of the best search engine optimization agency for digital marketing of my business?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "A good SEO & Marketing agency would employ the best methods for Search Engine Optimisation for your business. These methods will be widely distributed throughout arenas such as on page SEO, off page SEO, backlinks creation, and much more. An SEO agency would plan to grow the business and bring hike in organic traffic within certain intervals of time. Therefore, the best search engine optimization agency would strategically engage in the digital marketing of your business."
                    }
                  }
                ]
              }
            `,
          }}
        />
      </Head>
      <body>
        <Header />
        <section className="bg-slate-950 py-16 ">
          <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col md:flex-row sm:flex-col items-center gap-10 ">
              {/* First Column */}
              <div className="   w-full md:w-1/2 sm:w-1/2">
                <h1 className="   we">Digital 
                  <span className='glassfrog'>Marketing</span>
                </h1>
                
                <p className="text-white mb-6">
                  Glassfrog is dedicated to entering the business and technology arenas. Our commitment extends to both creativity and marketing. We are transforming the industry by blending innovative technology and delivering the best solutions that break through the limitations of traditional systems. Using the power of artificial intelligence, we carefully analyze large amounts of data to uncover deeper insights about your target audience. This allows us to create personalised and relevant messages to maintain customer interest and satisfaction.
                </p>
              </div>

              {/* Second Column */}
              <div className="flex space-y-8 justify-center gap-16 pt-14 items-center w-full md:w-1/2 sm:w-1/2">
                <Image src="/service.webp" alt="digital-marketing" width={1800} height={1800} />
              </div>
            </div>
          </div>
        </section>
        
        <section className="bg-slate-950 py-16 pt-32 px-4 sm:px-6 lg:px-8">
          <div className="max-w-screen-xl mx-auto  py-4 sm:py-6 lg:py-8 px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col md:flex-row sm:flex-row gap-10">
              {/* First Column */}
              <div className="flex flex-col w-full md:w-1/2 sm:w-1/2">
                <h2 className="about font-extrabold text-white mb-4">
                  MARKETING
                </h2>
                <p className='text-white mb-6 flex items-center'>Our team of digital marketing experts is skilled at using a data-driven approach to create innovative campaigns in PPC, social media and influencer marketing. Their approach involves continuous research and focuses on creating unique results, thus contributing to the business growth of our valued clients.</p>
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
                  <li className=' serli' ><a href='/social-media-advertising'> Social Media Advertising
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="2"
                      stroke="currentColor"
                      className="ml-2 h-4 w-4 transition-transform duration-300 transform group-hover:translate-x-1"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M17 8l4 4m0 0l-4 4m4-4H3"
                      />
                    </svg>
                  </a></li>
                  <li className=' serli'><a href='/pay-per-click-ads'> Pay Per Click Ads
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="2"
                      stroke="currentColor"
                      className="ml-2 h-4 w-4 transition-transform duration-300 transform group-hover:translate-x-1"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M17 8l4 4m0 0l-4 4m4-4H3"
                      />
                    </svg></a>
                  </li>
                  <li className=' serli'><a href='/search-engine-optimisation'> Search Engine Optimisation
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="2"
                      stroke="currentColor"
                      className="ml-2 h-4 w-4 transition-transform duration-300 transform group-hover:translate-x-1"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M17 8l4 4m0 0l-4 4m4-4H3"
                      />
                    </svg></a>
                  </li>
                  <li className=' serli'><a href='/email-marketing'> Email Marketing
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="2"
                      stroke="currentColor"
                      className="ml-2 h-4 w-4 transition-transform duration-300 transform group-hover:translate-x-1"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M17 8l4 4m0 0l-4 4m4-4H3"
                      />
                    </svg></a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>
        <Ourwork />
        <Need/>
        <Footer/>
      </body>
      
      </>
  )
}

export default page