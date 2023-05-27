import { useEffect, useState } from "react";
import data from "../../data/product/Product";
import { Product } from "../../models/product";
import { AddCartButton } from "../../_components/buttons/add-cart-button";
import { ChangeQuantityButton } from "../../_components/buttons/change-quantity-button";

export interface IProductCatalogProps {
  onClick: (value: number) => void;
}

export const ProductCatalog = (props: IProductCatalogProps) => {
  const [products, setProducts] = useState<Product[]>([]);
  const [quantityButtonIds, setQuantityButtonIds] = useState<number[]>([]);
  const [showQuantityButton, setShowQuantityButton] = useState<boolean>(false);

  useEffect(() => {
    setProducts(data.products);
  }, []);

  const handleOnClick = () => {
    setShowQuantityButton(true);
    //setQuantityButtonIds([...quantityButtonIds, productId]);
    console.log("Ids ", quantityButtonIds);
  };

  const handleChangeQuantityButtonClick = (
    productId: number,
    value: number
  ) => {
    if (props.onClick) {
      props?.onClick(value);
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
                    <h5 className="fw-bolder">{product.name}</h5>Rs.
                    {" " + product.price}
                  </div>
                </div>
                <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
                  <div className="text-center">
                    <div className="btn mt-auto">
                      {showQuantityButton && (
                        <ChangeQuantityButton
                          onClick={(value) =>
                            handleChangeQuantityButtonClick(
                              product.id || 0,
                              value
                            )
                          }
                        />
                      )}

                      {!showQuantityButton && (
                        <AddCartButton onClick={handleOnClick} />
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
