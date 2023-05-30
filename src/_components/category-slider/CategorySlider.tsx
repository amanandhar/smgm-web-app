import "./CategorySlider.css";

export const CategorySlider = () => {
  return (
    <div className="categories-wrapper">
      <div className="d-flex">
        <button id="left-btn" className="border-0">
          <img
            src="https://vyaparwebsiteimages.vypcdn.in/catalogue/left-arrow.svg"
            alt=""
          />
        </button>
        <div
          className="categories"
          id="categories"
          style={{ marginTop: "16px", marginLeft: "5px" }}
        >
          <div className="active-ctg ctg">All</div>
          <div className="ctg">Spices</div>
          <div className="ctg">Beans</div>
          <div className="ctg">Tooth Paste</div>
          <div className="ctg">Biscuits</div>
          <div className="ctg">Rice</div>
          <div className="ctg">Tea/Coffee</div>
        </div>
        <button id="right-btn" className="border-0">
          <img
            src="https://vyaparwebsiteimages.vypcdn.in/catalogue/right-arrow.svg"
            alt=""
          />
        </button>
      </div>
    </div>
  );
};
