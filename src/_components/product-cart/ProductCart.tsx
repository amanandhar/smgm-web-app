import { useState, useContext } from "react";
import { useHistory } from "react-router-dom";
import { IProductContext, ProductContext } from "../../context/ProductContext";
import { Product } from "../../models/Product.model";
import { AddCartButton } from "../../_components/buttons/add-cart-button";
import { UpdateQuantityButton } from "../../_components/buttons/update-quantity-button";
import { ModalDialog } from "../../_components/modal-dialog";
import "./ProductCart.css";

export const ProductCart = () => {
  const history = useHistory();
  const productContext = useContext<IProductContext>(ProductContext);

  const [products, setProducts] = useState<Product[]>([]);
  const [showModalDialog, setShowModalDialog] = useState<boolean>(false);
  const handleAddCartButtonClick = (productId: number, value: number) => {};
  const handleChangeQuantityButtonClick = (
    productId: number,
    value: number
  ) => {};

  const handleOrder = () => {
    setShowModalDialog(true);
  };

  const handleContinueShopping = () => {
    history.push("dashboard");
  };

  const handleModalDialogClose = () => {
    setShowModalDialog(false);
    history.push("dashboard");
  };

  console.log();

  return (
    <>
      <div className="container" style={{ padding: "15px" }}>
        <div className="row">
          <div className="col-lg-9">
            <div className="card border shadow-0">
              <div className="m-3">
                <div
                  style={{ display: "flex", justifyContent: "space-between" }}
                >
                  <div>
                    <strong>Your shopping cart</strong>
                  </div>
                  <div>
                    {productContext.contextProducts.reduce(
                      (a, b) => a + (b["addedQuantity"] || 0),
                      0
                    )}{" "}
                    items
                  </div>
                </div>
                <hr />
                {productContext.contextProducts.map((product, index) => (
                  <div key={index} className="row gy-3 mb-4">
                    <div className="col-lg-5">
                      <div className="me-lg-5">
                        <div className="d-flex">
                          <img
                            src={
                              process.env.PUBLIC_URL +
                              "/images/dummy/product/item1.webp"
                            }
                            className="border rounded me-3"
                            style={{ width: "96px", height: "96px" }}
                          />
                          <div className="">
                            <a href="#" className="nav-link">
                              {product.name}
                            </a>
                            <p className="text-muted">{product.itemCode}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-2 col-sm-6 col-6 d-flex flex-row flex-lg-column flex-xl-row text-nowrap">
                      <div
                        className=""
                        style={{ minWidth: "120px", padding: "5px" }}
                      >
                        <text className="h6">
                          Rs{" "}
                          {(product.price || 0) * (product.addedQuantity || 0)}
                        </text>{" "}
                        <br />
                        <small className="text-muted text-nowrap">
                          {" "}
                          Rs{product.price} / per item{" "}
                        </small>
                      </div>
                      <div className="" style={{ padding: "5px" }}>
                        <UpdateQuantityButton
                          value={product.addedQuantity || 0}
                          onClick={(value) =>
                            handleChangeQuantityButtonClick(0, value)
                          }
                        />
                      </div>
                      <div className="float-md-end" style={{ padding: "5px" }}>
                        <a
                          href="#"
                          className="btn btn-light border text-danger icon-hover-danger"
                        >
                          {" "}
                          Remove
                        </a>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="border-top pt-4 mx-4 mb-4">
                <p>
                  <i className="fas fa-truck text-muted fa-lg"></i> Free
                  Delivery within 1-2 weeks
                </p>
                <p className="text-muted">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip
                </p>
              </div>
            </div>
          </div>
          <div className="col-lg-3">
            <div className="card mb-3 border shadow-0">
              <div className="card-body">
                <form>
                  <div className="form-group">
                    <label>
                      <strong>Delivery Address</strong>
                    </label>
                    <hr />
                    <div className="input-group" style={{ padding: "2px" }}>
                      <input
                        type="text"
                        className="form-control border"
                        name=""
                        placeholder="Name*"
                      />
                    </div>
                    <div className="input-group" style={{ padding: "2px" }}>
                      <input
                        type="text"
                        className="form-control border"
                        name=""
                        placeholder="Contact Number*"
                      />
                    </div>
                    <div className="input-group" style={{ padding: "2px" }}>
                      <textarea
                        className="form-control border"
                        name=""
                        placeholder="Address*"
                      />
                    </div>
                  </div>
                </form>
              </div>
            </div>
            <div className="card shadow-0 border">
              <div className="card-body">
                <div className="d-flex justify-content-between">
                  <p className="mb-2">Sub Total:</p>
                  <p className="mb-2">Rs 329.00</p>
                </div>
                <div className="d-flex justify-content-between">
                  <p className="mb-2">Discount:</p>
                  <p className="mb-2 text-success">Rs 0.00</p>
                </div>
                <div className="d-flex justify-content-between">
                  <p className="mb-2">TAX:</p>
                  <p className="mb-2">Rs 0.00</p>
                </div>
                <div className="d-flex justify-content-between">
                  <p className="mb-2">Delivery Charge:</p>
                  <p className="mb-2">Rs 10.00</p>
                </div>
                <hr />
                <div className="d-flex justify-content-between">
                  <p className="mb-2">Total price:</p>
                  <p className="mb-2 fw-bold">Rs 283.00</p>
                </div>

                <div className="mt-3">
                  <a
                    href="#"
                    className="btn w-100 btn-primary shadow-0 mb-2"
                    onClick={handleOrder}
                  >
                    {" "}
                    Place Order <br />
                    <label style={{ fontSize: "12px" }}>
                      (Cash On Delivery)
                    </label>
                  </a>
                  <a
                    href="#"
                    className="btn btn-secondary w-100 border mt-2"
                    onClick={handleContinueShopping}
                  >
                    {" "}
                    Continue shopping{" "}
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {showModalDialog && (
        <ModalDialog show={showModalDialog} onClose={handleModalDialogClose} />
      )}
    </>
  );
};
