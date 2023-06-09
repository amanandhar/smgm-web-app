import { useState, useContext, useEffect } from "react";
import { useHistory } from "react-router-dom";
import axios from "axios";
import { IProductContext, ProductContext } from "../../context/ProductContext";
import { UpdateQuantityButton } from "../../_components/buttons/update-quantity-button";
import { ModalDialog } from "../../_components/modal-dialog";
import { Spinner } from "../spinner";
import { OrderDetail } from "../../models/OrderDetail.model";
import { OrderItem } from "../../models/OrderItem.model";
import { PaymentDetail } from "../../models/PaymentDetail.model";
import "./ProductCart.css";

export const ProductCart = () => {
  const history = useHistory();
  const { contextProducts, updateContextProducts } = useContext<
    IProductContext
  >(ProductContext);

  const [subTotal, setSubTotal] = useState<number>(0.0);
  const [memberId, setMemberId] = useState<string>("");
  const [isMemberIdInvalid, setIsMemberIdInvalid] = useState<boolean>(false);
  const [name, setName] = useState<string>("");
  const [contactNumber, setContactNumber] = useState<number>();
  const [address, setAddress] = useState<string>("");
  const [orderNumberDisplay, setOrderNumberDisplay] = useState<string>("");
  const [enableOrderButton, setEnableOrderButton] = useState<boolean>(false);
  const [showModalDialog, setShowModalDialog] = useState<boolean>(false);
  const [paymentDetail, setPaymentDetail] = useState<PaymentDetail>({
    discount: 0.0,
    tax: 0.0,
    deliveryCharge: 0.0,
  });
  const [isLoading, setIsLoading] = useState<boolean>(false);

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
    var regex = /^[mn]\d{4}$/i;
    if (memberId.length > 0 && !regex.test(memberId)) {
      setIsMemberIdInvalid(true);
    } else {
      setIsMemberIdInvalid(false);
      let maxOrderNumber = 0;
      setIsLoading(true);
      try {
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
              if (product.addedQuantity && product.addedQuantity > 0) {
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
              }
            });

            const data: OrderDetail = {
              orderNumber: maxOrderNumber,
              orderNumberDisplay: maxOrderNumberDisplay,
              memberId: memberId,
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
                setOrderNumberDisplay(data.orderNumberDisplay || "");
                setShowModalDialog(true);
              })
              .catch((error) => console.log(error));
          })
          .catch((error) => console.log(error));
      } catch (error) {
        // Handle error
      } finally {
        setIsLoading(false);
      }
    }
  };

  const handleBackToShopping = () => {
    history.push("/");
  };

  const handleModalDialogClose = () => {
    setShowModalDialog(false);
    updateContextProducts([]);
    history.push("/");
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
      {isLoading && <Spinner />}
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
                            <p
                              className="text-muted"
                              style={{ marginBottom: "5px" }}
                            >
                              {product.code}
                              {product.batchNumber !== 0
                                ? "." + product.batchNumber
                                : ""}
                              {product.subCode !== 0
                                ? "." + product.subCode
                                : ""}
                            </p>
                            <p className="text-danger">
                              {product.stock && product.stock < 10
                                ? "Only " + product.stock + " available!"
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
                          {(product.price || 0) * (product.addedQuantity || 0)}
                        </text>{" "}
                        <br />
                        <small className="text-muted text-nowrap">
                          {product.customizedQuantity} {product.customizedUnit}
                          {": Rs. " + product.price}
                        </small>
                      </div>
                      <div className="" style={{ padding: "5px" }}>
                        <UpdateQuantityButton
                          stock={product.stock}
                          value={product.addedQuantity || 0}
                          onClick={(value) =>
                            handleChangeQuantityButtonClick(
                              product.id || 0,
                              value
                            )
                          }
                        />
                      </div>
                      <div className="float-md-end" style={{ padding: "5px" }}>
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
                  <i className="fas fa-truck text-muted fa-lg"></i> Order will
                  be delivered within 2-3 business days!
                </p>
                <p>
                  <i className="fas fa-info-circle text-muted fa-lg"></i>{" "}
                  Purchased items can be returned within 7 days!!
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
                        className={`form-control border ${
                          isMemberIdInvalid ? "is-invalid" : ""
                        }`}
                        name=""
                        placeholder="Member Id*"
                        onChange={(e: any) => setMemberId(e.target.value)}
                      />
                      {isMemberIdInvalid && (
                        <div className="invalid-feedback">
                          Should be in (M0001) format.
                        </div>
                      )}
                    </div>

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
                        onChange={(e: any) => setContactNumber(e.target.value)}
                      />
                    </div>
                    <div className="input-group" style={{ padding: "2px" }}>
                      <textarea
                        className="form-control border"
                        name=""
                        rows={1}
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
                  <p className="mb-2">Delivery Charge:</p>
                  <p className="mb-2">Rs {paymentDetail.deliveryCharge}</p>
                </div>
                <hr style={{ margin: "0.5rem 0" }} />
                <div className="d-flex justify-content-between">
                  <p className="mb-2">Total Amount:</p>
                  <p className="mb-2 fw-bold">
                    Rs {subTotal + (paymentDetail.deliveryCharge || 0.0)}
                  </p>
                </div>

                <div className="">
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
                    <p style={{ fontSize: "12px", marginBottom: "0px" }}>
                      COD (Cash On Delivery)
                    </p>
                  </a>
                  <a
                    href="#"
                    className="btn btn-secondary w-100 border"
                    style={{ backgroundColor: "darkblue" }}
                    onClick={handleBackToShopping}
                  >
                    {" "}
                    Back To Shopping{" "}
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

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
