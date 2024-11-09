import Image from "next/image";
import Link from "next/link";
interface IProductProps {
  product: {
    id: string;
    title: string;
    imgSrc: string;
    price: number;
    originalPrice: number;
  };
}

const ProductCard = async ({ product }: IProductProps) => {
  return (
    <Link href={`/product/${product?.id}`}>
      <article className="min-w-[15rem] cursor-pointer overflow-hidden rounded-md border transition-all duration-500 hover:shadow-lg">
        <div className="h-[18rem] w-full">
          <Image
            src={product?.imgSrc}
            alt="pewr"
            width={0}
            height={0}
            sizes="100vw"
            className="h-full w-full object-cover"
          />
        </div>
        <div className="p-3">
          <div className="flex justify-between gap-5 text-center">
            <p className="text-xl capitalize">{product?.title}</p>
            <p className="text-xl font-semibold">
              <span className="mr-2 font-thin line-through">
                ${product?.originalPrice}
              </span>
              ${product?.price}
            </p>
          </div>
          <div className="my-3 flex flex-wrap gap-2">
            <span className="py- rounded bg-gray-300 px-3 text-sm capitalize">
              mens shoes
            </span>
            <span className="py- rounded bg-gray-300 px-3 text-sm capitalize">
              sports shoes
            </span>
            <span className="py- rounded bg-gray-300 px-3 text-sm capitalize">
              jordan
            </span>
            <span className="py- rounded bg-gray-300 px-3 text-sm capitalize">
              red
            </span>
          </div>
          <div className="my-3 flex flex-col gap-1">
            <button className="w-full rounded-full bg-blue-600 px-16 py-3 capitalize text-white">
              buy now
            </button>
            <button className="w-full rounded-full border border-blue-600 px-16 py-3 capitalize text-blue-600">
              add to cart
            </button>
          </div>
        </div>
      </article>
    </Link>
  );
};

export default ProductCard;
