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
              <h1 className="   we">OUR</h1>
              
              <span className="glassfrog">SERVICES</span>
              <p className="text-white mb-6">
                Glassfrog Technologies offers businesses comprehensive digital
                and technical solutions. Our skilled and passionate team creates
                websites tailored to your brand identity.<br></br>
                <br></br>
                We develop innovative and creative marketing strategies to drive
                traffic, engagement, and leads across various channels like
                Search Engine Optimization (SEO), Paid Advertising
                (Pay-Per-Click - PPC), Social Media Marketing, Email Marketing
                and Display Advertising.<br></br>
                <br></br>
                We focus on delivering results that resonate with your specific
                brand and business goals and our focus is on the numbers which
                play a crucial role in your business.
              </p>
            </div>

            {/* Second Column */}
            <div className="flex space-y-8 justify-center gap-16 pt-14 items-center w-full md:w-1/2 sm:w-1/2">
              <Image
                src="/service.webp"
                alt="services"
                width={1800}
                height={1800}
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
                Our belief is to bring your visions to life. We combine
                technical expertise with digital marketing to craft engaging
                online experiences. Our result-driven approach is to design,
                develop, and optimize your website to drive traffic, engagement,
                and conversions. <br></br>
                <br></br>
                We provide a full range of services including website design &
                development, advertising, SEO, content marketing, social media
                management, and graphic design, all customized to your needs.
                Our team prioritizes understanding your brand identity to ensure
                every aspect of your online presence resonates with your target
                audience. We work collaboratively to deliver exceptional
                results.
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
                Glassfrog explores marketing and technical excellence. We are
                committed to both the creative and technical aspects of
                marketing. By incorporating AI, we offer advanced marketing
                solutions that wouldn't be possible with traditional methods.
                With AI we analyze vast amounts of data to gain deep insights
                into your target audience. We believe that personalized and
                relevant marketing messages lead to improved customer engagement
                and satisfaction.
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
        </div>
      </section>
      <Need />
      <Footer />
    </>
  );
};

export default page;
