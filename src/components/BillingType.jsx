import { Switch } from "@material-tailwind/react";

export const BillingType = ({ setBillingType, billingType }) => {
  const handleSetBillingType = () => {
    setBillingType(billingType === "month" ? "yearly" : "month");
  };
  return (
    <div className="flex py-6  w-full items-center justify-center gap-3">
      <h1 className="text-xs text-neutral-grayishBlue font-medium">
        Monthly Billing
      </h1>
      <Switch
        id="custom-switch-component"
        ripple={false}
        className="h-full w-full checked:bg-primary-strongCyan"
        containerProps={{
          className: "w-12 h-6",
        }}
        circleProps={{
          className:
            "h-4 w-4 bg-white absolute left-[4px] top-[50%] translate-y-[-50%] transition-transform before:hidden peer-checked:translate-x-[23px] border-none",
        }}
        onChange={handleSetBillingType}
      />
      <div className="flex items-center gap-2">
        <h1 className="text-xs text-neutral-grayishBlue font-medium">
          Yearly Billing
        </h1>
        <span className="hidden md:flex rounded-full text-[10px] bg-primary-lightRed/20 text-primary-lightRed px-1 font-extrabold">
          25% discount
        </span>
        <span className="flex md:hidden rounded-full text-[10px] bg-primary-lightRed/20 text-primary-lightRed md:px-1 px-2 font-extrabold">
          -25% 
        </span>
      </div>
    </div>
  );
};
