import "./AddCartButton.css";

export interface IAddCartButtonProps {
  onClick?: () => void;
}

export const AddCartButton = (props: IAddCartButtonProps) => {
  return (
    <button
      className="addToCartBtn no-outline center"
      style={{ outline: "0" }}
      onClick={props.onClick}
    >
      <img
        src="https://vyaparwebsiteimages.vypcdn.in/catalogue/plus-blue.svg"
        alt=""
        className="plusIcon"
      />
      Add
    </button>
  );
};
