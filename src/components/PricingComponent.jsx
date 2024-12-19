import Slider from "./Sliderbar";
import { useState } from "react";

import { BillingType } from "./BillingType";

import { ConfirmActions } from "./ConfirmActions";

export const PricingComponent = () => {
  const [price, setPrice] = useState();
  const [pageViews, setPageViews] = useState();
  const [billingType, setBiilingType] = useState("month");
  const [value, setValue] = useState(50);

  const formatPageViews = (views) => {
    if (views >= 1_000_000) return `${views / 1_000_000}M`;
    if (views >= 1_000) return `${views / 1_000}K`;
    return views.toString();
  };

  return (
    <div className="flex flex-col bg-white rounded-lg md:w-[560px] w-[90%] shadow-md mt-[-100px]  mx-auto">
      <div className="flex flex-col p-8 border-b">
        <div className="flex md:flex-row flex-col gap-4 items-center justify-between w-full">
          <h1 className="text-neutral-grayishBlue md:text-xs text-sm font-bold tracking-widest">
            {pageViews } PAGEVIEWS
          </h1>
          <div className="md:hidden flex flex-col mt-5 w-[80%]">
            <Slider
              value={value}
              setValue={setValue}
              billingType={billingType}
              setPrice={setPrice}
              setPageViews={(views) => setPageViews(formatPageViews(views))}
            />
          </div>
          <div className="flex items-center gap-3">
            <h1 className="font-extrabold text-neutral-darkDesaturatedBlue md:text-4xl text-5xl">
              ${price}
            </h1>
            <span className="text-neutral-grayishBlue text-sm font-medium">
              / {billingType}
            </span>
          </div>
        </div>
        <div className="hidden md:flex md:flex-col mt-5">
          <Slider
            value={value}
            setValue={setValue}
            billingType={billingType}
            setPrice={setPrice}
            setPageViews={(views) => setPageViews(formatPageViews(views))}
          />
        </div>
        <BillingType
          setBillingType={setBiilingType}
          billingType={billingType}
        />
      </div>
      <ConfirmActions />
    </div>
  );
};
