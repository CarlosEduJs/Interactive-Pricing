import iconCheck from "../assets/icon-check.svg";

export const ConfirmActions = () => {
  const includedInThePlan = [
    "Unlimited websites",
    "100% data ownership",
    "Email reports ",
  ];

  return (
    <div className="flex flex-col md:flex-row gap-4 p-8 items-center justify-between">
      <div className="flex flex-col gap-3">
        {includedInThePlan.map((benefit, index) => (
          <li className="flex items-center gap-4" key={index}>
            <img src={iconCheck} className="w-3" alt="iconCheck" />
            <span className="font-light text-neutral-grayishBlue md:text-xs text-sm">
              {benefit}
            </span>
          </li>
        ))}
      </div>
      <button className="w-44 h-10 rounded-full bg-neutral-darkDesaturatedBlue text-neutral-lightGrayishBlueToggle hover:text-neutral-veryPaleBlue text-sm  font-extrabold">
        Start Trial
      </button>
    </div>
  );
};
