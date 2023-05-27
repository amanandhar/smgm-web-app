import { useState } from "react";
import { NavigationBar } from "../../_components/navigation-bar";
import { SearchBar } from "../../_components/search-bar";
import { ProductCatalog } from "../product-catalog";
import "./Product.css";

export const Product = () => {
  const [cartQuantity, setCartQuantity] = useState<number>(0);

  const handleOnClick = (value: number) => {
    setCartQuantity(value);
  };

  return (
    <>
      <div className="sticky">
        <NavigationBar CartQuantity={cartQuantity} />
        <SearchBar />
        {/* <CategoryCarousel /> */}
      </div>

      <ProductCatalog onClick={handleOnClick} />
    </>
  );
};
