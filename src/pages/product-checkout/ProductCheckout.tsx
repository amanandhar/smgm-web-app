import { useState } from "react";
import { useHistory } from "react-router-dom";
import { AddCartButton } from "../../_components/buttons/add-cart-button";
import { ChangeQuantityButton } from "../../_components/buttons/change-quantity-button";
import { Header } from "../../_components/header";
import { ModalDialog } from "../../_components/modal-dialog";
import "./ProductCheckout.css";

export const ProductCheckout = () => {
  const history = useHistory();

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

  return (
    <>
      <Header />
      <div className="container" style={{ padding: "15px" }}>
        <div className="row">
          <div className="col-lg-9">
            <div className="card border shadow-0">
              <div className="m-3">
                {/* <h3 className="card-title mb-4">Your shopping cart</h3> */}
                <div
                  style={{ display: "flex", justifyContent: "space-between" }}
                >
                  <div>
                    <strong>Your shopping cart</strong>
                  </div>
                  <div>23 items</div>
                </div>
                <hr />
                <div className="row gy-3 mb-4">
                  <div className="col-lg-5">
                    <div className="me-lg-5">
                      <div className="d-flex">
                        <img
                          src="https://bootstrap-ecommerce.com/bootstrap5-ecommerce/images/items/11.webp"
                          className="border rounded me-3"
                          style={{ width: "96px", height: "96px" }}
                        />
                        <div className="">
                          <a href="#" className="nav-link">
                            Winter jacket for men and lady
                          </a>
                          <p className="text-muted">Yellow, Jeans</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-2 col-sm-6 col-6 d-flex flex-row flex-lg-column flex-xl-row text-nowrap">
                    <div
                      className=""
                      style={{ minWidth: "120px", padding: "5px" }}
                    >
                      <text className="h6">$1156.00</text> <br />
                      <small className="text-muted text-nowrap">
                        {" "}
                        $460.00 / per item{" "}
                      </small>
                    </div>
                    <div className="" style={{ padding: "5px" }}>
                      <ChangeQuantityButton
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

                <div className="row gy-3 mb-4">
                  <div className="col-lg-5">
                    <div className="me-lg-5">
                      <div className="d-flex">
                        <img
                          src="https://bootstrap-ecommerce.com/bootstrap5-ecommerce/images/items/12.webp"
                          className="border rounded me-3"
                          style={{ width: "96px", height: "96px" }}
                        />
                        <div className="">
                          <a href="#" className="nav-link">
                            Mens T-shirt Cotton Base
                          </a>
                          <p className="text-muted">Blue, Medium</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    className="col-lg-2 col-sm-6 col-6 d-flex flex-row flex-lg-column flex-xl-row text-nowrap"
                    style={{ padding: "10px" }}
                  >
                    <div
                      className=""
                      style={{ minWidth: "120px", padding: "5px" }}
                    >
                      <text className="h6">$44.80</text> <br />
                      <small className="text-muted text-nowrap">
                        {" "}
                        $12.20 / per item{" "}
                      </small>
                    </div>
                    <div className="" style={{ padding: "5px" }}>
                      <ChangeQuantityButton
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

                <div className="row gy-3">
                  <div className="col-lg-5">
                    <div className="me-lg-5">
                      <div className="d-flex">
                        <img
                          src="https://bootstrap-ecommerce.com/bootstrap5-ecommerce/images/items/13.webp"
                          className="border rounded me-3"
                          style={{ width: "96px", height: "96px" }}
                        />
                        <div className="">
                          <a href="#" className="nav-link">
                            Blazer Suit Dress Jacket for Men
                          </a>
                          <p className="text-muted">XL size, Jeans, Blue</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    className="col-lg-2 col-sm-6 col-6 d-flex flex-row flex-lg-column flex-xl-row text-nowrap"
                    style={{ padding: "10px" }}
                  >
                    <div
                      className=""
                      style={{ minWidth: "120px", padding: "5px" }}
                    >
                      <text className="h6">$1156.00</text> <br />
                      <small className="text-muted text-nowrap">
                        {" "}
                        $460.00 / per item{" "}
                      </small>
                    </div>
                    <div className="" style={{ padding: "5px" }}>
                      <ChangeQuantityButton
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
                  <p className="mb-2">$329.00</p>
                </div>
                <div className="d-flex justify-content-between">
                  <p className="mb-2">Discount:</p>
                  <p className="mb-2 text-success">-$60.00</p>
                </div>
                <div className="d-flex justify-content-between">
                  <p className="mb-2">TAX:</p>
                  <p className="mb-2">$14.00</p>
                </div>
                <div className="d-flex justify-content-between">
                  <p className="mb-2">Delivery Charge:</p>
                  <p className="mb-2">$10.00</p>
                </div>
                <hr />
                <div className="d-flex justify-content-between">
                  <p className="mb-2">Total price:</p>
                  <p className="mb-2 fw-bold">$283.00</p>
                </div>

                <div className="mt-3">
                  <a
                    href="#"
                    className="btn w-100 btn-primary shadow-0 mb-2"
                    onClick={handleOrder}
                  >
                    {" "}
                    Place Order <br />
                    <label style={{fontSize: "12px"}}>(Cash On Delivery)</label>
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
