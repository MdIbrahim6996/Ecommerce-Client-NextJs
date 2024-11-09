import { User, ShoppingCart, SearchCheckIcon } from "lucide-react";
import Link from "next/link";

const links = [
  { title: "home", link: "/" },
  { title: "about", link: "/bout" },
  { title: "products", link: "/products" },
  { title: "contact", link: "/contact" },
  { title: "pages", link: "/" },
];
const Navbar = async () => {
  return (
    <nav className="sticky top-0 z-10 flex justify-between border bg-white px-20 py-6">
      <div className="text-2xl font-extrabold uppercase">fusta</div>
      <div className="flex gap-3">
        {links.map((link) => (
          <Link href={link.link} key={link.title}>
            <span className="font-semibold uppercase">{link.title}</span>
          </Link>
        ))}
      </div>
      <div className="flex gap-3">
        <SearchCheckIcon size={30} absoluteStrokeWidth={true} />
        <User size={30} absoluteStrokeWidth={true} />
        <ShoppingCart size={30} absoluteStrokeWidth={true} />
      </div>
    </nav>
  );
};

export default Navbar;
