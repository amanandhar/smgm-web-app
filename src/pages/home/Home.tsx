import { useState, useEffect, useContext } from "react";
import {
  CategoryIdContext,
  ICategoryIdContext,
} from "../../context/CategoryIdContext";
import {
  ProductNameContext,
  IProductNameContext,
} from "../../context/ProductNameContext";
import { CartSummary } from "../../_components/cart-summary";
import { ProductCatalog } from "../../_components/product-catalog";
import "./Home.css";

export const Home = () => {
  const [categoryId, setCategoryId] = useState<number>(0);
  const [searchText, setSearchText] = useState<string>("");

  const categoryIdContext = useContext<ICategoryIdContext>(CategoryIdContext);
  const productContext = useContext<IProductNameContext>(ProductNameContext);

  useEffect(() => {
    setCategoryId(categoryIdContext.contextCategoryId);
  }, [categoryIdContext.contextCategoryId]);

  useEffect(() => {
    setSearchText(productContext.contextProductName);
  }, [productContext.contextProductName]);

  return (
    <>
      <div>
        <CartSummary />
      </div>
      <ProductCatalog searchBy={searchText} categoryId={categoryId} />
    </>
  );
};
