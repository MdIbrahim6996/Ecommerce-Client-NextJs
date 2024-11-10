"use client";

import { MenuIcon } from "lucide-react";
import Link from "next/link";
import React, { useState } from "react";

const links = [
  { title: "home", link: "/" },
  { title: "about", link: "/bout" },
  { title: "products", link: "/products" },
  { title: "contact", link: "/contact" },
  { title: "pages", link: "/" },
];

const MobileNav = () => {
  const [show, setShow] = useState(false);
  return (
    <header>
      <nav className="sticky top-0 z-10 flex justify-between border bg-white px-5 py-3 md:hidden">
        <div className="text-2xl font-extrabold uppercase">fusta</div>
        <div className="flex gap-3">
          {/* {links.map((link) => (
        <Link href={link.link} key={link.title}>
          <span className="font-semibold uppercase">{link.title}</span>
        </Link>
      ))} */}
        </div>
        <div onClick={() => setShow(true)}>
          <MenuIcon size={30} absoluteStrokeWidth={true} />
        </div>
      </nav>

      <div
        className={`${show ? "translate-x-0" : "translate-x-[100%]"} fixed right-0 top-0 z-10 h-screen w-screen bg-white p-4 px-10 transition-all duration-500 md:hidden`}
      >
        <div
          onClick={() => setShow(false)}
          className="mb-6 w-fit rounded-xl bg-black px-5 py-3 text-white"
        >
          X
        </div>
        {links.map((link) => (
          <Link
            onClick={() => setShow(false)}
            href={link.link}
            key={link.title}
          >
            <p className="my-2 border-b-2 pb-2 font-semibold uppercase">
              {link.title}
            </p>
          </Link>
        ))}
      </div>
    </header>
  );
};

export default MobileNav;
