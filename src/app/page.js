import Header from "@/components/Header/Header";
import VideoSection from "@/components/VideoSection/VideoSection";
import Image from "next/image";
import Service from "@/components/Service/Service";
import Ourwork from "@/components/Ourwork/Ourwork";
import AboutUs from "@/components/About/About";
import Marquee from "@/components/Marquee/Marquee";
// import 'swiper/swiper-bundle.min.css';
import "../../node_modules/swiper/swiper-bundle.min.css"
import Testimonial from "@/components/Testimonial/Testimonial";
import Letsgo from "@/components/Letsgo/Letsgo";
export default function Home() {
  return (
    <>
      <Header />
      <VideoSection />
      <Marquee />
      <AboutUs />
      <Service />
      <Ourwork />
      <Letsgo />
      {/* <Testimonial /> */}
    </>
  );
}
