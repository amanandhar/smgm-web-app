import "./AddCartButton.css";

export interface IAddCartButtonProps {
  onClick?: () => void;
}

export const AddCartButton = (props: IAddCartButtonProps) => {
  return (
    <button
      className="addToCartBtn no-outline center"
      style={{ outline: "0", cursor: "pointer", width: "200px" }}
      onClick={props.onClick}
    >
      <img
        src={process.env.PUBLIC_URL + "/images/icons/plus.svg"}
        alt=""
        className="plusIcon"
      />
      Add
    </button>
  );
};
