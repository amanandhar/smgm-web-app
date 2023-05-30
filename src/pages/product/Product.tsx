import { useState } from "react";
import { ProductCart } from "../../models/ProductCart.model";
import { CartSummary } from "../../_components/cart-summary";
import { CategorySlider } from "../../_components/category-slider";
import { Header } from "../../_components/header";
import { SearchBar } from "../../_components/search-bar";
import { ProductCatalog } from "../product-catalog";
import "./Product.css";

export const Product = () => {
  const [productCarts, setProductCarts] = useState<ProductCart>({
    productId: 0,
    quantity: 0,
    price: 0,
  });

  const handleOnClick = (productCarts: ProductCart) => {
    setProductCarts(productCarts);
  };

  return (
    <>
      <div className="sticky">
        <Header />
        <SearchBar />
        <CategorySlider />
        <CartSummary productCart={productCarts} />
      </div>

      <ProductCatalog onClick={handleOnClick} />
    </>
  );
};
