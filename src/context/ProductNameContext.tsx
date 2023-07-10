import React, { useState } from "react";

export interface IProductNameContext {
  contextProductName: string;
  updateContextProductName: (productName: string) => void;
}

export const ProductNameContext = React.createContext<IProductNameContext>({
  contextProductName: "",
  updateContextProductName: (productName: string) => console.log(productName),
});

export const ProductNameContextProvider = (props: {
  children:
    | boolean
    | React.ReactChild
    | React.ReactFragment
    | React.ReactPortal
    | null
    | undefined;
}) => {
  const [contextProductName, setContextProductName] = useState<string>("");

  const updateContextProductName = (productName: string) => {
    setContextProductName(productName);
  };

  return (
    <ProductNameContext.Provider
      value={{
        contextProductName: contextProductName,
        updateContextProductName: updateContextProductName,
      }}
    >
      {props.children}
    </ProductNameContext.Provider>
  );
};
