import Image from "next/image";
interface ICarouselCompProps {
  headerText: string;
  mainHeaderText: string;
  subHeaderteaxt: string;
  btntext: string;
  imgSrc?: string;
}
const CarouselComp = ({
  headerText,
  mainHeaderText,
  subHeaderteaxt,
  btntext,
  imgSrc = "/nike.png",
}: ICarouselCompProps) => {
  return (
    <div className="relative h-[90vh] w-full overflow-hidden">
      <div className="absolute left-[5%] top-[45%] w-[80%] -translate-y-[50%] space-y-3 md:left-[10%] md:w-[50%]">
        <p className="text-2xl text-orange-500 md:text-4xl">{headerText}</p>
        <p className="text-6xl font-bold text-white md:text-8xl">
          {mainHeaderText}
        </p>
        <p className="text-xl text-white underline">{subHeaderteaxt}</p>
        <p className="my-5 w-fit rounded bg-orange-500 px-12 py-3 text-center font-bold text-white md:text-xl">
          {btntext} &rarr;
        </p>
      </div>
      <div>
        <Image
          src={imgSrc}
          alt="dsf"
          height={0}
          width={0}
          sizes="100vw"
          className="h-[90vh] w-full object-cover"
        />
      </div>
    </div>
  );
};

export default CarouselComp;
