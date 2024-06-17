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
import Footer from "@/components/Footer/Footer";
export default function Home() {
  return (
    <>
      <head>
         <title>  Glassfrog Technologies | Your Technical and Digital Partner  </title>
<meta name="description" content="   Your go-to Digital Marketing Agency in UK for expert solutions in Web and Mobile Application, AI App, Social Media Ads, UX Design, SEO & Marketing, and more! 
 "/>
       <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=AW-16573743263"
        ></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'AW-16573743263');
            `,
          }}
        ></script>
      
      </head>
      <Header />
      <VideoSection />
      <Marquee />
      <AboutUs />
      <Service />
      <Ourwork />
      <Testimonial />
      <Letsgo />

      <Footer />
    </>
  );
}
