import { useEffect, useState } from "react";
import { ProductCart } from "../../models/ProductCart.model";
import "./CartSummary.css";

export interface ICartSummaryProps {
  productCart: ProductCart;
}

export const CartSummary = (props: ICartSummaryProps) => {
  const [productCarts, setProductCarts] = useState<ProductCart[]>([]);
  const [cartQuantity, setCartQuantity] = useState<number>(0);
  const [cartPrice, setCartPrice] = useState<number>(0);

  useEffect(() => {
    const tempProductCarts = productCarts;
    let tempProductCart = tempProductCarts.find(
      (productCart) => productCart.productId === props.productCart.productId
    );

    if (tempProductCart) {
      tempProductCart.quantity = props.productCart.quantity;
      tempProductCart.price = props.productCart.price;
    } else {
      tempProductCarts.push({
        productId: props.productCart.productId,
        quantity: props.productCart.quantity,
        price: props.productCart.price,
      });
    }

    setProductCarts(tempProductCarts);

    let totalQuantity = 0;
    let totalPrice = 0;
    tempProductCarts.forEach((x) => {
      totalQuantity += x.quantity || 0;
      totalPrice += (x.quantity || 0) * (x.price || 0);
    });

    setCartQuantity(totalQuantity);
    setCartPrice(totalPrice);
  }, [props.productCart]);

  return (
    <div>
      <div
        className="d-flex justify-content-between fixed-bottom px-4 fixed-bottom viewCart"
        style={{ marginBottom: "10px" }}
      >
        <div className="d-flex text-white">
          <div className="numberOfItems cart-items-count fs-12">
            {cartQuantity} Items
          </div>
          <img
            src="https://vyaparwebsiteimages.vypcdn.in/catalogue/ellipse.svg"
            alt=""
            className="mx-2"
            style={{ width: "4px" }}
          />
          <div
            className="totalPrice bold text-truncate"
            style={{ fontSize: "14px" }}
            title={cartPrice.toString()}
          >
            Rs. {cartPrice}
          </div>
        </div>
        <div className="border-left border-white d-none d-sm-block m-2"></div>
        <div className="text-decoration-none text-white bold fs-15">
          <span
            className="badge badge-light badge-pill bg-danger text-white border border-white"
            style={{ position: "absolute", margin: "8px 10px" }}
          >
            {cartQuantity}
          </span>
          <img
            src="https://vyaparwebsiteimages.vypcdn.in/catalogue/cart.svg"
            alt=""
            className="mr-3"
          />{" "}
          <span style={{ paddingLeft: "5px" }}>View cart</span>
        </div>
      </div>
    </div>
  );
};
