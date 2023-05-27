import { useState } from "react";
import "./ChangeQuantityButton.css";

export interface IChangeQuantityButtonProps {
  onClick: (value: number) => void;
}

export const ChangeQuantityButton = (props: IChangeQuantityButtonProps) => {
  const [value, setValue] = useState<number>(1);

  const handleDecrementOnClick = () => {
    if (value !== 0) {
      setValue((prev) => prev - 1);
      props.onClick(value - 1);
    }
  };

  const handleIncrementOnClick = () => {
    setValue((prev) => prev + 1);
    props.onClick(value + 1);
  };

  return (
    <div className="qttyWrapper632b2d780542f234 qttyWrapper justify-content-around no-outline d-flex">
      <button
        className="decrementBtn center"
        style={{ outline: "0" }}
        onClick={handleDecrementOnClick}
      >
        <img
          src="https://vyaparwebsiteimages.vypcdn.in/catalogue/minus.svg"
          alt=""
          className="w-11 h-11"
        />
      </button>
      <input
        value={value}
        style={{ minWidth: "20px" }}
        inputMode="decimal"
        step="any"
        className="decimal_precision bold text-center no-outline p-0 h-100 form-control qttyValue632b2d780542f234 qttyValue border-0 shadow-none"
      />

      <button
        className="incrementBtn center"
        style={{ outline: "0" }}
        onClick={handleIncrementOnClick}
      >
        <img
          src="https://vyaparwebsiteimages.vypcdn.in/catalogue/plus-blue.svg"
          alt=""
          className="w-11 h-11"
        />
      </button>
    </div>
  );
};
