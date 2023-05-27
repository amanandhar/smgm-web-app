import { useState } from "react";
import { ProductCart } from "../../models/ProductCart.model";
import { Header } from "../../_components/header";
import { SearchBar } from "../../_components/search-bar";
import { ProductCatalog } from "../product-catalog";
import "./Product.css";

export const Product = () => {
  const [productCarts, setProductCarts] = useState<ProductCart>({
    productId: 0,
    quantity: 0,
  });

  const handleOnClick = (productCarts: ProductCart) => {
    setProductCarts(productCarts);
  };

  return (
    <>
      <div className="sticky">
        <Header productCart={productCarts} />
        <SearchBar />
      </div>

      <ProductCatalog onClick={handleOnClick} />
    </>
  );
};
