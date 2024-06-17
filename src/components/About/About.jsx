import { FaArrowRight } from "react-icons/fa";
import Image from "next/image";

const AboutUs = () => {
  return (
    <section className="bg-slate-950 py-16 pt-32">
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="">
          {/* First Column */}
          <div className="flex flex-col justify-center text-center items-center">
            <h2 className="about font-extrabold text-white mb-4">
              EXPLORE MARKETING AND TECHNICAL EXCELLENCE WITH ARTIFICIAL
              INTELLIGENCE EXPERTISE
            </h2>
            <p className="text-white mb-6">
              Create your own channel of online presence on different platforms
              with meticulous attention to website trends, digital strategies,
              technical ease, graphic elegance, and much more. Our adept team of
              market professionals is equipped with the latest skills to help
              you navigate through technical differences and devise a
              personalised approach to marketing strategies.{" "}
            </p>
            <button className="inline-flex items-center px-4 py-2 border border-transparent text-base font-medium rounded-md text-white ">
              <a className="flex items-center" href="/about">
                {" "}
                ABOUT GLASSFROG <FaArrowRight className="ml-2" />
              </a>
            </button>
          </div>

          {/* Second Column */}
          <div className="flex flex-col md:flex-row sm:flex-row space-y-8 justify-center gap-16 pt-14 items-center ">
            <div className="flex justify-center">
              <Image
                className="alogo"
                src="/a2.png"
                alt="about"
                width={200}
                height={100}
              />
            </div>
            <div className="flex justify-center">
              <Image
                className="alogo"
                src="/Union.svg"
                alt="about"
                width={200}
                height={100}
              />
            </div>
            <div className="flex justify-center">
              <Image
                className="alogo"
                src="/awards.svg"
                alt="about"
                width={200}
                height={100}
              />
            </div>
            <div className="flex justify-center">
              <Image
                className="alogo"
                src="/a3.png"
                alt="about"
                width={200}
                height={100}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
