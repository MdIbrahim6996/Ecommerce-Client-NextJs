import FeaturedSection from "./_elements/FeaturedSection/FeaturedSection";
import NewsLetter from "./_elements/NewsLetter/NewsLetter";
import HeroSection from "./_elements/HeroSection/HeroSection";
import Image from "next/image";
import NewArrival from "./_elements/NewArrival/NewArrival";
import QuoteBanner from "./_elements/QuoteBanner/QuoteBanner";
import SaleBanner from "./_elements/SaleBanner/SaleBanner";
import NoteBanner from "./_elements/NoteBanner/NoteBanner";

export default async function Home() {
  return (
    <div>
      <HeroSection />
      <QuoteBanner />
      <SaleBanner />
      <NewArrival />
      <NoteBanner />
      <FeaturedSection />
      <NewsLetter />
    </div>
  );
}
