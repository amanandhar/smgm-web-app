import { useState } from "react";
import { CartSummary } from "../../_components/cart-summary";
import { ProductCatalog } from "../../_components/product-catalog";
import "./Home.css";

export const Home = () => {
  const [searchText, setSearchText] = useState<string>("");
  const [categoryId, setCategoryId] = useState<number>(0);

  const handleSearchBarChange = (value: string) => {
    setSearchText(value);
  };

  const handleCategoryClick = (value: number) => {
    setCategoryId(value);
  };

  return (
    <>
      <div>
        <CartSummary />
      </div>
      <ProductCatalog searchBy={searchText} categoryId={categoryId} />
    </>
  );
};
