import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import React from "react";
import Image from "next/image";
import Ourwork from "../../components/Ourwork/Ourwork";
import Need from "../../components/Need/Need";
import Digital from "../../components/digiservice/digital";

const page = () => {
  const cardsData = [
    {
      title: "On-Page SEO",
      description:
        "On-page SEO gives your website a type of makeover in a way that Google and other search engines catch the attention. Our specialized team optimizes all the web pages of your website so that they rank higher in the search results. We use the skill of creating engaging and creative content, using the correct keywords, and making sure your website is easy to navigate. In the technical part, we make sure the loading speed is good and optimize images. These details help your website SEO game stronger and better and more chances of appearing in top results. ",
    },
    {
      title: "Off-Page SEO",
      description:
        "Off-page SEO is building your website outside your pages. We help your website get recognition by networking outside. We boost your site’s visibility and status using off-page SEO strategies. The main component of off-page SEO is link building. Our SEO team creates strong backlinks for your website that will take other reputed websites back to your site. Just creating backlinks won’t make much difference, so our other team creates your strong social media presence and gets positive reviews for you and different strategies. We build solid off-page SEO strategies to lead to higher rankings.",
    },
    {
      title: "Technical SEO",
      description:
        "This is an SEO technique that works behind the scenes to make your website run smoothly. This makes your website search engine-friendly and user-friendly. In technical SEO, our team optimizes the foundation and structure of the website. We ensure proper mobile-friendliness, improve site speed, fix the broken links, and set up proper URL structures. We make sure your website crawls and indexes your website which will ensure it appears above in search results. This will lead to getting more traffic, better visibility and higher rankings and make your website shine and attract more online customers.",
    },
  ];

  return (
    <>
       <head>
        <title>SEO London Agency - Best Search Engine Optimization Agency </title>
<meta name="description" content="Search Engine Optimization SEO & Marketing strategies by Glassfrog Technologies will help your business grow with SEO search optimization strategies. "/>
      </head>
      <Header />
      <section className="bg-slate-950 py-16 ">
        <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row sm:flex-col items-center gap-10">
            {/* First Column */}
            <div className="   w-full md:w-1/2 sm:w-1/2">
              <h1 className="   we">Search Engine <span className="glassfrog">Optimisation</span></h1>
              
              
              <p className="text-white mb-6">
               
We are SEO experts and can help your website rank in search engines. We specialize in finding content that will bring customers straight to your website like neon signs. We can not only get you where you want to go, but we can also improve your website navigation so you can easily find your way. We can also build a path between your site and other good sites, give you confidence, and help you stand out in searches. Get more websites, more leads, and ultimately more customers for your business. We constantly monitor and improve your SEO strategy to keep you one step ahead and dominate your online presence. We remove the blinders and start taking risks to get your website to the top of the search results. Search engine optimization is a long-term service in which we build trust and credibility, boost your online presence, and make your brand or service grow sustainably. With our help grow your brand and generate more leads for you. 
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
             Our approach to businesses is very simple. Our expertise in technical know-how and digital marketing allows us to craft immersive virtual experiences that captivate and engage your audience. Our services in Website Design, Development, Advertising, Search Engine Optimisation, Content Marketing, Social Media Management, and Graphic Design are intricately loomed to suit your expectations.{" "}
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
