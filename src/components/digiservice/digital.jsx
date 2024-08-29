import React from "react";
import sma from "../../../public/socialmediaadvertising.png";
import ppc from "../../../public/payperclickads.png";
import emm from "../../../public/em.png";

import seo from "../../../public/searchengineoptimization.png";
import Image from "next/image";

const digital = () => {
  const cardsData = [
    {
      title: "Social Media Advertising",
      image: sma,
      description:
        "Social media is the ultimate platform for real-time engagement with your target audience. Social media advertising tells us where the audience is spending most of the time on platforms like Facebook, Instagram, Twitter, and LinkedIn. We craft strategic campaigns that instantly get you seen, heard, and connected. Our social media advertising team brings engagement and attention that builds connections with audiences. We promote blogs, client success stories, and social media ads to carry out messages for the audience. Our team implements strategies to boost web traffic, engagement, and lead conversion rates. Building brand awareness, driving traffic, and growing your business through social media advertising is important for your business. ",
    },
    {
      title: "Pay Per Click Ads",
      image: ppc,
      description:
        "Pay-Per-Click Campaign is a powerful tool for digital advertising. This is one of the most influential and cost-effective ways to reach potential clients, as you only pay when someone clicks on your ads. These ads are seen on social media platforms like Instagram, Facebook, etc., and Google or Bing, targeting users who are searching for similar services or products like yours. For marketing agencies, PPC ads provide immediate results and quick visibility. This is a bidding system in which you can bid on specific keywords bringing traffic tp website by putting it on top of searh results. Google PPC Advertising aims to reach a particular audience based on a specific audiences location and interest. ",
    },
    {
      title: "Search Engine Optimisation",
      image: seo,
      description:
        "Search Engine Optimization is like the support of digital marketing. The responsibility of SEO is to make your website rank.  This is the process of gaining visibility and traffic by increasing the quality of online traffic. SEO Search Optimisation helps increase brand awareness and boost sales. SEO & Marketing are not just about ranking high on Google, it's more about deriving the right traffic to your website. Glassfrog Technologies Search Engine Optimization team carries out an effective strategy that includes analyzing, optimizing, and monitoring your website to ensure it performs the best. Our SEO team experts will help you get to the high ranks and achieve long-term success online.   ",
    },
    {
      title: "Email Marketing",
      image: emm,
      description:
        "Email marketing is a part of marketing strategy, and it works significantly for a digital marketing agency like ours. This is a great way to build stronger connections with the audience. Unlike social media marketing, which is built to increase outreach and engagement, Email marketing allows for personalised communication. Our team sends personalized messages, special offers, and updates directly to the customers and makes them feel valued. Email marketing can drive traffic to your social media pages increasing your reach across multiple platforms. This digital world calls for better growth of business through email marketing. ",
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
                <div
                  key={index}
                  className="card bg-gradient-to-l from-slate-300 to-slate-100 text-slate-600 border border-slate-300  gap-4 rounded-lg shadow-md"
                >
                  <Image
                    className="cardimg"
                    alt="digital services"
                    src={card.image}
                  />
                  <div className="card__content">
                    <p className="card__title text-lg font-bold mb-2">
                      {card.title}
                    </p>
                    <p className="card__description">{card.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default digital;
