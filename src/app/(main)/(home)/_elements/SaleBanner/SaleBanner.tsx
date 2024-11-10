import Image from "next/image";

const SaleBanner = () => {
  return (
    <section className="section-container">
      <h1 className="heading mb-">on going flash sale. grab yours now!</h1>
      <div className="mx-auto grid w-fit md:grid-cols-2 grid-cols-1 gap-5">
        <div className="relative overflow-hidden rounded-xl">
          <div className="absolute left-[10%] top-[50%] -translate-y-[50%]">
            <p className="text-2xl italic text-white">30% OFF</p>
            <p className="text-center text-2xl font-bold text-white">
              Air Jordan Collection.
            </p>
            <p className="text-2xl text-white underline">Shop Now</p>
          </div>
          <div>
            <Image
              src={"/nike-2.png"}
              alt="dsf"
              height={0}
              width={0}
              sizes="100vw"
              className="md:h-[30rem] h-[18rem] w-full object-cover"
            />
          </div>
        </div>

        <div className="relative overflow-hidden rounded-xl">
          <div className="absolute left-[10%] top-[50%] -translate-y-[50%]">
            <p className="text-4xl italic text-white">30% OFF</p>
            <p className="text-center text-4xl font-bold text-white">
              Air Jordan Collection.
            </p>
            <p className="text-2xl text-white underline">Shop Now</p>
          </div>
          <div>
            <Image
              src={"/nike-2.png"}
              alt="dsf"
              height={0}
              width={0}
              sizes="100vw"
              className="h-[30rem] w-[40rem] object-cover"
            />
          </div>
        </div>

        <div className="relative overflow-hidden rounded-xl">
          <div className="absolute left-[10%] top-[50%] -translate-y-[50%]">
            <p className="text-4xl italic text-white">30% OFF</p>
            <p className="text-center text-4xl font-bold text-white">
              Air Jordan Collection.
            </p>
            <p className="text-2xl text-white underline">Shop Now</p>
          </div>
          <div>
            <Image
              src={"/nike-2.png"}
              alt="dsf"
              height={0}
              width={0}
              sizes="100vw"
              className="h-[30rem] w-[40rem] object-cover"
            />
          </div>
        </div>

        <div className="relative overflow-hidden rounded-xl">
          <div className="absolute left-[10%] top-[50%] -translate-y-[50%]">
            <p className="text-4xl italic text-white">30% OFF</p>
            <p className="text-center text-4xl font-bold text-white">
              Air Jordan Collection.
            </p>
            <p className="text-2xl text-white underline">Shop Now</p>
          </div>
          <div>
            <Image
              src={"/nike-3.png"}
              alt="dsf"
              height={0}
              width={0}
              sizes="100vw"
              className="h-[30rem] w-[40rem] object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default SaleBanner;
