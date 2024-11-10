import Image from "next/image";
import { Hourglass, Rocket, Truck } from "lucide-react";

const NewsLetter = async () => {
  return (
    <section className="section-container">
      <div className="grid grid-cols-1 gap-10 md:grid-cols-2">
        <div className="mt-[4rem]">
          <p className="heading">Subscribe</p>
          <p className="text-center text-lg md:-mt-[2rem]">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptate,
            quod.
          </p>
          <form
            action=""
            className="my-10 flex flex-col items-center justify-center gap-4 md:px-20"
          >
            <input
              type="text"
              className="w-full rounded border-2 p-4 outline-none"
              placeholder="Your Mail Address"
            />
            <button className="rounded bg-blue-700 px-14 py-4 font-semibold text-white">
              Subscribe
            </button>
          </form>
        </div>
        <div className="space-y-10">
          <p className="text-center text-2xl">
            Follow us on Instagram{" "}
            <span className="font-semibold">@future</span>
          </p>
          <div className="grid grid-cols-2 gap-3">
            <Image
              src={"/nike.png"}
              alt="man"
              height={0}
              width={0}
              sizes="100vw"
              className="h-[18rem] w-[24rem] rounded object-cover"
            />
            <Image
              src={"/nike-2.png"}
              alt="man"
              height={0}
              width={0}
              sizes="100vw"
              className="h-[18rem] w-[24rem] rounded object-cover"
            />
          </div>
        </div>
      </div>

      <section className="mt-[8rem] grid md:grid-cols-4">
        <div className="flex flex-col items-center text-center">
          <Truck size={80} absoluteStrokeWidth strokeWidth={5} />
          <p className="mt-2 text-xl font-semibold uppercase">
            free home delivery
          </p>
          <div className="my-2 w-10 border border-gray-600" />
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam,
            nemo?
          </p>
        </div>

        <div className="flex flex-col items-center text-center">
          <Rocket size={80} absoluteStrokeWidth strokeWidth={5} />
          <p className="mt-2 text-xl font-semibold uppercase">fast shipping</p>
          <div className="my-2 w-10 border border-gray-600" />
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam,
            nemo?
          </p>
        </div>

        <div className="flex flex-col items-center text-center">
          <Hourglass size={80} absoluteStrokeWidth strokeWidth={5} />
          <p className="mt-2 text-xl font-semibold uppercase">
            hassle free returns
          </p>
          <div className="my-2 w-10 border border-gray-600" />
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam,
            nemo?
          </p>
        </div>

        <div className="flex flex-col items-center text-center">
          <Truck size={80} absoluteStrokeWidth strokeWidth={5} />
          <p className="mt-2 text-xl font-semibold uppercase">
            free home delivery
          </p>
          <div className="my-2 w-10 border border-gray-600" />
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam,
            nemo?
          </p>
        </div>
      </section>
    </section>
  );
};

export default NewsLetter;
