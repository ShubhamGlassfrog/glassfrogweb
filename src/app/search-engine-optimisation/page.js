import Footer from "@/components/Footer/Footer";
import Header from "@/components/Header/Header";
import React from "react";
import Image from "next/image";
import Ourwork from "@/components/Ourwork/Ourwork";
import Need from "@/components/Need/Need";
import Digital from "@/components/digiservice/digital";

const page = () => {
  const cardsData = [
    {
      title: "On-Page SEO",
      description:
        "We make sure your website gets seen by the right people. We optimize every aspect of your website to enhance its appeal to search engines like Google. This includes selecting appropriate keywords, refining titles, and headings, and ensuring that your content is easy to read and understand.",
    },
    {
      title: "Off-Page SEO",
      description:
        "Our team of experts makes your website noticed beyond its pages. Off-page SEO builds your website's reputation and authority across the internet. We specialize in building a website's reputation and authority across the internet by creating quality backlinks, writing guest posts and articles, and engaging with your audience on social media and other online platforms.  This makes your website climb higher in search engine rankings and attract more visitors.",
    },
    {
      title: "Technical SEO",
      description:
        "We ensure your website runs smoothly throughout. We'll optimize your website for lightning speed and a flawless user experience, ensuring a happy dance for both visitors and search engines.  With this, the searchers will see your website in a higher position and will see what you offer for their needs. ",
    },
  ];

  return (
    <>
       <head>
        <title>SEO Agency | Next Generation SEO & Marketing Company</title>
<meta name="description" content="Our SEO Search Engine Optimization will work wonders for your site. Get a 
search optimization service. SEO and Marketing for better ranking and customers
 "/>
      </head>
      <Header />
      <section className="bg-slate-950 py-16 ">
        <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row sm:flex-col items-center gap-10">
            {/* First Column */}
            <div className="   w-full md:w-1/2 sm:w-1/2">
              <h1 className="   we">Search Engine</h1>
              
              <h1 className="glassfrog">Optimisation</h1>
              <p className="text-white mb-6">
                We specialise in SEO which will help your website show up higher
                in search results when people look for things related to your
                business. This will lead to more customers for you. We use smart
                techniques like choosing the right keywords, making your website
                easy to navigate, and getting other websites to link to yours.
              </p>
              <p className="text-white mb-6 flex items-center">
                <a
                  className="flex items-center gap-5"
                  href="/digital-marketing"
                >
                  BACK TO SERVICES{" "}
                  <svg
                    width="160"
                    height="14"
                    viewBox="0 0 160 14"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M8.09999 12.293L6.68999 13.707L0 6.99997L6.68999 0.292969L8.09999 1.70697L3.81799 5.99997H160V7.99997H3.81799L8.09999 12.293Z"
                      fill="#ffffff"
                    />
                  </svg>
                </a>
              </p>
            </div>

            {/* Second Column */}
            <div className="flex space-y-8 justify-center gap-16 pt-14 items-center w-full md:w-1/2 sm:w-1/2">
              <Image
                src="/searchengineoptimization.png"
                alt="seo"
                width={1800}
                height={1800}
              />
            </div>
          </div>
        </div>
      </section>
      <section className="bg-white py-16 ">
        <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col justify-center text-center items-center">
            <h2 className="about font-extrabold text-slate-950 mb-4">
              BALANCING DIGITAL ACCESS AND TECHNICAL ABILITIES WITH ARTIFICIAL
              INTELLIGENCE
            </h2>
            <p className="text-slate-950 mb-6">
              Our approach to businesses is very simple. We combine our passion
              for technicalities with digital marketing to create a virtual
              experience that drives engagement for you. Our services in Website
              Design, Development, Advertising, Search Engine Optimisation,
              Content Marketing, Social Media Management, and Graphic Design are
              intricately loomed to suit your expectations.{" "}
            </p>
          </div>
          <div className="flex justify-center py-10  ">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {cardsData.map((card, index) => (
                <div
                  key={index}
                  className="text-white bg-[#020617] border-slate-300 p-4 gap-4 rounded-lg shadow-md"
                >
                  <div className="col-span-2 text-lg font-bold capitalize rounded-md pb-4">
                    {card.title}
                  </div>
                  <div className="col-span-2 rounded-md pb-4">
                    {card.description}
                  </div>
                  <div className="col-span-1">
                    <button className="rounded-md   hover:text-slate-200 duration-300 p-2">
                      <a className="flex" href="/contact">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="feather feather-external-link"
                        >
                          <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                          <polyline points="15 3 21 3 21 9"></polyline>
                          <line x1="10" y1="14" x2="21" y2="3"></line>
                        </svg>{" "}
                        Contact Us
                      </a>
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <Digital />

      <Need />
      <Footer />
    </>
  );
};

export default page;
