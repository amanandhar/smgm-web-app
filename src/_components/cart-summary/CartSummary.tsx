import { useEffect, useState, useContext } from "react";
import { useHistory } from "react-router-dom";
import { IProductContext, ProductContext } from "../../context/ProductContext";
import "./CartSummary.css";

export const CartSummary = () => {
  const history = useHistory();
  const productContext = useContext<IProductContext>(ProductContext);

  const [cartQuantity, setCartQuantity] = useState<number>(0);
  const [cartPrice, setCartPrice] = useState<number>(0);

  useEffect(() => {
    let totalQuantity = 0;
    let totalPrice = 0;

    const products = productContext.contextProducts;

    products.forEach((product) => {
      totalQuantity += product.addedQuantity || 0;
      totalPrice += (product.addedQuantity || 0) * (product.price || 0);
    });

    setCartQuantity(totalQuantity);
    setCartPrice(totalPrice);
  }, [productContext.contextProducts]);

  const handleViewCartClick = () => {
    history.push("cart");
  };

  return (
    <>
      {productContext.contextProducts.length > 0 && (
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
                src={process.env.PUBLIC_URL + "/images/icons/ellipse.svg"}
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
                src={process.env.PUBLIC_URL + "/images/icons/cart.svg"}
                alt=""
                className="mr-3"
              />{" "}
              <span
                style={{ paddingLeft: "5px" }}
                onClick={handleViewCartClick}
              >
                View cart
              </span>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
