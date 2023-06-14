import { CartSummary } from "../../_components/cart-summary";
import { CategorySlider } from "../../_components/category-slider";
import { Header } from "../../_components/header";
import { SearchBar } from "../../_components/search-bar";
import { ProductCatalog } from "../../_components/product-catalog";
import "./Dashboard.css";
import { useState } from "react";

export const Dashboard = () => {
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
      <div className="sticky-container">
        <Header />
        <SearchBar onChange={handleSearchBarChange} />
        <CategorySlider onClick={handleCategoryClick} />
        <CartSummary />
      </div>
      <ProductCatalog searchText={searchText} categoryId={categoryId} />
    </>
  );
};
