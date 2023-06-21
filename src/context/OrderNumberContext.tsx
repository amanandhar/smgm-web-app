import React, { useState } from "react";

export interface IOrderNumberContext {
  contextOrderNumber: string;
  updateContextOrderNumber: (orderNumber: string) => void;
}

export const OrderNumberContext = React.createContext<IOrderNumberContext>({
  contextOrderNumber: "",
  updateContextOrderNumber: (orderNumber: string) => console.log(orderNumber),
});

export const OrderNumberContextProvider = (props: {
  children:
    | boolean
    | React.ReactChild
    | React.ReactFragment
    | React.ReactPortal
    | null
    | undefined;
}) => {
  const [contextOrderNumber, setContextOrderNumber] = useState<string>("");

  const updateContextOrderNumber = (orderNumber: string) => {
    setContextOrderNumber(orderNumber);
  };

  return (
    <OrderNumberContext.Provider
      value={{
        contextOrderNumber: contextOrderNumber,
        updateContextOrderNumber: updateContextOrderNumber,
      }}
    >
      {props.children}
    </OrderNumberContext.Provider>
  );
};
