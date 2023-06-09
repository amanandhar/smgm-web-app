import { useEffect, useState } from "react";
import data from "../../data/product/ProductData";
import { ProductCart } from "../../models/ProductCart.model";
import { Product } from "../../models/Product.model";
import { AddCartButton } from "../../_components/buttons/add-cart-button";
import { ChangeQuantityButton } from "../../_components/buttons/change-quantity-button";

export interface IProductCatalogProps {
  onClick: (productCarts: ProductCart) => void;
}

export const ProductCatalog = (props: IProductCatalogProps) => {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    setProducts(data.products);
  }, []);

  const handleAddCartButtonClick = (productId: number, value: number) => {
    const product = products.find((product) => product.id === productId);
    if (product) {
      product.isButtonEnabled = true;
      setProducts([...products, product]);
    }

    if (props.onClick) {
      const cartQuantity = {
        productId: productId,
        quantity: value,
        price: product?.price,
      };
      props?.onClick(cartQuantity);
    }
  };

  const handleChangeQuantityButtonClick = (
    productId: number,
    value: number
  ) => {
    if (props.onClick) {
      const product = products.find((product) => product.id === productId);
      const cartQuantity = {
        productId: productId,
        quantity: value,
        price: product?.price,
      };
      props?.onClick(cartQuantity);
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
                  src="https://dummyimage.com/450x300/dee2e6/6c757d.jpg"
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
                        <ChangeQuantityButton
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
