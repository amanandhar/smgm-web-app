import "./ItemButton.css";

export const ItemButton = () => {
  return (
    <div className="qttyWrapper632b2d780542f234 qttyWrapper justify-content-around no-outline d-flex">
      <button className="decrementBtn center" style={{ outline: "0" }}>
        <img
          src="https://vyaparwebsiteimages.vypcdn.in/catalogue/minus.svg"
          alt=""
          className="w-11 h-11"
        />
      </button>
      <input
        style={{ minWidth: "20px" }}
        inputMode="decimal"
        step="any"
        className="decimal_precision bold text-center no-outline p-0 h-100 form-control qttyValue632b2d780542f234 qttyValue border-0 shadow-none"
      />

      <button className="incrementBtn center" style={{ outline: "0" }}>
        <img
          src="https://vyaparwebsiteimages.vypcdn.in/catalogue/plus-blue.svg"
          alt=""
          className="w-11 h-11"
        />
      </button>
    </div>
  );
};
