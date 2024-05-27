import Header from "@/components/Header/Header";
import Ourclient from "@/components/Ourclient/Ourclient";
import VideoSection from "@/components/VideoSection/VideoSection";
import Image from "next/image";
import { MacbookScroll } from "@/components/About/macbook-scroll";
import Service from "@/components/Service/Service";
import Ourwork from "@/components/Ourwork/Ourwork";

export default function Home() {
  return (
    <>
      <Header />
      <VideoSection />
      {/* <Ourclient /> */}
      <MacbookScroll />
      <Service />
      <Ourwork />
    </>
  );
}
