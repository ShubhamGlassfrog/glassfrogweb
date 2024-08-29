import Footer from "@/components/Footer/Footer";
import Header from "@/components/Header/Header";
import React from "react";
import Image from "next/image";
import Ourwork from "@/components/Ourwork/Ourwork";
import Need from "@/components/Need/Need";

const page = () => {
  return (
    <>
       <head>
         <title>Premium Website and Digital Marketing Services in UK</title>
<meta name="description" content="Looking to revamp your website and grow your business beyond its general reach? Check out our services in Website Development and Digital Marketing based in UK."/></head>
      <Header />
      <section className="bg-slate-950 py-16 ">
        <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row sm:flex-col items-center gap-10">
            {/* First Column */}
            <div className="   w-full md:w-1/2 sm:w-1/2">
              <h1 className="   we">OUR <span className="glassfrog">SERVICES</span></h1>
              
              
              <p className="text-white mb-6">
                Glassfrog Technologies offers businesses comprehensive digital and technical solutions. Our skilled and passionate team creates websites tailored to your brand identity.
<br></br>

We develop innovative and creative marketing strategies to drive traffic, engagement, and leads across various channels like Paid Advertising Pay-Per-Click, Email Marketing, SEO, Social Media Marketing,  and Display Advertising.
<br></br>
Our focus is gathered for the purpose of providing tour desired results specific brand and business goals, and our focus is on the numbers that play a crucial role in your business.

              </p>
            </div>

            {/* Second Column */}
            <div className="flex space-y-8 justify-center gap-16 pt-14 items-center w-full md:w-1/2 sm:w-1/2">
                <video
    src="/service.mp4"
    alt="services"
    width="1800"
    height="1800"
    controls
    className="rounded-lg shadow-lg"
  />
            </div>
          </div>
        </div>
      </section>
      <section className="bg-slate-950 py-16 pt-32 px-4 sm:px-6 lg:px-8">
        <div className="max-w-screen-xl mx-auto  py-4 sm:py-6 lg:py-8 ">
          <div className="flex flex-col md:flex-row sm:flex-row gap-10 items-center">
            {/* First Column */}
            <div className="flex flex-col w-full md:w-1/2 sm:w-1/2">
              <h2 className="about font-extrabold text-white mb-4">
                TECHNOLOGY
              </h2>
              <p className="text-white mb-6 flex items-center">
               This fast-moving digital world needs something less time-consuming and different, so instead of relying on the old methods of marketing technology took its place. Our marketing agency believes in bringing your visions to life. Our technical team is expertise in creating content that is engaging for your brand. We design, develop, and optimize your content to provide you with the best results, followed by optimizing your website to derive more traffic and conversion rates and increase engagement. 
<br></br>

Our digital marketing agency is different from other marketing agencies. Our web development and design services, content marketing, SEO Services, social media management, User Experience, data security and privacy, email marketing, and graphic design according to your needs. The technology redefines customer experiences, adapts new platforms, and innovates different cultures. Our team is best for businesses that want to thrive in this digital era and have to stay ahead of the trends which we stay updated.
              </p>
              <p className="text-white mb-6 flex items-center">
                <a className="flex items-center gap-5" href="/technology">
                  TECHNICAL SERVICES{" "}
                  <svg
                    width="160"
                    height="14"
                    viewBox="0 0 160 14"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M151.9 12.293L153.31 13.707L160 6.99997L153.31 0.292969L151.9 1.70697L156.182 5.99997H0V7.99997H156.182L151.9 12.293Z"
                      fill="#ffffff"
                    ></path>
                  </svg>{" "}
                </a>
              </p>
            </div>
            <div className="flex flex-col w-full md:w-1/2 sm:w-1/2">
              <ul className="flex flex-col gap-5">
                <li className=" serli">
                  <a href="/ux-ui-design">
                    {" "}
                    UX/Ui Design
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
                  </a>
                </li>
                <li className=" serli">
                  <a href="/mobile-application">
                    {" "}
                    Mobile Application
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
                  </a>
                </li>
                <li className=" serli">
                  <a href="/web-application">
                    {" "}
                    Web Application
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
                  </a>
                </li>
                <li className=" serli">
                  <a href="/ai-application">
                    {" "}
                    AI Application
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
                  </a>
                </li>
                <li className=" serli">
                  <a href="/security-services">
                    Security Services
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
                  </a>
                </li>
                <li className=" serli">
                  <a href="/iot-embedded">
                    {" "}
                    IOT & Embedded
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
                  </a>
                </li>
              </ul>
            </div>

            {/* Second Column */}
          </div>
        </div>
      </section>
      <Ourwork />
      <section className="bg-slate-950 py-16 pt-32 px-4 sm:px-6 lg:px-8">
        <div className="max-w-screen-xl mx-auto  py-4 sm:py-6 lg:py-8 ">
          <div className="flex flex-col md:flex-row sm:flex-row gap-10 items-center">
            {/* First Column */}
            <div className="flex flex-col w-full md:w-1/2 sm:w-1/2">
              <h2 className="about font-extrabold text-white mb-4">
                MARKETING
              </h2>
              <p className="text-white mb-6 flex items-center">
              Glassfrog is the best digital marketing agency when it comes to technology and marketing. We build connections with the audience through our marketing strategies and making genuine customers. We carry out strategies that include creativity, data, and technology. By including AI, we offer advanced solutions different from traditional methods. With AI, we analyze large amounts of data and gain the target audience. Our seo london agency makes sure that your brand gets its unique brand voice and visibility, resulting in more clicks, traffic, and conversions. 
              </p>
              <p className="text-white mb-6 flex items-center">
                <a
                  className="flex items-center gap-5"
                  href="/digital-marketing"
                >
                  MARKETING SERVICES{" "}
                  <svg
                    width="160"
                    height="14"
                    viewBox="0 0 160 14"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M151.9 12.293L153.31 13.707L160 6.99997L153.31 0.292969L151.9 1.70697L156.182 5.99997H0V7.99997H156.182L151.9 12.293Z"
                      fill="#ffffff"
                    ></path>
                  </svg>{" "}
                </a>
              </p>
            </div>
            <div className="flex flex-col w-full md:w-1/2 sm:w-1/2">
              <ul className="flex flex-col gap-5">
                <li className=" serli">
                  <a href="/social-media-advertising">
                    {" "}
                    Social Media Advertising
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
                  </a>
                </li>
                <li className=" serli">
                  <a href="/pay-per-click-ads">
                    {" "}
                    Pay Per Click Ads
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
                  </a>
                </li>
                <li className=" serli">
                  <a href="/search-engine-optimisation">
                    {" "}
                    Search Engine Optimisation
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
                  </a>
                </li>
                <li className=" serli">
                  <a href="/email-marketing">
                    {" "}
                    Email Marketing
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
                  </a>
                </li>
              </ul>
            </div>

            {/* Second Column */}
          </div>
           <p className="text-white mb-6 flex items-center">
Marketing is making your brand stand out in the field with other businesses and brands. Glassfrog Technologies will ensure you get the best digital identity that matches your audience, giving you a unique identity to set you apart in the crowded online marketplace. We carry out the right marketing strategies and make your brand thrive.              </p>
        </div>
      </section>
      <Need />
      <Footer />
    </>
  );
};

export default page;
