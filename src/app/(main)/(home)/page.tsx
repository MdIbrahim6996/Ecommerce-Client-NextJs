import FeaturedSection from "./_elements/FeaturedSection/FeaturedSection";
import NewsLetter from "./_elements/NewsLetter/NewsLetter";
import HeroSection from "./_elements/HeroSection/HeroSection";
import Image from "next/image";
import NewArrival from "./_elements/NewArrival/NewArrival";
import QuoteBanner from "./_elements/QuoteBanner/QuoteBanner";
import SaleBanner from "./_elements/SaleBanner/SaleBanner";

export default async function Home() {
  return (
    <div>
      <HeroSection />
      <QuoteBanner />
      <SaleBanner />
      <NewArrival />
      <section className="section-banner">
        <div className="relative">
          <div className="absolute left-[50%] top-[50%] -translate-x-[50%] -translate-y-[50%]">
            <p className="text-center text-6xl font-bold text-white">
              Contrary to popular belief is not simply rand.
            </p>
            <p className="mx-auto my-5 w-fit rounded bg-orange-500 px-12 py-3 text-center text-3xl font-bold text-white">
              More Products &rarr;
            </p>
          </div>
          <div>
            <Image
              src={"/nike.png"}
              alt="dsf"
              height={0}
              width={0}
              sizes="100vw"
              className="h-[40rem] w-full object-cover"
            />
          </div>
        </div>
      </section>
      <FeaturedSection />
      <NewsLetter />
    </div>
  );
}
