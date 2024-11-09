"use client";
import React, { useState } from "react";
import CarouselComp from "./CarouselComp";

const list = [
  {
    id: 1,
    component: (
      <CarouselComp
        headerText="Top Selling!!!"
        mainHeaderText="New Collection"
        subHeaderteaxt="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Impedit, omnis. Adipisicing elit. Impedit, omnis"
        btntext="Shop Now"
      />
    ),
  },
  {
    id: 2,
    component: (
      <CarouselComp
        headerText="Top Selling!!!"
        mainHeaderText="New Collection"
        subHeaderteaxt="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Impedit, omnis. Adipisicing elit. Impedit, omnis"
        btntext="Shop Now"
        imgSrc="/nike-2.png"
      />
    ),
  },
  {
    id: 3,
    component: (
      <CarouselComp
        headerText="Top Selling!!!"
        mainHeaderText="New Collection"
        subHeaderteaxt="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Impedit, omnis. Adipisicing elit. Impedit, omnis"
        btntext="Shop Now"
        imgSrc="/nike-3.png"
      />
    ),
  },
];

const HeroSection = () => {
  let [count, setCount] = useState(0);

  return (
    <div>
      <div className="h-[90vh] bg-primary">
        {list[count].component}
        <button
          onClick={() =>
            setCount((prev) =>
              prev === 0 ? (prev = list.length - 1) : prev - 1,
            )
          }
          className="absolute left-5 top-[50%] rounded-full bg-black/30 p-6 text-white"
        >
          &larr;
        </button>
        <button
          onClick={() =>
            setCount((prev) =>
              prev === list.length - 1 ? (prev = 0) : prev + 1,
            )
          }
          className="absolute right-5 top-[50%] rounded-full bg-black/30 p-6 text-white"
        >
          &rarr;
        </button>
      </div>
    </div>
  );
};

export default HeroSection;
