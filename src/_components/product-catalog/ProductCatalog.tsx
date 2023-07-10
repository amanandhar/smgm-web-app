import { useEffect, useState, useContext } from "react";
import axios from "axios";
import { Product } from "../../models/Product.model";
import { AddCartButton } from "../buttons/add-cart-button";
import { UpdateQuantityButton } from "../buttons/update-quantity-button";
import { IProductContext, ProductContext } from "../../context/ProductContext";
import { ProductPagination } from "../pagination";
import { Spinner } from "../spinner";
import "./ProductCatalog.css";

export interface IProductCatalogProps {
  searchBy: string;
  categoryId: number;
}

export const ProductCatalog = (props: IProductCatalogProps) => {
  const [totalPages, setTotalPages] = useState<number>(0);
  const [products, setProducts] = useState<Product[]>([]);
  const [skip, setSkip] = useState<number>(0);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const itemsPerPage =
    (process.env.REACT_APP_ITEMS_PER_APGE &&
      parseInt(process.env.REACT_APP_ITEMS_PER_APGE)) ||
    5;

  const { contextProducts, updateContextProducts } = useContext<
    IProductContext
  >(ProductContext);

  useEffect(() => {
    let url = `${process.env.REACT_APP_API_URL}/items?skip=${skip}&limit=${itemsPerPage}`;
    if (props.categoryId > 0) {
      url += `&category=${props.categoryId}`;
    }
    if (props.searchBy) {
      url += `&searchBy=${props.searchBy}`;
    }

    setIsLoading(true);

    try {
      axios.get(url).then((response) => {
        const totalItems = response?.data?.totalItems;
        if (totalItems && totalItems > 0) {
          const divisible = Math.trunc(totalItems / itemsPerPage);
          const remainder = totalItems % itemsPerPage;
          if (remainder === 0) {
            setTotalPages(divisible);
          } else {
            setTotalPages(divisible + 1);
          }

          const newItems: Product[] =
            response?.data?.rows.length > 0 &&
            response?.data?.rows.map((item: any) => {
              return {
                id: item.Id,
                key: item.Key,
                itemId: item.ItemId,
                code: item.Code,
                batchNumber: item.BatchNumber,
                subCode: item.SubCode,
                category: item.Category,
                name: item.Name,
                customizedQuantity: item.CustomizedQuantity,
                customizedUnit: item.CustomizedUnit,
                price: item.Price,
                stock: item.Stock,
                imageName: item.ImageName,
              };
            });
          setProducts(newItems);
        } else {
          setTotalPages(0);
          setProducts([]);
        }
      });
    } catch (error) {
      // Handle Error
    } finally {
      setIsLoading(false);
    }
  }, [props.searchBy, props.categoryId]);

  const getProducts = (skip: number) => {
    let url = `${process.env.REACT_APP_API_URL}/items?skip=${skip}&limit=${itemsPerPage}`;
    if (props.categoryId > 0) {
      url += `&category=${props.categoryId}`;
    }
    if (props.searchBy) {
      url += `&searchBy=${props.searchBy}`;
    }

    setIsLoading(true);
    try {
      axios.get(url).then((response) => {
        const totalItems = response?.data?.totalItems;
        if (totalItems && totalItems > 0) {
          const divisible = Math.trunc(totalItems / itemsPerPage);
          const remainder = totalItems % itemsPerPage;
          if (remainder === 0) {
            setTotalPages(divisible);
          } else {
            setTotalPages(divisible + 1);
          }

          const newItems: Product[] =
            response?.data?.rows.length > 0 &&
            response?.data?.rows.map((item: any) => {
              return {
                id: item.Id,
                key: item.Key,
                itemId: item.ItemId,
                code: item.Code,
                batchNumber: item.BatchNumber,
                subCode: item.SubCode,
                category: item.Category,
                name: item.Name,
                customizedQuantity: item.CustomizedQuantity,
                customizedUnit: item.CustomizedUnit,
                price: item.Price,
                stock: item.Stock,
                imageName: item.ImageName,
              };
            });
          setProducts(newItems);
        } else {
          setTotalPages(0);
          setProducts([]);
        }
      });
    } catch (error) {
      // Handle error
    } finally {
      setIsLoading(false);
    }
  };

  const handleAddCartButtonClick = (
    productId: number,
    value: number,
    stock: number
  ) => {
    if (value <= stock) {
      updateProducts(productId, value);
    }
  };

  const handleChangeQuantityButtonClick = (
    productId: number,
    value: number,
    stock: number
  ) => {
    if (value <= stock) {
      updateProducts(productId, value);
    }
  };

  const handlePageChange = (page: number) => {
    setSkip((page - 1) * itemsPerPage);
    getProducts((page - 1) * itemsPerPage);
  };

  const updateProducts = (productId: number, value: number) => {
    const index = products.findIndex((product) => product.id === productId);
    if (index >= 0) {
      let tempProducts = [...products];
      if (value === 0) {
        tempProducts[index].isButtonEnabled = false;
      } else {
        tempProducts[index].isButtonEnabled = true;
      }

      setProducts(tempProducts);

      const contextIndex = contextProducts.findIndex(
        (product) => product.id === productId
      );

      // If value of product is empty remove that product context product list
      if (value === 0) {
        let tempContextProducts = [...contextProducts];
        tempContextProducts.splice(contextIndex, 1);
        updateContextProducts(tempContextProducts);
      } else {
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
    }
  };

  return (
    <>
      {isLoading && <Spinner />}
      <section>
        <div className="container px-4 px-lg-5 mt-5">
          <div className="row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-4 justify-content-center">
            {products.length > 0 &&
              products.map((product, index) => (
                <div key={index} className="col mb-5">
                  <div className="card h-100">
                    {product.imageName ? (
                      <img
                        className="card-img-top"
                        src={
                          process.env.REACT_APP_STATIC_URL +
                          "/" +
                          product.imageName
                        }
                        alt={product.name}
                      />
                    ) : (
                      <img
                        className="card-img-top"
                        src={
                          process.env.PUBLIC_URL +
                          "/images/dummy/product-image-placeholder.jpg"
                        }
                        alt={product.name}
                      />
                    )}

                    <div className="card-body p-4">
                      <div className="text-center">
                        <h5 className="fw-bolder">{product.name}</h5>
                        <h6>
                          {product.code}
                          {product.batchNumber !== 0
                            ? "." + product.batchNumber
                            : ""}
                          {product.subCode !== 0 ? "." + product.subCode : ""}
                        </h6>
                        <div>
                          {product.customizedQuantity} {product.customizedUnit}
                          {": Rs. " + product.price}
                        </div>
                        <div className="text-danger">
                          {product.stock && product.stock < 10
                            ? "Only " + product.stock + " available!"
                            : ""}
                        </div>
                      </div>
                    </div>
                    <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
                      <div className="text-center">
                        <div className="btn mt-auto">
                          {product.isButtonEnabled && (
                            <UpdateQuantityButton
                              stock={product.stock}
                              onClick={(value) =>
                                handleChangeQuantityButtonClick(
                                  product.id || 0,
                                  value,
                                  product.stock || 0
                                )
                              }
                            />
                          )}

                          {!product.isButtonEnabled && (
                            <AddCartButton
                              onClick={() =>
                                handleAddCartButtonClick(
                                  product.id || 0,
                                  1,
                                  product.stock || 0
                                )
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
        <div
          className="container p-2"
          style={{ display: "flex", justifyContent: "center" }}
        >
          <ProductPagination
            currentPage={1}
            totalPages={totalPages}
            onPageChange={(page: number) => handlePageChange(page)}
          />
        </div>
      </section>
    </>
  );
};
