import { CartSummary } from "../../_components/cart-summary";
import { CategorySlider } from "../../_components/category-slider";
import { Header } from "../../_components/header";
import { SearchBar } from "../../_components/search-bar";
import { ProductCatalog } from "../../_components/product-catalog";
import "./Dashboard.css";

export const Dashboard = () => {
  return (
    <>
      <div className="sticky">
        <Header />
        <SearchBar />
        <CategorySlider />
        <CartSummary />
      </div>
      <ProductCatalog />
    </>
  );
};
