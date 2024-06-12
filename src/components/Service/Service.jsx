import React from "react";

const Service = () => {
  return (
    <>
      <div className="flex flex-row justify-center py-20 items-center bg-slate-950">
        <div className=" flex flex-col md:flex-row sm:flex-row justify-center items-center container gap-10">
          <div
            className="relative w-full md:w-1/2 sm:w-1/2 h-full md:h-1/2 sm:h-1/2"
            style={{ height: "43rem" }}
          >
            <video
              autoPlay
              loop
              muted
              className="w-full"
              style={{ height: "90%" }}
            >
              <source src="/marketing.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
          <div className="flex flex-col w-full md:w-1/2 sm:w-1/2">
            <h2 className="about font-extrabold text-white mb-4">MARKETING</h2>
            <ul className="flex flex-col gap-5">
              <li className=" serli">
                <b>
                  <a href="/social-media-advertising">
                    {" "}
                    Social Media Advertising{" "}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="2"
                      stroke="currentColor"
                      className="ml-2 h-8 w-8 transition-transform duration-300 transform group-hover:translate-x-1"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M17 8l4 4m0 0l-4 4m4-4H3"
                      />
                    </svg>
                  </a>
                </b>
              </li>
              <li className=" serli">
                <b>
                  <a href="/pay-per-click-ads">
                    {" "}
                    Pay Per Click Ads
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="2"
                      stroke="currentColor"
                      className="ml-2 h-8 w-8 transition-transform duration-300 transform group-hover:translate-x-1"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M17 8l4 4m0 0l-4 4m4-4H3"
                      />
                    </svg>
                  </a>
                </b>
              </li>
              <li className=" serli">
                <b>
                  <a href="/search-engine-optimisation">
                    {" "}
                    Search Engine Optimisation
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="2"
                      stroke="currentColor"
                      className="ml-2 h-8 w-8 transition-transform duration-300 transform group-hover:translate-x-1"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M17 8l4 4m0 0l-4 4m4-4H3"
                      />
                    </svg>
                  </a>
                </b>
              </li>
              <li className=" serli">
                <b>
                  <a href="/email-marketing">
                    Email Marketing
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="2"
                      stroke="currentColor"
                      className="ml-2 h-8 w-8 transition-transform duration-300 transform group-hover:translate-x-1"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M17 8l4 4m0 0l-4 4m4-4H3"
                      />
                    </svg>
                  </a>
                </b>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="flex flex-row justify-center py-20 items-center bg-slate-950 pt-10">
        <div className=" flex flex-col md:flex-row sm:flex-row justify-center items-center container gap-10">
          <div className="flex flex-col w-full md:w-1/2 sm:w-1/2">
            <h2 className="about font-extrabold text-white mb-4">TECHNOLOGY</h2>
            <ul className="flex flex-col gap-5">
              <li className=" serli">
                <b>
                  <a href="/ux-ui-design">
                    {" "}
                    UX/Ui Design
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="2"
                      stroke="currentColor"
                      className="ml-2 h-8 w-8 transition-transform duration-300 transform group-hover:translate-x-1"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M17 8l4 4m0 0l-4 4m4-4H3"
                      />
                    </svg>
                  </a>
                </b>
              </li>
              <li className=" serli">
                <b>
                  <a href="/mobile-application">
                    {" "}
                    Mobile Application
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="2"
                      stroke="currentColor"
                      className="ml-2 h-8 w-8 transition-transform duration-300 transform group-hover:translate-x-1"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M17 8l4 4m0 0l-4 4m4-4H3"
                      />
                    </svg>
                  </a>
                </b>
              </li>
              <li className=" serli">
                <b>
                  <a href="/web-application">
                    {" "}
                    Web Application
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="2"
                      stroke="currentColor"
                      className="ml-2 h-8 w-8 transition-transform duration-300 transform group-hover:translate-x-1"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M17 8l4 4m0 0l-4 4m4-4H3"
                      />
                    </svg>
                  </a>
                </b>
              </li>
              <li className=" serli">
                <b>
                  <a href="/ai-application">
                    AI Application
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="2"
                      stroke="currentColor"
                      className="ml-2 h-8 w-8 transition-transform duration-300 transform group-hover:translate-x-1"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M17 8l4 4m0 0l-4 4m4-4H3"
                      />
                    </svg>
                  </a>
                </b>
              </li>
              <li className=" serli">
                <b>
                  <a href="/security-services">
                    {" "}
                    Security Services
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="2"
                      stroke="currentColor"
                      className="ml-2 h-8 w-8 transition-transform duration-300 transform group-hover:translate-x-1"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M17 8l4 4m0 0l-4 4m4-4H3"
                      />
                    </svg>
                  </a>
                </b>
              </li>
              <li className=" serli">
                <b>
                  <a href="/iot-embedded">
                    {" "}
                    IOT & Embedded
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="2"
                      stroke="currentColor"
                      className="ml-2 h-8 w-8 transition-transform duration-300 transform group-hover:translate-x-1"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M17 8l4 4m0 0l-4 4m4-4H3"
                      />
                    </svg>
                  </a>
                </b>
              </li>
            </ul>
          </div>
          <div
            className="relative w-full md:w-1/2 sm:w-1/2 h-full md:h-1/2 sm:h-1/2"
            style={{ height: "43rem" }}
          >
            <video
              autoPlay
              loop
              muted
              className="w-full"
              style={{ height: "90%" }}
            >
              <source src="/Website.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
      </div>
    </>
  );
};

export default Service;
