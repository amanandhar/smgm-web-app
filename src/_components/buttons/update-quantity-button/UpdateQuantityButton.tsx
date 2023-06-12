import { useState } from "react";
import "./UpdateQuantityButton.css";

export interface IUpdateQuantityButtonProps {
  value?: number;
  onClick: (value: number) => void;
}

export const UpdateQuantityButton = (props: IUpdateQuantityButtonProps) => {
  const [value, setValue] = useState<number>(props.value || 1);

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
        style={{ outline: "0", cursor: "pointer" }}
        onClick={handleDecrementOnClick}
      >
        <img
          src={process.env.PUBLIC_URL + "/images/icons/minus.svg"}
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
        style={{ outline: "0", cursor: "pointer" }}
        onClick={handleIncrementOnClick}
      >
        <img
          src={process.env.PUBLIC_URL + "/images/icons/plus.svg"}
          alt=""
          className="w-11 h-11"
        />
      </button>
    </div>
  );
};
