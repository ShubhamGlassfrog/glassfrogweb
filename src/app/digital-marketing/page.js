'use client'

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Footer from '../../components/Footer/Footer';
import Header from '../../components/Header/Header';
import Ourwork from '../../components/Ourwork/Ourwork';
import Need from '../../components/Need/Need';

const Page = () => {
  const [isClient, setIsClient] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    website: "",
  });
  const [errors, setErrors] = useState({});
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { id, value } = e.target;
    if (id === "name") {
      if (/^[a-zA-Z\s]*$/.test(value)) {
        setFormData({ ...formData, [id]: value });
      }
    } else if (id === "phone") {
      if (/^\d*$/.test(value)) {
        setFormData({ ...formData, [id]: value });
      }
    } else {
      setFormData({ ...formData, [id]: value });
    }
  };

  const validate = () => {
    let tempErrors = {};
    if (!formData.name) tempErrors.name = "Name is required";
    if (!formData.email) tempErrors.email = "Email is required";
    if (!formData.phone) tempErrors.phone = "Phone number is required";
    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (validate()) {
      setIsSubmitting(true);
      try {
        // Send form data to the backend API route for emailing
        const response = await axios.post('/api/sendEmail', formData);

        // Assuming the API response contains a success message
        setSuccessMessage("Form submitted successfully!");
        setErrorMessage("");
        
        // Reset the form
        setFormData({
          name: "",
          email: "",
          phone: "",
          website: "",
        });
        setIsSubmitting(false);
      } catch (error) {
        console.error("Error submitting form:", error);
        setErrorMessage("Failed to submit the form. Please try again.");
        setIsSubmitting(false);
      }
    }
  };

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
                <h1 className="we">Digital Marketing, Simplified!  
                 
                </h1>
                <p className="text-white mb-6">
                  Do you know what can help your business grow dynamically? Digital Marketing Solutions. As complicated as it might sound, it is not that difficult when your business joins hands with an experienced digital marketing agency. Glassfrog Technologies offers digital marketing services personalized to your business model and helps you thrive as a brand. We are your marketing companions every step of the way, bridging the gap between ambitions and reality! 
                </p>
              </div>
              <div className="w-full md:w-1/2">
                <form onSubmit={handleSubmit} className="space-y-6 w-full">
                  {/* Form Fields */}
                  <div>
                    <label htmlFor="name" className="block mb-2 text-sm font-medium text-white">Your Name</label>
                    <input
                      type="text"
                      id="name"
                      value={formData.name}
                      onChange={handleChange}
                      className="shadow-sm bg-white border border-white text-black text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5"
                      placeholder="John Doe"
                      required
                    />
                    {errors.name && <p className="text-red-500 text-sm">{errors.name}</p>}
                  </div>

                  <div>
                    <label htmlFor="email" className="block mb-2 text-sm font-medium text-white">Your Email</label>
                    <input
                      type="email"
                      id="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="shadow-sm bg-white border border-white text-black text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5"
                      placeholder="name@example.com"
                      required
                    />
                    {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}
                  </div>

                  <div>
                    <label htmlFor="phone" className="block mb-2 text-sm font-medium text-white">Phone Number</label>
                    <input
                      type="tel"
                      id="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="shadow-sm bg-white border border-white text-black text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5"
                      placeholder="1234567890"
                      required
                    />
                    {errors.phone && <p className="text-red-500 text-sm">{errors.phone}</p>}
                  </div>

                  <div>
                    <label htmlFor="website" className="block mb-2 text-sm font-medium text-white">Website URL</label>
                    <input
                      type="text"
                      id="website"
                      value={formData.website}
                      onChange={handleChange}
                      className="shadow-sm bg-white border border-white text-black text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5"
                      placeholder="www.example.com"
                      required
                    />
                    {errors.website && <p className="text-red-500 text-sm">{errors.website}</p>}
                  </div>
<p className='text-white'>Get the free audit of my site</p>
                  <button type="submit" className="audit text-white p-3 rounded-lg flex items-center justify-center w-full md:w-auto">
                    {isSubmitting ? (
                      <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.963 7.963 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                    ) : (
                      "Lets start"
                    )}
                  </button>

                  {successMessage && <p className="text-green-500 text-sm mt-2">{successMessage}</p>}
                  {errorMessage && <p className="text-red-500 text-sm mt-2">{errorMessage}</p>}
                </form>
              </div>
            </div>
          </div>
        </section>
 <section className="bg-slate-950 py-16 pt-32 px-4 sm:px-6 lg:px-8">
            <div className="max-w-screen-xl mx-auto py-4 sm:py-6 lg:py-8 px-4 sm:px-6 lg:px-8">
              <div className="flex flex-col md:flex-row sm:flex-row gap-10 items-center">
                <div className="flex flex-col w-full md:w-1/2 sm:w-1/2">
                  <h2 className="about font-extrabold text-white mb-4">
                    Digital Marketing Services tailored to your needs 
                  </h2>
                  <p className='text-white mb-6 flex items-center'>
