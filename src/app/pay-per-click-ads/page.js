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
      title: "Lead Generation",
      description:
        "The lead generation through pay-per-click-ads attracts high-quality leads. Our best digital marketing agency in London creates PPC ads that attract the interest of potential clients only. We work on selecting the best keywords and making the best Ad copy, and we drive traffic to the landing pages that convert visitors to leads. We optimize your ad performance and get the best return on investment. We believe in returning you with genuine leads effectively. ",
    },
    {
      title: "Display Ads",
      description:
        "We specialize in Displaying Ads, a powerful way to get your business noticed online. We create eye-catching ads of images, text, or animations for websites across the internet to grab the attention of potential clients while they browse the web. We ensure that your message reaches the right people at the right time by analyzing their interests and behaviors. Through continuous monitoring, we provide changes in ad campaigns to optimize results and maximize results. ",
    },
    {
      title: "Budget",
      description:
        "The budget understanding between the client and company is very important for any service-providing company and the client. We carefully plan and look over the pay-per-click budget and try to spend carefully on the ads.  We connect with you to set a budget and then strategically allocate the funds to provide you with maximum return on your investment. We monitor your performance, ensure the budget is taken care of, and provide you with the best results without overspending. ",
    },
  ];

  return (
    <>
       <head>
        <title>Pay Per Click Campaign - Google Pay Per Click Advertising</title>
<meta name="description" content="Google PPC Ads will help you grow with a good pay per click campaign. Connect with us for Google Pay Per Click Advertising and experience quick engagement. "/>
      </head>
      <Header />
      <section className="bg-slate-950 py-16 ">
        <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row sm:flex-col items-center gap-10">
            {/* First Column */}
            <div className="   w-full md:w-1/2 sm:w-1/2">
              <h1 className="   we">Pay Per <span className="glassfrog">Click Ads</span></h1>
             
              
              <p className="text-white mb-6">
                Our Pay-Per-Click advertising services are designed to maximise your investment. By gaining a deep understanding of your business message, we can analyze content to ensure your ads appear when customers search for your products. Instead of targeting everyone, we use laser-cut precision to reach your ideal audience so you keep coming back. We create titles and descriptions designed to encourage engagement and clicks. We constantly monitor and adjust your marketing plan to increase clicks and conversion rates, effectively converting clicks into real customers. Work with us to harness the power of PPC and increase your website's visibility and search engine rankings. Eliminate negative online advertising and use our magic of PPC to move your business forward.
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
                src="/payperclickads.png"
                alt="pay-per-click-ads"
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
              Google Pay-Per-Click Advertising provides quick marketing and measurable results, and it is a powerful tool for our digital marketing agency. Our team is expertise in managing and creating Google PPC Campaigns to drive targeted traffic to your website. This method of digital marketing is cost-effective for us as you pay only when someone clicks on your ads, thus reaching potential customers. We plan the strategy according to your audience and the business goals. We create customized ads that resonate with your target audience. By compelling ad copy and designing eye-catching visuals, we make sure that your ads stand out. Our team continuously monitors and optimizes your campaigns to increase the ROI. Our PPC strategies take care of increasing website traffic, generating leads, or boosting sales for you in the best way. Our team of google pay-per-click advertising runs your ads on social media platforms, Google or Bing, and any time of day. 
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
