import ProductCard from "@/components/ProductCard/ProductCard";

const productList = [
  {
    id: "1",
    title: "shoe",
    originalPrice: 56,
    price: 34,
    imgSrc: "/shoe.png",
  },
  {
    id: "2",
    title: "shoe",
    originalPrice: 56,
    price: 34,
    imgSrc: "/sports.jpg",
  },
  {
    id: "3",
    title: "shoe",
    originalPrice: 56,
    price: 34,
    imgSrc: "/nike-2.png",
  },
  {
    id: "1",
    title: "shoe",
    originalPrice: 56,
    price: 34,
    imgSrc: "/shoe.png",
  },
  {
    id: "2",
    title: "shoe",
    originalPrice: 56,
    price: 34,
    imgSrc: "/sports.jpg",
  },
  {
    id: "3",
    title: "shoe",
    originalPrice: 56,
    price: 34,
    imgSrc: "/nike-2.png",
  },
];

const Products = async () => {
  return (
    <section className="m-[5rem] flex gap-10">
      <aside className="sticky top-[10rem] h-fit w-[16rem]">
        <p className="text-cente mb-3 text-3xl font-semibold">Filters</p>
        <div className="space-y-3">
          <div>
            <p className="mb-1 text-lg font-semibold capitalize">
              special offers
            </p>
            <div>
              <div className="flex items-center space-x-2">
                <input type="checkbox" name="free" id="free" />
                <label htmlFor="free" className="capitalize">
                  free shipping
                </label>
              </div>

              <div className="flex items-center space-x-2">
                <input type="checkbox" name="free" id="free" />
                <label htmlFor="free" className="capitalize">
                  on sale
                </label>
              </div>
              <div className="flex items-center space-x-2">
                <input type="checkbox" name="free" id="free" />
                <label htmlFor="free" className="capitalize">
                  on discount
                </label>
              </div>
              <div className="flex items-center space-x-2">
                <input type="checkbox" name="free" id="free" />
                <label htmlFor="free" className="capitalize">
                  dhamaka offer
                </label>
              </div>
            </div>
          </div>

          <div className="space-y-">
            <p className="mb-1 text-lg font-semibold capitalize">
              special offers
            </p>
            <div>
              <div className="flex items-center space-x-2">
                <input type="checkbox" name="free" id="free" />
                <label htmlFor="free" className="capitalize">
                  free shipping
                </label>
              </div>

              <div className="flex items-center space-x-2">
                <input type="checkbox" name="free" id="free" />
                <label htmlFor="free" className="capitalize">
                  on sale
                </label>
              </div>
              <div className="flex items-center space-x-2">
                <input type="checkbox" name="free" id="free" />
                <label htmlFor="free" className="capitalize">
                  on discount
                </label>
              </div>
              <div className="flex items-center space-x-2">
                <input type="checkbox" name="free" id="free" />
                <label htmlFor="free" className="capitalize">
                  dhamaka offer
                </label>
              </div>
            </div>
          </div>

          <div>
            <p className="mb-1 text-lg font-semibold capitalize">
              special offers
            </p>
            <div>
              <div className="flex items-center space-x-2">
                <input type="checkbox" name="free" id="free" />
                <label htmlFor="free" className="capitalize">
                  free shipping
                </label>
              </div>

              <div className="flex items-center space-x-2">
                <input type="checkbox" name="free" id="free" />
                <label htmlFor="free" className="capitalize">
                  on sale
                </label>
              </div>
              <div className="flex items-center space-x-2">
                <input type="checkbox" name="free" id="free" />
                <label htmlFor="free" className="capitalize">
                  on discount
                </label>
              </div>
              <div className="flex items-center space-x-2">
                <input type="checkbox" name="free" id="free" />
                <label htmlFor="free" className="capitalize">
                  dhamaka offer
                </label>
              </div>
            </div>
          </div>

          <div>
            <p className="mb-1 text-lg font-semibold capitalize">
              special offers
            </p>
            <div>
              <div className="flex items-center space-x-2">
                <input type="checkbox" name="free" id="free" />
                <label htmlFor="free" className="capitalize">
                  free shipping
                </label>
              </div>

              <div className="flex items-center space-x-2">
                <input type="checkbox" name="free" id="free" />
                <label htmlFor="free" className="capitalize">
                  on sale
                </label>
              </div>
              <div className="flex items-center space-x-2">
                <input type="checkbox" name="free" id="free" />
                <label htmlFor="free" className="capitalize">
                  on discount
                </label>
              </div>
              <div className="flex items-center space-x-2">
                <input type="checkbox" name="free" id="free" />
                <label htmlFor="free" className="capitalize">
                  dhamaka offer
                </label>
              </div>
            </div>
          </div>
          <div>
            <button className="rounded-md bg-black px-8 py-2 capitalize text-white">
              apply filters
            </button>
          </div>
        </div>
      </aside>
      <div className="grid grid-cols-3 gap-5">
        {productList.map((product) => (
          <ProductCard product={product} />
        ))}
      </div>
    </section>
  );
};

export default Products;
