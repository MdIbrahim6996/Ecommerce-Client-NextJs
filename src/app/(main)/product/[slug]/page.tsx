import Footer from "@/components/shared/Footer/Footer";
import Image from "next/image";
import React from "react";

const ProductDetails = () => {
  return (
    <section className="container mx-auto py-10">
      <div className="flex gap-10">
        <div>
          <div className="h-[30rem] w-[40rem]">
            <Image
              src={"/nike.png"}
              alt="pewr"
              width={0}
              height={0}
              sizes="100vw"
              className="h-full w-full rounded-md object-cover"
            />
          </div>

          <div className="my-2 grid w-[40rem] grid-cols-4 gap-2">
            <div>
              <Image
                src={"/nike-2.png"}
                alt="pewr"
                width={0}
                height={0}
                sizes="100vw"
                className="h-full w-full rounded-md object-cover"
              />
            </div>
            <div>
              <Image
                src={"/nike-3.png"}
                alt="pewr"
                width={0}
                height={0}
                sizes="100vw"
                className="h-full w-full rounded-md object-cover"
              />
            </div>
            <div>
              <Image
                src={"/nike.png"}
                alt="pewr"
                width={0}
                height={0}
                sizes="100vw"
                className="h-full w-full rounded-md object-cover"
              />
            </div>
            <div>
              <Image
                src={"/man.jfif"}
                alt="pewr"
                width={0}
                height={0}
                sizes="100vw"
                className="h-full w-full rounded-md object-cover"
              />
            </div>
          </div>
        </div>
        <div className="space-y-">
          <h1 className="text-4xl font-bold capitalize">
            nike jordan air max pro
          </h1>
          <p className="my-4 text-3xl font-semibold text-blue-500">
            <span className="mr-2 text-base text-black line-through">
              $15,000
            </span>
            $12,000
          </p>
          <p className="my-4 text-lg">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempore
            quaerat nam reiciendis sed molestias similique. Possimus excepturi
            dolorem vero quasi quod error ipsam. Placeat ea dicta nobis
            temporibus vel est! Excepturi, possimus. Lorem ipsum, dolor sit amet
            consectetur adipisicing elit. Tempore corrupti, error asperiores
            molestias similique. Possimus excepturi nemo accusamus vitae. Est,
            alias natus corrupti explicabo at rerum, dolorem vero quasi quod
            error ipsam. Placeat ea dicta nobis temporibus vel est! Excepturi,
            possimus. Lorem ipsum, dolor sit amet consectetur adipisicing elit.
            Tempore corrupti, error asperiores aliquid nostrum esse placeat
            aspernatur quaerat nam reiciendis sed molestias similique. Possimus
            excepturi nemo accusamus vitae. Est, alias natus corrupti explicabo
            at rerum, dolorem vero quasi quod error ipsam. Placeat ea dicta
            nobis temporibus vel est! Excepturi, possimus.
          </p>
          <div className="my-4">
            <p className="text-xl uppercase">size</p>
            <div className="mt-2 space-x-3">
              <span className="rounded-sm bg-gray-200 px-5 py-2">S</span>
              <span className="rounded-sm bg-gray-200 px-5 py-2">M</span>
              <span className="rounded-sm bg-gray-200 px-5 py-2">L</span>
              <span className="rounded-sm bg-gray-200 px-5 py-2">XL</span>
            </div>
          </div>

          <div className="my-4">
            <label id="quantity" className="text-xl uppercase">
              quantity:
            </label>
            <input
              type="number"
              name=""
              id="quantity"
              className="my-3 ml-2 w-20 rounded border p-2 outline-none"
            />
          </div>
          <div className="my-8 space-x-3">
            <button className="rounded bg-blue-300 px-8 py-2 text-lg capitalize">
              buy now
            </button>
            <button className="rounded bg-blue-300 px-8 py-2 text-lg capitalize">
              add to cart
            </button>
          </div>
        </div>
      </div>
      <div>
        <div className="border-b">
          <div className="duration-750 flex justify-center space-x-4 capitalize transition-all">
            <p className="border-yellow-500 p-3 text-2xl hover:border-b">
              description
            </p>
            <p className="border-yellow-500 p-3 text-2xl hover:border-b">
              description
            </p>
            <p className="border-yellow-500 p-3 text-2xl hover:border-b">
              description
            </p>
          </div>
        </div>
        <article className="my-4 text-lg">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed doloribus
          atque fuga. Saepe velit quasi reprehenderit eligendi voluptates
          praesentium deleniti aut sapiente ab illo animi incidunt, neque id
          pariatur excepturi nulla vel magnam facilis fugiat dolorum atque
          porro? Blanditiis reprehenderit vel voluptas itaque dolor animi
          dolores, rem quod praesentium odio odit cupiditate commodi nesciunt
          doloribus sunt tenetur unde enim eaque suscipit in natus alias,
          explicabo corporis facere! Praesentium, quam soluta quidem vero
          mollitia velit ipsam reprehenderit vitae nesciunt repellendus rem
          eveniet ducimus reiciendis, ad ullam explicabo possimus distinctio,
          adipisci necessitatibus minima iste eaque. Cupiditate numquam porro
          assumenda repudiandae nam enim deleniti, ullam accusamus eveniet
          necessitatibus facilis nisi quidem perferendis doloribus! Ab nulla
          blanditiis suscipit officia eos tempora praesentium placeat iure et
          voluptate numquam nesciunt, facilis animi necessitatibus enim
          assumenda ut voluptates quae perspiciatis? Placeat quia, soluta
          numquam blanditiis saepe hic. Ducimus, deleniti est ab ratione
          adipisci asperiores assumenda laudantium natus perferendis magnam
          reprehenderit eligendi aliquid ipsam, illum quidem ipsa doloribus ea
          tempora! Ab possimus culpa deserunt voluptatibus sunt odio repellat
          explicabo sapiente ad distinctio delectus, sint omnis officia nisi
          maxime iusto, nostrum provident autem similique ipsam sed molestiae ea
          iste natus. Ut mollitia animi sed voluptatem qui, illo beatae
          perferendis?
        </article>
        <article></article>
        <article></article>
      </div>
    </section>
  );
};

export default ProductDetails;
