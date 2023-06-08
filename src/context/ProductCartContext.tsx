import React, { useState } from "react";
import { ProductCart } from "../models/ProductCart.model";

export const ProductCartContext = React.createContext({});

const Provider = (props: {
  children:
    | boolean
    | React.ReactChild
    | React.ReactFragment
    | React.ReactPortal
    | null
    | undefined;
}) => {
  const aCallback = () => {
    alert("HEY FROM METHOD");
    const productCart = {
      productId: 0,
      quantity: 0,
      price: 0,
    } as ProductCart;
    setProductCart(productCart);
  };

  const [productCart, setProductCart] = useState<ProductCart>({
    productId: 0,
    quantity: 0,
    price: 0,
  });

  return (
    <ProductCartContext.Provider
      value={{
        productCart,
        updateproductCart: (productCart: ProductCart) =>
          setProductCart(productCart),
        aCallback: aCallback,
      }}
    >
      {props.children}
    </ProductCartContext.Provider>
  );
};

export default Provider;
