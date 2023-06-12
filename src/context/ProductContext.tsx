import React, { useState } from "react";
import { Product } from "../models/Product.model";

export interface IProductContext {
  contextProducts: Product[];
  updateContextProducts: (products: Product[]) => void;
}

export const ProductContext = React.createContext<IProductContext>({
  contextProducts: [],
  updateContextProducts: (products: Product[]) => console.log(products),
});

export const ProductContextProvider = (props: {
  children:
    | boolean
    | React.ReactChild
    | React.ReactFragment
    | React.ReactPortal
    | null
    | undefined;
}) => {
  const [contextProducts, setContextProducts] = useState<Product[]>([]);

  const updateContextProducts = (products: Product[]) => {
    const tempProducts = [...products];
    setContextProducts(tempProducts);
  };

  return (
    <ProductContext.Provider
      value={{
        contextProducts: contextProducts,
        updateContextProducts: updateContextProducts,
      }}
    >
      {props.children}
    </ProductContext.Provider>
  );
};
