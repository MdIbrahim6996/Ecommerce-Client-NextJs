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
      <div className="absolute left-[10%] top-[45%] w-[50%] -translate-y-[50%] space-y-3">
        <p className="text-4xl text-orange-500">{headerText}</p>
        <p className="text-8xl font-bold text-white">{mainHeaderText}</p>
        <p className="text-2xl text-white underline">{subHeaderteaxt}</p>
        <p className="my-5 w-fit rounded bg-orange-500 px-12 py-3 text-center text-xl font-bold text-white">
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
          className="h-full w-full object-cover"
        />
      </div>
    </div>
  );
};

export default CarouselComp;
