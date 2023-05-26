import { CategoryCarousel } from "../../_components/category-carousel";
import { NavigationBar } from "../../_components/navigation-bar";
import { SearchBar } from "../../_components/search-bar";
import { ProductCatalog } from "../product-catalog";
import "./Product.css";

export const Product = () => {
  return (
    <>
      <div className="sticky">
        <NavigationBar />
        <SearchBar />
        {/* <CategoryCarousel /> */}
      </div>

      <ProductCatalog />
    </>
  );
};
