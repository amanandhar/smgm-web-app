import { useEffect, useState, useContext } from "react";
import { Product } from "../../models/Product.model";
import { AddCartButton } from "../buttons/add-cart-button";
import { UpdateQuantityButton } from "../buttons/update-quantity-button";
import { IProductContext, ProductContext } from "../../context/ProductContext";
import data from "../../data/product/ProductData";
import "./ProductCatalog.css";

export interface IProductCatalogProps {
  searchText: string;
  categoryId: number;
}

export const ProductCatalog = (props: IProductCatalogProps) => {
  const [products, setProducts] = useState<Product[]>([]);

  const { contextProducts, updateContextProducts } = useContext<
    IProductContext
  >(ProductContext);

  useEffect(() => {
    const newProducts = data.products
      .filter(
        (product) =>
          (props.categoryId > 0
            ? product.categoryId === props.categoryId
            : product) &&
          (props.searchText.length > 0
            ? product.name
                .toLowerCase()
                .startsWith(props.searchText.toLowerCase())
            : product)
      )
      .map((product) => {
        return {
          id: product.id,
          itemCode: product.itemCode,
          name: product.name,
          price: product.price,
          image: product.image,
          categoryId: product.categoryId,
          addedQuantity: 0,
          isButtonEnabled: false,
        };
      });

    setProducts(newProducts);
  }, [props.searchText, props.categoryId]);

  const handleAddCartButtonClick = (productId: number, value: number) => {
    updateProducts(productId, value);
  };

  const handleChangeQuantityButtonClick = (
    productId: number,
    value: number
  ) => {
    updateProducts(productId, value);
  };

  const updateProducts = (productId: number, value: number) => {
    const index = products.findIndex((product) => product.id === productId);
    if (index >= 0) {
      let tempProducts = [...products];
      tempProducts[index].isButtonEnabled = true;
      setProducts(tempProducts);

      const contextIndex = contextProducts.findIndex(
        (product) => product.id === productId
      );
      if (contextIndex >= 0) {
        let tempContextProducts = [...contextProducts];
        tempContextProducts[contextIndex].addedQuantity = value;
        updateContextProducts(tempContextProducts);
      } else {
        const product = products.find((product) => product.id === productId);
        if (product) {
          product.addedQuantity = value;
          contextProducts.push(product);
          updateContextProducts(contextProducts);
        }
      }
    }
  };

  return (
    <section>
      <div className="container px-4 px-lg-5 mt-5">
        <div className="row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-4 justify-content-center">
          {products.map((product, index) => (
            <div key={index} className="col mb-5">
              <div className="card h-100">
                <img
                  className="card-img-top"
                  src={
                    process.env.PUBLIC_URL +
                    "/images/dummy/product-image-placeholder.jpg"
                  }
                  alt={product.name}
                />
                <div className="card-body p-4">
                  <div className="text-center">
                    <h5 className="fw-bolder">{product.name}</h5>
                    <h6>{product.itemCode}</h6>
                    Rs.{" " + product.price}
                  </div>
                </div>
                <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
                  <div className="text-center">
                    <div className="btn mt-auto">
                      {product.isButtonEnabled && (
                        <UpdateQuantityButton
                          onClick={(value) =>
                            handleChangeQuantityButtonClick(
                              product.id || 0,
                              value
                            )
                          }
                        />
                      )}

                      {!product.isButtonEnabled && (
                        <AddCartButton
                          onClick={() =>
                            handleAddCartButtonClick(product.id || 0, 1)
                          }
                        />
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
