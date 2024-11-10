import Image from "next/image";
import React from "react";

const NoteBanner = () => {
  return (
    <section className="section-banner">
      <div className="relative">
        <div className="absolute left-[50%] top-[50%] w-[90%] -translate-x-[50%] -translate-y-[50%]">
          <p className="text-center text-4xl font-bold text-white md:text-6xl">
            Contrary to popular belief is not simply rand.
          </p>
          <p className="mx-auto my-5 w-fit rounded bg-orange-500 px-12 py-3 text-center text-lg font-bold text-white md:text-3xl">
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
  );
};

export default NoteBanner;
