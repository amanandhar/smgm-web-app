import { useState, useContext, useEffect } from "react";
import { useHistory } from "react-router-dom";
import axios from "axios";
import { IProductContext, ProductContext } from "../../context/ProductContext";
import { AddCartButton } from "../../_components/buttons/add-cart-button";
import { UpdateQuantityButton } from "../../_components/buttons/update-quantity-button";
import { ModalDialog } from "../../_components/modal-dialog";
import { Spinner } from "../spinner";
import { Product } from "../../models/Product.model";
import { OrderDetail } from "../../models/OrderDetail.model";
import { OrderItem } from "../../models/OrderItem.model";
import { PaymentDetail } from "../../models/PaymentDetail.model";

import "./ProductCart.css";

export const ProductCart = () => {
  const history = useHistory();
  const { contextProducts, updateContextProducts } = useContext<
    IProductContext
  >(ProductContext);

  const [products, setProducts] = useState<Product[]>([]);
  const [subTotal, setSubTotal] = useState<number>(0.0);

  const [name, setName] = useState<string>("");
  const [contactNumber, setContactNumber] = useState<number>();
  const [address, setAddress] = useState<string>("");
  const [orderNumberDisplay, setOrderNumberDisplay] = useState<string>("");
  const [enableOrderButton, setEnableOrderButton] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);
  const [showModalDialog, setShowModalDialog] = useState<boolean>(false);
  const [paymentDetail, setPaymentDetail] = useState<PaymentDetail>({
    discount: 0.0,
    tax: 0.0,
    deliveryCharge: 0.0,
  });

  useEffect(() => {
    if (contextProducts.length === 0) {
      history.push("/");
    } else {
      updateSubTotal();
    }

    const paymentDetailFromApi: PaymentDetail = {
      discount: 0.0,
      tax: 0.0,
      deliveryCharge: 0.0,
    };

    setPaymentDetail(paymentDetailFromApi);
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
    let maxOrderNumber = 0;
    axios
      .get(`${process.env.REACT_APP_API_URL}/orders/max-order-number`)
      .then((response: any) => {
        maxOrderNumber = parseInt(
          (response?.data?.maxOrderNumber || 0).toString()
        );
        maxOrderNumber += 1;
        const maxOrderNumberDisplay = getOrderNumberDisplay(maxOrderNumber);
        const now = new Date().toISOString().slice(0, 19).replace("T", " ");

        const orderItems: OrderItem[] = [];
        contextProducts.forEach((product) => {
          const orderItem: OrderItem = {
            orderNumberDisplay: maxOrderNumberDisplay,
            itemId: product.itemId,
            code: product.code,
            batchNumber: product.batchNumber,
            subCode: product.subCode,
            price: product.price,
            quantity: product.addedQuantity,
            createdDate: now,
          };

          orderItems.push(orderItem);
        });

        const data: OrderDetail = {
          orderNumber: maxOrderNumber,
          orderNumberDisplay: maxOrderNumberDisplay,
          name: name,
          contactNumber: contactNumber,
          address: address,
          subTotal: subTotal,
          discount: paymentDetail.discount,
          tax: paymentDetail.tax,
          deliveryCharge: paymentDetail.deliveryCharge,
          createdDate: now,
          items: orderItems,
        };

        axios
          .post(`${process.env.REACT_APP_API_URL}/orders`, data)
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
                            {product.imageName ? (
                              <img
                                className="border rounded me-3"
                                style={{ width: "96px", height: "96px" }}
                                src={
                                  process.env.REACT_APP_STATIC_URL +
                                  "/" +
                                  product.imageName
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
                    <p className="mb-2 text-success">
                      Rs {paymentDetail.discount}
                    </p>
                  </div>
                  <div className="d-flex justify-content-between">
                    <p className="mb-2">TAX:</p>
                    <p className="mb-2">Rs {paymentDetail.tax}</p>
                  </div>
                  <div className="d-flex justify-content-between">
                    <p className="mb-2">Delivery Charge:</p>
                    <p className="mb-2">Rs {paymentDetail.deliveryCharge}</p>
                  </div>
                  <hr />
                  <div className="d-flex justify-content-between">
                    <p className="mb-2">Total price:</p>
                    <p className="mb-2 fw-bold">
                      Rs{" "}
                      {subTotal -
                        (paymentDetail.discount || 0.0) +
                        (paymentDetail.tax || 0.0) +
                        (paymentDetail.deliveryCharge || 0.0)}
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
                      Place Order
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
                      Continue Shopping{" "}
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
