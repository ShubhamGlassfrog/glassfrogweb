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
      title: "Transactional Emails",
      description:
        "Transactional Emails are a part of digital marketing that provides a point of contact with customers. Transactional emails are triggered when the user takes an action like making a purchase, signing up, setting up a password, or changing it. We keep in mind the trust and experience that a customer will have on your website. These emails offer valuable information like welcome emails, shipping emails, and order confirmations. We make sure these emails are visually appealing, not dull, and aligned with your brands tone and style. ",
    },
    {
      title: "Promotional Emails ",
      description:
        "We bring more sales and boost your website engagement through promotional emails. We create promotional emails that will encourage action and attract more audiences. These emails are made to inform about discounts, promote special offers, and update on new products or upcoming events. These are made to grab attention with attractive headlines and engaging content. These emails create a type of urgency in the minds of the audience and make them purchase something by giving them a limited time offer. ",
    },
    {
      title: "Retention Emails",
      description:
        "Retention Emails make the audience engaged and make them come back for more. We keep in your knowledge the importance of your customers that are new or exist before. This mail helps build lasting relationships with the existing audience. These emails are forms of exceptional loyalty to customers or simple check-ins to show appreciation. Our expert team creates emails of the audiences interests and needs. We increase customer loyalty and encourage customer repeat rates. We also ensure customer satisfaction and keep the audience engaged for a long time. ",
    },
  ];

  return (
    <>
      <head>
        <title>Best emailing service in UK | Top Email Marketing</title>
<meta name="description" content="Do email marketing with our e mail marketing service. We use software that allows users to create and customise campaigns, collect data, and send emails."/>
      </head>


      <Header />
      <section className="bg-slate-950 py-16 ">
        <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row sm:flex-col items-center gap-10">
            {/* First Column */}
            <div className="   w-full md:w-1/2 sm:w-1/2">
              <h1 className="   we">Email  <span className="glassfrog">Marketing</span></h1>
              
             
              <p className="text-white mb-6">
               Email Marketing is the best way to reach our audiences directly. We connect on a personal level through this method and generate genuine customers and real results. In email marketing, we deliver the right messages to the right people at the right time. We specialize in creating personalized emails that engage the audience with similar needs and interests. We craft emails to give special offers, and remind them regarding this or any valuable content making a good impression. We analyze our emails to make them visually appealing and optimize them for all devices. To ensure continuous improvement, we provide mails that are visually appealing to the audience. Through our best emailing service, we boost brand awareness, drive your sales, and increase customer loyalty. This is a very cost-effective method for your service or brand as it returns better to your investment. With our e mailing marketing, we will help your business reach more customers, grow your business with email marketing, and make them come back to you. 
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
                src="/em.png"
                alt="email-marketing"
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
              Our approach to businesses is very simple. We merge our love for all things technical with digital marketing to craft a virtual experience that fosters engagement for you. Our services in Website Design, Development, Advertising, Search Engine Optimisation, Content Marketing, Social Media Management, and Graphic Design are intricately loomed to suit your expectations.{" "}
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