Our process is simple: Understand, Strategize, and Execute. We start by analyzing your business to understand what exactly it needs to transform into a brand. The next step is strategizing suitable plans integrating various marketing services that will assure results. The last step in this process is executing the plans with perfection. This simple method, specifically customized to your branding needs, has delivered results, and we can help you achieve your outreach and engagement goals. 
                </p>
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
<section className="bg-white py-16 px-4">
      <div className="max-w-7xl mx-auto text-center">
        {/* Heading */}
        <h2 className="text-3xl font-bold text-gray-800">
         Why Glassfrog is your go-to Digital Marketing Fella? 
        </h2>
        <p className="text-lg text-[#ed2998] mt-2">
          Boost Your Revenue Growth Rate and Achieve Online Success
        </p>
      </div>

      <div className="max-w-7xl mx-auto mt-10 grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
        {/* Left Side - Text */}
        <div>
          <p className="text-gray-700 text-lg">
           There are many reasons why you can choose a digital marketing agency in order to grow digitally. But Glassfrog holds the strength to help you leave an impression. On digital platforms, the competition is highly clustered. Making an impact is all that you need to stand out. Our strategies and plans focus on helping you differentiate. 
          </p>
          <p className="text-gray-700 text-lg mt-4">
           To maximize your client engagement and increase the retention rate, we invest our expertise and experience. We have helped our clients grow their business by almost 43% in the initial months of partnership. Our data-driven processes and real-time business understanding benefit your purpose of relying on a digital marketing agency. Here's how we ease your digital marketing journey:
          </p>
        </div>

        {/* Right Side - Image */}
        <div className="flex justify-center">
           <video
    src="/service.mp4"
    alt="services"
    width="1200"
    height="1200"
    controls
    className="rounded-lg shadow-lg"
  />   
        </div>
      </div>

      {/* Services Section */}
      <div className="max-w-7xl mx-auto mt-10 grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Service 1 */}
        <div className="p-6 bg-gray-50 rounded-lg shadow">
          <div className="flex items-center space-x-4">
            {/* Icon */}
            <span className="text-[#ed2998] rotate-180">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-8 w-8"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M8 16l-4-4m0 0l4-4m-4 4h16"
                />
              </svg>
            </span>
            {/* Title */}
            <h3 className="text-lg font-semibold text-gray-800">
             Analytical Approach
            </h3>
          </div>
          <p className="text-gray-600 mt-4">
            The prime approach that we follow is to analyze and strategize. We understand the needs of your targeted audience and, accordingly, strategize. This helps your business to fit the parameters of your customers' requirements. Thus building your brand image as a consumer-friendly brand.
          </p>
        </div>

        {/* Service 2 */}
        <div className="p-6 bg-gray-50 rounded-lg shadow">
          <div className="flex items-center space-x-4">
            {/* Icon */}
            <span className="text-[#ed2998] rotate-180">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-8 w-8"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M8 16l-4-4m0 0l4-4m-4 4h16"
                />
              </svg>
            </span>
            {/* Title */}
            <h3 className="text-lg font-semibold text-gray-800">
              Expertise and Experience
            </h3>
          </div>
          <p className="text-gray-600 mt-4">
            As a premium digital marketing agency, we have assisted many clients in achieving their business goals. We bring expertise and experience to the table. Be it backlinking or the latest Instagram trends, we have mastered them all.
          </p>
        </div>

        {/* Service 3 */}
        <div className="p-6 bg-gray-50 rounded-lg shadow">
          <div className="flex items-center space-x-4">
            {/* Icon */}
            <span className="text-[#ed2998] rotate-180">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-8 w-8"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M8 16l-4-4m0 0l4-4m-4 4h16"
                />
              </svg>
            </span>
            {/* Title */}
            <h3 className="text-lg font-semibold text-gray-800">
Custom Strategies            </h3>
          </div>
          <p className="text-gray-600 mt-4">
            Every business is different. Your product and business goals might not be the same as your competitors, and we understand that. Therefore, we stick to your prime goals while building the perfect brand strategy. This helps your business stand out.
          </p>
        </div>
          </div>
          <div className="max-w-7xl mx-auto mt-10 grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Service 1 */}
        <div className="p-6 bg-gray-50 rounded-lg shadow">
          <div className="flex items-center space-x-4">
            {/* Icon */}
            <span className="text-[#ed2998] rotate-180">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-8 w-8"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M8 16l-4-4m0 0l4-4m-4 4h16"
                />
              </svg>
            </span>
            {/* Title */}
            <h3 className="text-lg font-semibold text-gray-800">
Targeted marketing            </h3>
          </div>
          <p className="text-gray-600 mt-4">
           To generate increased engagement and outreach, we follow the approach of targeted marketing. This method will help your business reach out to an addressable set of users. Therefore, your marketing results improve and become cost-effective.
          </p>
        </div>

        {/* Service 2 */}
        <div className="p-6 bg-gray-50 rounded-lg shadow">
          <div className="flex items-center space-x-4">
            {/* Icon */}
            <span className="text-[#ed2998] rotate-180">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-8 w-8"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M8 16l-4-4m0 0l4-4m-4 4h16"
                />
              </svg>
            </span>
            {/* Title */}
            <h3 className="text-lg font-semibold text-gray-800">
Quick Mitigations            </h3>
          </div>
          <p className="text-gray-600 mt-4">
            While handling marketing campaigns and dealing with challenges, large-scale impacts are likely. Hence, your marketing strategies must be prepared with mitigation plans. We always have a backup strategy such that you never need a backup marketing agency!
          </p>
        </div>

        {/* Service 3 */}
        <div className="p-6 bg-gray-50 rounded-lg shadow">
          <div className="flex items-center space-x-4">
            {/* Icon */}
            <span className="text-[#ed2998] rotate-180">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-8 w-8"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M8 16l-4-4m0 0l4-4m-4 4h16"
                />
              </svg>
            </span>
            {/* Title */}
            <h3 className="text-lg font-semibold text-gray-800">
Assured ROI            </h3>
          </div>
          <p className="text-gray-600 mt-4">
            A marketing strategy that starts paying for itself is often termed a successful one. Our marketing campaigns are not only cost-effective but long-lasting. They help your business gain long-term benefits, eventually leading to an exceptional return on investment.
          </p>
        </div>
      </div>
    </section>
        <Ourwork />
        <Need />
      </main>
      <Footer />
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
  );
}

export default Page;
