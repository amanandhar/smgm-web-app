import "./AddCartButton.css";

export const AddCartButton = () => {
  return (
    <button className="addToCartBtn no-outline center" style={{ outline: "0" }}>
      <img
        src="https://vyaparwebsiteimages.vypcdn.in/catalogue/plus-blue.svg"
        alt=""
        className="plusIcon"
      />
      Add
    </button>
  );
};
