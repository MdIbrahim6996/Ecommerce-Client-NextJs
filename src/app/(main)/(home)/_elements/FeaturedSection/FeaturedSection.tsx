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
];
const FeaturedSection = async () => {
  return (
    <section className="section-container">
      <div className="text-center">
        <p className="heading">featured products</p>
        <p className="my-2 text-lg">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam,
          asperiores?
        </p>
      </div>
      <div className="my-10 grid grid-cols-1 gap-4 md:grid-cols-3">
        {productList.map((product) => (
          <ProductCard product={product} />
        ))}
      </div>
    </section>
  );
};

export default FeaturedSection;
