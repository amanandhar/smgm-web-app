import { useState, useContext, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { IProductContext, ProductContext } from "../../context/ProductContext";
import { Product } from "../../models/Product.model";
import { AddCartButton } from "../../_components/buttons/add-cart-button";
import { UpdateQuantityButton } from "../../_components/buttons/update-quantity-button";
import { ModalDialog } from "../../_components/modal-dialog";
import axios from "axios";
import "./ProductCart.css";
import { Order } from "../../models/Order.model";
import { Spinner } from "../spinner";
import { MaxOrderNumber } from "../../models/MaxOrderNumber";

export const ProductCart = () => {
  const history = useHistory();
  const { contextProducts, updateContextProducts } = useContext<
    IProductContext
  >(ProductContext);

  const [products, setProducts] = useState<Product[]>([]);
  const [subTotal, setSubTotal] = useState<number>(0.0);
  const [deliveryCharge, setDeliveryCharge] = useState<number>(0.0);

  const [name, setName] = useState<string>("");
  const [contactNumber, setContactNumber] = useState<number>();
  const [address, setAddress] = useState<string>("");
  const [orderNumberDisplay, setOrderNumberDisplay] = useState<string>("");
  const [enableOrderButton, setEnableOrderButton] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);
  const [showModalDialog, setShowModalDialog] = useState<boolean>(false);

  useEffect(() => {
    if (contextProducts.length === 0) {
      history.push("/");
    } else {
      updateSubTotal();
      setDeliveryCharge(10.0);
    }
  }, []);

  useEffect(() => {
    if (name && contactNumber && address) {
      setEnableOrderButton(true);
    } else {
      setEnableOrderButton(false);
    }
  }, [name, contactNumber, address]);

  const handleAddCartButtonClick = (productId: number, value: number) => {};
  const handleChangeQuantityButtonClick = (
    productId: number,
    value: number
  ) => {
    updateProducts(productId, value);
    updateSubTotal();
  };

  const getOrderNumberDisplay = (orderNumber: number): string => {
    let orderNumberDisplay = orderNumber.toString();
    if (orderNumberDisplay.length == 1) {
      return "000" + orderNumberDisplay;
    } else if (orderNumberDisplay.length == 2) {
      return "00" + orderNumberDisplay;
    } else if (orderNumberDisplay.length == 3) {
      return "0" + orderNumberDisplay;
    }

    return orderNumberDisplay;
  };

  const handleRemoveClick = (productId: number) => {
    contextProducts.splice(
      contextProducts.findIndex(
        (contextProduct) => contextProduct.id === productId
      ),
      1
    );

    updateSubTotal();
  };

  const handleOrder = () => {
    const items: {
      itemId: number | undefined;
      quantity: number | undefined;
    }[] = [];
    contextProducts.forEach((product) => {
      const item = {
        itemId: product.id,
        quantity: product.addedQuantity,
      };

      items.push(item);
    });

    let maxOrderNumber = 0;
    axios
      .get("http://localhost:3034/api/orders/max-order-number")
      .then((response: any) => {
        maxOrderNumber = parseInt((response.maxOrderNumber || 0).toString());
        const data: Order = {
          orderNumber: maxOrderNumber + 1,
          orderNumberDisplay: getOrderNumberDisplay(maxOrderNumber),
          name: name,
          contactNumber: contactNumber,
          address: address,
          subTotal: subTotal,
          discount: 0.0,
          tax: 0.0,
          deliveryCharge: deliveryCharge,
          items: items,
        };

        axios
          .post("http://localhost:3034/api/orders", data)
          .then((response) => {
            console.log(response);
            setOrderNumberDisplay(data.orderNumberDisplay || "");
            setShowModalDialog(true);
          })
          .catch((error) => console.log(error));
      })
      .catch((error) => console.log(error));
  };

  const handleContinueShopping = () => {
    history.push("dashboard");
  };

  const handleModalDialogClose = () => {
    setShowModalDialog(false);
    updateContextProducts([]);
    history.push("dashboard");
  };

  const updateProducts = (productId: number, value: number) => {
    const contextIndex = contextProducts.findIndex(
      (product) => product.id === productId
    );
    if (contextIndex >= 0) {
      let tempContextProducts = [...contextProducts];
      tempContextProducts[contextIndex].addedQuantity = value;
      updateContextProducts(tempContextProducts);
    }
  };

  const updateSubTotal = () => {
    let subTotal = 0;
    contextProducts.forEach((product) => {
      subTotal += (product.addedQuantity || 0) * (product.price || 0);
    });

    setSubTotal(subTotal);
  };

  return (
    <>
      {loading ? (
        <Spinner />
      ) : (
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
                      {contextProducts.reduce(
                        (a, b) => a + (b["addedQuantity"] || 0),
                        0
                      )}{" "}
                      item/s
                    </div>
                  </div>
                  <hr />
                  {contextProducts.map((product, index) => (
                    <div key={index} className="row gy-3 mb-4">
                      <div className="col-lg-5">
                        <div className="me-lg-5">
                          <div className="d-flex">
                            {product.imagePath ? (
                              <img
                                className="border rounded me-3"
                                style={{ width: "96px", height: "96px" }}
                                src={
                                  process.env.REACT_APP_STATIC_URL +
                                  "/" +
                                  product.imagePath
                                }
                                alt={product.name}
                              />
                            ) : (
                              <img
                                src={
                                  process.env.PUBLIC_URL +
                                  "/images/dummy/product-image-placeholder.jpg"
                                }
                                className="border rounded me-3"
                                style={{ width: "96px", height: "96px" }}
                                alt={product.name}
                              />
                            )}
                            <div className="">
                              <a href="#" className="nav-link">
                                {product.name}
                              </a>
                              <p className="text-muted">
                                {product.code}
                                {product.batchNumber !== 0
                                  ? "." + product.batchNumber
                                  : ""}
                                {product.subCode !== 0
                                  ? "." + product.subCode
                                  : ""}
                              </p>
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
                            {(product.price || 0) *
                              (product.addedQuantity || 0)}
                          </text>{" "}
                          <br />
                          <small className="text-muted text-nowrap">
                            {product.customizedQuantity}{" "}
                            {product.customizedUnit}
                            {": Rs. " + product.price}
                          </small>
                        </div>
                        <div className="" style={{ padding: "5px" }}>
                          <UpdateQuantityButton
                            value={product.addedQuantity || 0}
                            onClick={(value) =>
                              handleChangeQuantityButtonClick(
                                product.id || 0,
                                value
                              )
                            }
                          />
                        </div>
                        <div
                          className="float-md-end"
                          style={{ padding: "5px" }}
                        >
                          <a
                            href="#"
                            className="btn btn-light border text-danger icon-hover-danger"
                            onClick={() => handleRemoveClick(product.id || 0)}
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
                    <i className="fas fa-truck text-muted fa-lg"></i> Items will
                    be delivered within 2-3 business days!
                  </p>
                  <p className="text-muted"></p>
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
                          onChange={(e: any) => setName(e.target.value)}
                        />
                      </div>
                      <div className="input-group" style={{ padding: "2px" }}>
                        <input
                          type="text"
                          className="form-control border"
                          name=""
                          placeholder="Contact Number*"
                          onChange={(e: any) =>
                            setContactNumber(e.target.value)
                          }
                        />
                      </div>
                      <div className="input-group" style={{ padding: "2px" }}>
                        <textarea
                          className="form-control border"
                          name=""
                          placeholder="Address*"
                          onChange={(e: any) => setAddress(e.target.value)}
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
                    <p className="mb-2">Rs {subTotal}</p>
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
                    <p className="mb-2">Rs {deliveryCharge}</p>
                  </div>
                  <hr />
                  <div className="d-flex justify-content-between">
                    <p className="mb-2">Total price:</p>
                    <p className="mb-2 fw-bold">
                      Rs {subTotal + deliveryCharge}
                    </p>
                  </div>

                  <div className="mt-3">
                    <a
                      href="#"
                      className={
                        "btn w-100 btn-primary shadow-0 mb-2 " +
                        (enableOrderButton ? "" : "disabled")
                      }
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
      )}

      {showModalDialog && (
        <ModalDialog
          orderNumber={orderNumberDisplay}
          show={showModalDialog}
          onClose={handleModalDialogClose}
        />
      )}
    </>
  );
};
