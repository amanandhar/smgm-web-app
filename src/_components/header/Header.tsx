import { useEffect, useState } from "react";
import { ProductCart } from "../../models/ProductCart";

export interface IHeaderProps {
  productCart: ProductCart;
}

export const Header = (props: IHeaderProps) => {
  const [productCarts, setProductCarts] = useState<ProductCart[]>([]);
  const [cartQuantity, setCartQuantity] = useState<number>(0);

  useEffect(() => {
    const tempProductCarts = productCarts;
    let tempProductCart = tempProductCarts.find(
      (productCart) => productCart.productId === props.productCart.productId
    );

    if (tempProductCart) {
      tempProductCart.quantity = props.productCart.quantity;
    } else {
      tempProductCarts.push({
        productId: props.productCart.productId,
        quantity: props.productCart.quantity,
      });
    }

    setProductCarts(tempProductCarts);

    let sum = 0;
    tempProductCarts.forEach((x) => {
      sum += x.quantity || 0;
    });

    setCartQuantity(sum);
  }, [props.productCart]);

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container px-4 px-lg-5">
        <label className="navbar-brand">SMGM - Online Grocery Store</label>
        <div>
          <form className="d-flex">
            <button className="btn btn-outline-dark" type="submit">
              <i className="bi-cart-fill me-1"></i>
              Cart
              <span className="badge bg-dark text-white ms-1 rounded-pill">
                {cartQuantity}
              </span>
            </button>
          </form>
        </div>
      </div>
    </nav>
  );
};
