import React, { useState } from "react";

export interface ICategoryIdContext {
  contextCategoryId: number;
  updateContextCategoryId: (categoryId: number) => void;
}

export const CategoryIdContext = React.createContext<ICategoryIdContext>({
  contextCategoryId: 0,
  updateContextCategoryId: (categoryId: number) => console.log(categoryId),
});

export const CategoryIdContextProvider = (props: {
  children:
    | boolean
    | React.ReactChild
    | React.ReactFragment
    | React.ReactPortal
    | null
    | undefined;
}) => {
  const [contextCategoryId, setContextCategoryId] = useState<number>(0);

  const updateContextCategoryId = (categoryId: number) => {
    setContextCategoryId(categoryId);
  };

  return (
    <CategoryIdContext.Provider
      value={{
        contextCategoryId: contextCategoryId,
        updateContextCategoryId: updateContextCategoryId,
      }}
    >
      {props.children}
    </CategoryIdContext.Provider>
  );
};
