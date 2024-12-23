import { useState, useEffect, useMemo } from "react";
import sliderIcon from "../assets/icon-slider.svg";
import { pageViewRules } from "../PageviewsRules";

function Slider({ setPrice, setPageViews, billingType, value, setValue }) {
  const rules = pageViewRules();
  const steps = useMemo(
    () => rules.map((_, index) => (index * 100) / (rules.length - 1)),
    [rules]
  );
  const [isDragging, setIsDragging] = useState(false);

  const updateValues = (val) => {
    const closestIndex = steps.reduce((prevIndex, currStep, currIndex) =>
      Math.abs(currStep - val) < Math.abs(steps[prevIndex] - val)
        ? currIndex
        : prevIndex
    );

    const { pageViews, pricePerMonth } = rules[closestIndex];
    const adjustedPrice =
      billingType === "yearly" ? pricePerMonth * 12 * 0.75 : pricePerMonth;

    setPageViews(pageViews);
    setPrice(adjustedPrice.toFixed(2));
  };

  const updateValue = (clientX, slider) => {
    const rect = slider.getBoundingClientRect();
    const rawValue = ((clientX - rect.left) / rect.width) * 100;
    const closestStep = steps.reduce((prev, curr) =>
      Math.abs(curr - rawValue) < Math.abs(prev - rawValue) ? curr : prev
    );
    setValue(closestStep);
    updateValues(closestStep);
  };

  const handleStart = () => setIsDragging(true);

  const handleMove = (e) => {
    if (!isDragging) return;
    const slider = document.getElementById("slider-track");
    if (e.touches) {
      updateValue(e.touches[0].clientX, slider);
    } else {
      updateValue(e.clientX, slider);
    }
  };

  const handleEnd = () => setIsDragging(false);

  const handleKeyDown = (e) => {
    if (e.key === "ArrowRight") {
      const newValue = Math.min(100, value + (steps[1] - steps[0]));
      setValue(newValue);
      updateValues(newValue);
    } else if (e.key === "ArrowLeft") {
      const newValue = Math.max(0, value - (steps[1] - steps[0]));
      setValue(newValue);
      updateValues(newValue);
    }
  };

  useEffect(() => {
    const handleGlobalMouseMove = (e) => handleMove(e);
    const handleGlobalMouseUp = () => handleEnd();

    if (isDragging) {
      window.addEventListener("mousemove", handleGlobalMouseMove);
      window.addEventListener("mouseup", handleGlobalMouseUp);
      window.addEventListener("touchmove", handleGlobalMouseMove);
      window.addEventListener("touchend", handleGlobalMouseUp);
    }

    return () => {
      window.removeEventListener("mousemove", handleGlobalMouseMove);
      window.removeEventListener("mouseup", handleGlobalMouseUp);
      window.removeEventListener("touchmove", handleGlobalMouseMove);
      window.removeEventListener("touchend", handleGlobalMouseUp);
    };
  }, [isDragging]);

  useEffect(() => {
    updateValues(value);
  }, [billingType]);

  return (
    <div
      id="slider-track"
      className="relative h-12 flex items-center"
      onMouseMove={handleMove}
      onTouchMove={handleMove}
    >
      <div className="absolute top-1/2 -translate-y-1/2 left-0 w-full h-2 bg-neutral-lightGrayishBlueEmpty rounded-full" />

      <div
        className="absolute top-1/2 -translate-y-1/2 left-0 h-2 bg-primary-softCyan rounded-full"
        style={{ width: `${value}%` }}
      />

      <div
        className="absolute z-10 focus:outline-none transition-transform"
        style={{
          left: `calc(${value}% - 12px)`,
          top: "50%",
          transform: "translateY(-50%)",
        }}
        tabIndex={0}
        role="slider"
        aria-valuemin={0}
        aria-valuemax={100}
        aria-valuenow={value}
        aria-label="Slider de Pageviews"
        onKeyDown={handleKeyDown}
        onMouseDown={handleStart}
        onTouchStart={handleStart}
      >
        <div className="relative w-10 h-10 flex items-center justify-center rounded-full bg-primary-strongCyan shadow-xl cursor-pointer hover:scale-110 transition-transform duration-200 focus:ring-4 focus:bg-primary-strongCyan shadow-primary-softCyan">
          <img src={sliderIcon} className="w-5" alt="Slider Icon" />
        </div>
      </div>

      <input
        type="range"
        min="0"
        max="100"
        step={steps[1] - steps[0]}
        value={value}
        onChange={(e) => {
          const val = parseInt(e.target.value, 10);
          setValue(val);
          updateValues(val);
        }}
        className="absolute top-0 left-0 w-full h-full opacity-0 cursor-pointer"
      />
    </div>
  );
}

export default Slider;
