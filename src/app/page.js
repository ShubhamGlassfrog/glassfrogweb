import Header from "../components/Header/Header";
import VideoSection from "../components/VideoSection/VideoSection";
import Image from "next/image";
import Service from "../components/Service/Service";
import Ourwork from "../components/Ourwork/Ourwork";
import AboutUs from "../components/About/About";
import Marquee from "../components/Marquee/Marquee";
// import 'swiper/swiper-bundle.min.css';
import "../../node_modules/swiper/swiper-bundle.min.css"
import Testimonial from "../components/Testimonial/Testimonial";
import Letsgo from "../components/Letsgo/Letsgo";
import Footer from "../components/Footer/Footer";
export default function Home() {
  return (
    <>
      <head>
         <title> Get Started with Glassfrog: Website, Marketing, & More  </title>
<meta name="description" content="   Digital Marketing Agency based in London that specializes in website design for company, and digital marketing advertising companies for your business.  
 "/>
        <link rel="canonical" href="https://www.glassfrogtech.com/" />
        <meta property="og:url" content="https://www.glassfrogtech.com/" />
        <meta name="google-site-verification" content="KGKh6qeCza3gKBgmNvaGfpjmZOdXgGjZQTG3BDZ5Seg" />
<meta property="og:type" content="website"/>
<meta property="og:title" content="Glassfrog Technologies | Your Technical and Digital Partner"/>
<meta property="og:description" content="Your go-to Digital Marketing Agency in UK for expert solutions in Web and Mobile Application, AI App, Social Media Ads, UX Design, SEO & Marketing, and more! "/>
<meta property="og:image" content="https://www.glassfrogtech.com/logo.svg"/>


<meta name="twitter:card" content="summary_large_image"/>
<meta property="twitter:domain" content="glassfrogtech.com"/>
<meta property="twitter:url" content="https://www.glassfrogtech.com/"/>
<meta name="twitter:title" content="Glassfrog Technologies | Your Technical and Digital Partner"/>
<meta name="twitter:description" content="Your go-to Digital Marketing Agency in UK for expert solutions in Web and Mobile Application, AI App, Social Media Ads, UX Design, SEO & Marketing, and more! "/>
<meta name="twitter:image" content="https://www.glassfrogtech.com/logo.svg"/>


        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=AW-16697522955"
        ></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'AW-16697522955');
            `,
          }}
        ></script>
         <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@type": "BreadcrumbList",
              "@id": "https://www.glassfrogtech.com/#breadcrumb",
              "itemListElement": [
                {
                  "@type": "ListItem",
                  "position": 1,
                  "name": "Home"
                }
              ]
            })
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@type": "ImageObject",
              "inLanguage": "en-GB",
              "@id": "https://www.glassfrogtech.com/#primaryimage",
              "url": "https://www.glassfrogtech.com/logo.svg",
              "contentUrl": "https://www.glassfrogtech.com/logo.svg",
              "width": 1500,
              "height": 1000
            })
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@type": "Organization",
              "@id": "https://www.glassfrogtech.com/#organization",
              "name": "Glassfrog Technologies | Your Technical and Digital Partner",
              "url": "https://www.glassfrogtech.com/",
              "logo": {
                "@type": "ImageObject",
                "inLanguage": "en-GB",
                "@id": "https://www.glassfrogtech.com/#/schema/logo/image/",
                "url": "https://www.glassfrogtech.com/whitelogo.png",
                "contentUrl": "https://www.glassfrogtech.com/whitelogo.png",
                "caption": "Glassfrog Technologies | Your Technical and Digital Partner"
              },
              "image": {
                "@id": "https://www.glassfrogtech.com/#/schema/logo/image/"
              }
            })
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@type": "WebSite",
              "@id": "https://www.glassfrogtech.com/#website",
              "url": "https://www.glassfrogtech.com/",
              "name": "Glassfrog Technologies | Your Technical and Digital Partner",
              "description": "Your go-to Digital Marketing Agency in UK for expert solutions in Web and Mobile Application, AI App, Social Media Ads, UX Design, SEO,Marketing, &amp; more!",
              "publisher": {
                "@id": "https://www.glassfrogtech.com/#organization"
              },
              "potentialAction": [
                {
                  "@type": "SearchAction",
                  "target": {
                    "@type": "EntryPoint",
                    "urlTemplate": "https://www.glassfrogtech.com/?s={search_term_string}"
                  },
                  "query-input": "required name=search_term_string"
                }
              ],
              "inLanguage": "en-GB"
            })
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@type": "WebSite",
              "@id": "https://www.glassfrogtech.com/#website",
              "url": "https://www.glassfrogtech.com/",
              "name": "Glassfrog Technologies | Your Technical and Digital Partner",
              "description": "Your go-to Digital Marketing Agency in UK for expert solutions in Web and Mobile Application, AI App, Social Media Ads, UX Design, SEO,Marketing, &amp; more!",
              "publisher": {
                "@id": "https://www.glassfrogtech.com/#organization"
              },
              "potentialAction": [
                {
                  "@type": "SearchAction",
                  "target": {
                    "@type": "EntryPoint",
                    "urlTemplate": "https://www.glassfrogtech.com/?s={search_term_string}"
                  },
                  "query-input": "required name=search_term_string"
                }
              ],
              "inLanguage": "en-GB"
            })
          }}
        />
      
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
