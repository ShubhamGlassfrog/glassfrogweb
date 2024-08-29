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
      title: "STRATEGIC PLANNING",
      description:
        "Social Media and Advertising are successful in setting clear goals in every domain like increasing brand awareness, deriving traffic, or boosting sales. We work as a trustworthy partner of yours, knowing your target audience and understanding your crucial role and interests. We create the best strategies of marketing by setting a budget wisely for different platforms and ads. We keep in record how much a business is willing to spend and set the budget accordingly.  Then we track the performance of your brand or business, which helps in refining your approach. We keep track of your click-through rates and ROI and convert them into real audiences. Gathering focus on engagement results in giving positive and best of results. ",
    },
    {
      title: "CONTENT MARKETING",
      description:
        "Our successful social media advertising strategy is to understand your target audience. We know their interests, their weak points, and where they spend most of their time online. We then create similar, engaging, valuable content like articles, engaging videos, social media ads, informative content, or eye-catching infographics. We consistently carry out the process of content calendars and post regularly for better engagement. We create content that adds value to your business like solving a problem, answering, or entertaining the audience. Our digital marketing team monitors your performance with the help of analytical tools and instantly makes changes in the strategies. We respond quickly to any queries or comments to ensure trust and engagement, leading to better results. ",
    },
    {
      title: "ADVERTISING",
      description:
        "Our successful advertising strategy includes setting clear goals. Setting clear goals to boost sales, increase brand awareness, and derive traffic for your business through setting clear goals is the most important first step. Our team of professional and trained individuals identifies your target audience, having the same interests as your brand followed by creating similar engaging content with messages to grab attention. Our ads agency sets an affordable budget for different platforms accordingly. Monitoring the ads performance is a very crucial part we take care of for the business to be successful. The last step is making changes if a problem occurs, followed by a quick response to the audience or customer to strengthen brand effectiveness on social media. ",
    },
  ];

  return (
    <>
      <head>
        <title>Best Social Media Ads for Stellar Social Network Advertising</title>
<meta name="description" content="We work on Social media ads for social network advertising to target users. Know about Social media and advertising. Boost with social media advertising."/>
      </head>
      <Header />
      <section className="bg-slate-950 py-16 ">
        <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row sm:flex-col items-center gap-10">
            {/* First Column */}
            <div className="   w-full md:w-1/2 sm:w-1/2">
              <h1 className="   we">Social Media <span className="glassfrog">Advertising</span></h1>
              
              
              <p className="text-white mb-6">
                Social media is the ultimate platform for real-time engagement with your target audience. Our team implement strategies to boost web traffic, engagement, and lead conversion rates.  Our business approach is different. Imagine a website that amazes your visitors and social media that buzzes with excitement. We're a team of passionate tech experts and digital marketing pros who work together to create captivating online experiences for your business. Social Media Advertising Social media is the ultimate platform for real-time engagement with your target audience. We create strategies for campaigns that will make your business more visible, heard and connected. Our team create strategies to boost web traffic, increase engagement and lead conversion rates. 
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
                src="/socialmediaadvertising.png"
                alt="social-media-ads"
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
              INTELLIGENCE{" "}
            </h2>
            <p className="text-slate-950 mb-6">
              Our business approach is different. Imagine a website that amazes
              your visitors and social media that buzzes with excitement. We're
              a team of passionate tech experts and digital marketing pros who
              work together to create captivating online experiences for your
              business.
            </p>
          </div>
          <div className="flex justify-center py-10  ">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {cardsData.map((card, index) => (
                <div
                  key={index}
                  className="text-white bg-[#020617] text-slate-600 border border-slate-300 p-4 gap-4 rounded-lg shadow-md"
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
