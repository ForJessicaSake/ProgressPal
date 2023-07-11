import React from "react";
import Button from "../Micro/Button/Button";
import { BsCheck2All } from "react-icons/bs";
import Cta from "../Cta/Cta";

const pricingObject = [
  {
    plan: "Free",
    price: "5",
    description: "Perfect for you and your goals",
    color: "white",
    text: "black",
  },
  {
    plan: "Basic",
    price: "5",
    description: "Perfect for you and your team goals",
    color: "background",
    text: "white",
  },
  {
    plan: "Pro",
    price: "5",
    description: "Perfect for you and your team to set and track goals",
    color: "white",
    text: "black",
  },
];

const Pricing = () => {
  return (
    <main className="mx-auto container text-white bg-black py-20 flex flex-col items-center justify-center">
      <div className="px-5">
        <div className="text-center">
          <h1 className="text-3xl font-semibold">
            Simple <span className="text-background">Pricing </span> For Everyone
          </h1>
          <p className="py-2">
            It doesn't matter the size of your goals, our software would work
            for you!
          </p>
        </div>
        <div className="py-10">
          <PriceComponent />
        </div>
      </div>
    </main>
  );
};

export default Pricing;

const PriceComponent = () => {
  return (
    <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-8">
      {pricingObject.map((deets) => (
        <div
          className={`bg-${deets.color} text-${deets.text} p-6 rounded-2xl xl:w-96`}
        >
          <h1 className="text-5xl">${deets.price}</h1>
          <p className="py-1 font-semibold text-lg">{deets.plan}</p>
          <p className="py-1 text-sm">{deets.description}</p>
          <div className="text-start text-sm leading-10">
            <h3 className="underline font-semibold">Features</h3>
            <p className="flex items-center">
              <BsCheck2All className="mr-2 text-green-400" />
              All your goals organized in one place
            </p>
            <p className="flex items-center">
              <BsCheck2All className="mr-2 text-green-400" />
              Track up to 1000 goals
            </p>
            <p className="flex items-center">
              <BsCheck2All className="mr-2 text-green-400" /> Easily report your
              goal progress
            </p>
            <p className="flex items-center">
              <BsCheck2All className="mr-2 text-green-400" />
              Store all your goals on the cloud.
            </p>
            <p className="flex items-center">
              <BsCheck2All className="mr-2 text-green-400" />
              Document your goal progress
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};
