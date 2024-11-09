import Image from "next/image";

const Cart = async () => {
  return (
    <div className="m-10 flex gap-20">
      <div className="w-[60%]">
        <div className="my-3 rounded-md border p-3">
          <p className="text-3xl font-semibold capitalize text-red-500">
            free shipping for members
          </p>
          <p className="text-xl text-gray-500">
            become a Nike member for fast and easy shipping
          </p>
        </div>

        <div className="rounded-md border bg-gray-200 p-3 font-semibold">
          <p className="capitalize">free shipping for members</p>
          <p className="underline">shop our all new markdowns</p>
        </div>

        <article className="mx-1 my-3 flex justify-between">
          <div className="flex gap-3">
            <div className="h-[12rem] w-[12rem] overflow-hidden rounded-md">
              <Image
                src={"/nike-2.png"}
                alt="sf"
                height={0}
                width={0}
                sizes="100vw"
                className="h-full w-full object-cover"
              />
            </div>
            <div className="flex flex-col justify-between">
              <div>
                <p className="text-2xl font-bold capitalize">nike aircourt</p>
                <p className="fon text-lg capitalize text-gray-500">
                  women hard court tennis shoes
                </p>
                <p className="font text-lg capitalize text-gray-500">
                  women hard court tennis shoes
                </p>
                <p className="font text-lg capitalize text-gray-500">
                  SIZE :{" "}
                  <span className="ml-1 rounded bg-gray-200 px-1 text-black">
                    S
                  </span>
                </p>
              </div>
              <div className="">
                <div className="flex space-x-4">
                  <p className="font text-lg capitalize text-gray-500 underline">
                    move to favourites
                  </p>
                  <p className="font text-lg capitalize text-gray-500 underline">
                    remove
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="text-2xl font-semibold">$12.00</div>
        </article>
      </div>
      <div className="grow space-y-5">
        <p className="text-3xl font-semibold">Summary</p>
        <div className="flex justify-between text-lg">
          <p className="">Subtotal</p>
          <p className="text-3x">$12.00</p>
        </div>
        <div className="flex justify-between text-lg">
          <p className="">Estimated Shipping and Handling</p>
          <p className="text-3x">$12.00</p>
        </div>
        <div className="flex justify-between text-lg">
          <p className="">Estimated tax</p>
          <p className="text-3x">$12.00</p>
        </div>
        <div className="my-3 flex justify-between border-y-2 py-3 text-lg font-semibold">
          <p className="">Total</p>
          <p className="">$12.00</p>
        </div>
        <div>
          <div className="space-y-2">
            <p className="rounded-full bg-black p-5 text-center font-semibold uppercase text-white">
              checkout
            </p>
            <p className="rounded-full border-2 border-gray-300 bg-gray-100 p-5 text-center font-semibold uppercase text-blue-500">
              paypal
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
