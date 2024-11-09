import Image from "next/image";

const QuoteBanner = () => {
  return (
    <section className="relative my-[15rem] h-[65vh] w-full overflow-hidden">
      <div className="absolute left-[50%] top-[50%] w-[60%] -translate-x-[50%] -translate-y-[50%] space-y-3 text-center">
        <p className="text-4xl font-bold italic text-white">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga ad aut
          temporibus maxime quia placeat totam deserunt labore, modi tempora?
        </p>
        <div>
          <p className="text-2xl text-white">Michael Mitchelle</p>
          <p className="-mt-1 text-xl font-semibold text-white">
            Ui Ux Designer
          </p>
        </div>
      </div>
      <div>
        <Image
          src={"/banner.avif"}
          alt="dsf"
          height={0}
          width={0}
          sizes="100vw"
          className="h-full w-full object-cover"
        />
      </div>
    </section>
  );
};

export default QuoteBanner;
