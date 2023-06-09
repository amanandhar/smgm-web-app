import "./ProductCheckout1.css";

export const ProductCheckout1 = () => {
  return (
    <>
      <div className="myCart container p-2">
        <div
          className="d-flex border-top border-bottom bg-white"
          style={{ padding: "11px 16px" }}
        >
          <img
            src="https://vyaparwebsiteimages.vypcdn.in/catalogue/back-arrow-black.svg"
            alt=""
            className="myCartBackBtn"
          />
          <div className="bold fs-18 my-cart" style={{ marginLeft: "24px" }}>
            My Cart
          </div>
        </div>
      </div>
      <div className="row justify-content-between order-summary-wrapper">
        <div
          className="col-12 col-sm-7 col-md-8 bg-white d-none d-sm-block rounded cartWrapper h-100"
          style={{ padding: "18px" }}
        >
          <div
            className="d-flex justify-content-between os"
            style={{ marginBottom: "15px" }}
          >
            <div className="bold text-accent-4 black">Order Summary</div>
            <div className="fs-14 dark-gray items numberOfItemsCart center">
              26 Items
            </div>
          </div>
          <div className="d-none mb-2 items-unavailable-wrapper">
            <div className="light-gray fs-12 mr-2 mt-1">
              <span className="items-unavailable">" items not available"</span>
            </div>
            <div className="removeAll d-flex mt-1">
              <img src="https://vyaparwebsiteimages.vypcdn.in/catalogue/delete.svg" />
              <div className="ml-2 fs-12 text-tomato">Remove All</div>
            </div>
            <hr className="mt-0"></hr>
            <div id="desktopCartItems">
              <div
                className="cartItem632b2d780542f260 cart-item rounded"
                data-item-id="632b2d780542f260"
                data-itemprimaryid="260"
              >
                <div className="d-flex justify-content-between">
                  <div className="d-flex flex-grow-1">
                    <img
                      src="https://vyapar-catalog.vypcdn.in/632b2d780542f/632b2d780542f260181ab41b5f370/632b2d780542f_260_130.jpg?v=1"
                      loading="lazy"
                      data-src="https://vyaparwebsiteimages.vypcdn.in/catalogue/product-placeholder.png"
                      className="cartProductImg 632b2d780542f260"
                    />
                    <div
                      style={{ marginLeft: "16px" }}
                      className="cart-item-data flex-grow-1"
                    >
                      <div className="text-accent-3 mt-n1 name632b2d780542f260">
                        Aalu Bhujiya-200gm
                      </div>
                      <div className="bold mr-1 text-accent-3 black 632b2d780542f260">
                        <span className="currencySymbol">₨</span> 0.00{" "}
                      </div>
                      <div
                        className="d-none price-updated fs-12"
                        style={{ color: "#F79F1F" }}
                      ></div>
                      <div className="d-flex justify-content-between">
                        <div
                          className="removeItem d-flex mt-1"
                          data-id="632b2d780542f260"
                        >
                          <img
                            src="https://vyaparwebsiteimages.vypcdn.in/catalogue/delete.svg"
                            style={{
                              width: "6px",
                              height: "12px",
                              marginTop: "3px",
                            }}
                          />
                          <div
                            className="fs-12 text-tomato"
                            style={{ marginLeft: "0.35rem" }}
                          >
                            Remove
                          </div>
                        </div>
                        <div className="product-unavailable fs-12 mt-1 align-self-end text-tomato pr-2"></div>
                      </div>
                    </div>
                  </div>
                  <div className="product-unavailable fs-12 mt-1 align-self-end ml-4 text-tomato d-none "></div>
                  <div className="add-to-cart-btn" id="input-quantity">
                    <div
                      className="qttyWrapper632b2d780542f260 d-flex  qttyWrapper justify-content-around no-outline"
                      style={{ width: "80px" }}
                    >
                      <button
                        className="decrementBtnCart center"
                        data-id="632b2d780542f260"
                        style={{ outline: "0" }}
                      >
                        <img
                          src="https://vyaparwebsiteimages.vypcdn.in/catalogue/minus.svg"
                          alt=""
                          className="w-11 h-11"
                        />
                      </button>
                      <input
                        style={{ minWidth: "20px" }}
                        id="id632b2d780542f260"
                        data-id="632b2d780542f260"
                        value="9"
                        className="decimal_precision bold text-center no-outline p-0 h-100 form-control qttyValueCart632b2d780542f260 qttyValueCart border-0 shadow-none"
                      />
                      <button
                        className="incrementBtnCart center"
                        data-id="632b2d780542f260"
                        style={{ outline: "0" }}
                      >
                        <img
                          src="https://vyaparwebsiteimages.vypcdn.in/catalogue/plus-blue.svg"
                          alt=""
                          className="w-11 h-11"
                        />
                      </button>
                    </div>
                    <div id="out-of-stock632b2d780542f260"></div>
                  </div>

                  <div
                    className="d-none"
                    id="632b2d780542f"
                    data-item="[object Object]"
                  ></div>
                </div>
              </div>
              <div
                className="cartItem632b2d780542f259 cart-item rounded"
                data-item-id="632b2d780542f259"
                data-itemprimaryid="259"
              >
                <div className="d-flex justify-content-between">
                  <div className="d-flex flex-grow-1">
                    <img
                      src="https://vyapar-catalog.vypcdn.in/632b2d780542f/632b2d780542f259bd0c38748b290/632b2d780542f_259_131.jpg?v=1"
                      loading="lazy"
                      data-src="https://vyaparwebsiteimages.vypcdn.in/catalogue/product-placeholder.png"
                      className="cartProductImg 632b2d780542f259"
                    />
                    <div
                      style={{ marginLeft: "16px" }}
                      className="cart-item-data flex-grow-1"
                    >
                      <div className="text-accent-3 mt-n1 name632b2d780542f259">
                        Aalu Bhujiya-400gm
                      </div>
                      <div className="bold mr-1 text-accent-3 black 632b2d780542f259">
                        <span className="currencySymbol">₨</span> 0.00{" "}
                      </div>
                      <div
                        className="d-none price-updated fs-12"
                        style={{ color: "#F79F1F" }}
                      ></div>
                      <div className="d-flex justify-content-between">
                        <div
                          className="removeItem d-flex mt-1"
                          data-id="632b2d780542f259"
                        >
                          <img
                            src="https://vyaparwebsiteimages.vypcdn.in/catalogue/delete.svg"
                            style={{
                              width: "6px",
                              height: "12px",
                              marginTop: "3px",
                            }}
                          />
                          <div
                            className="fs-12 text-tomato"
                            style={{ marginLeft: "0.35rem" }}
                          >
                            Remove
                          </div>
                        </div>
                        <div className="product-unavailable fs-12 mt-1 align-self-end text-tomato pr-2"></div>
                      </div>
                    </div>
                  </div>
                  <div className="product-unavailable fs-12 mt-1 align-self-end ml-4 text-tomato d-none "></div>
                  <div className="add-to-cart-btn" id="input-quantity">
                    <div
                      className="qttyWrapper632b2d780542f259 d-flex  qttyWrapper justify-content-around no-outline"
                      style={{ width: "80px" }}
                    >
                      <button
                        className="decrementBtnCart center"
                        data-id="632b2d780542f259"
                        style={{ outline: "0" }}
                      >
                        <img
                          src="https://vyaparwebsiteimages.vypcdn.in/catalogue/minus.svg"
                          alt=""
                          className="w-11 h-11"
                        />
                      </button>
                      <input
                        style={{ minWidth: "20px" }}
                        id="id632b2d780542f259"
                        data-id="632b2d780542f259"
                        value="7"
                        className="decimal_precision bold text-center no-outline p-0 h-100 form-control qttyValueCart632b2d780542f259 qttyValueCart border-0 shadow-none"
                      />
                      <button
                        className="incrementBtnCart center"
                        data-id="632b2d780542f259"
                        style={{ outline: "0" }}
                      >
                        <img
                          src="https://vyaparwebsiteimages.vypcdn.in/catalogue/plus-blue.svg"
                          alt=""
                          className="w-11 h-11"
                        />
                      </button>
                    </div>
                    <div id="out-of-stock632b2d780542f259"></div>
                  </div>

                  <div
                    className="d-none"
                    id="632b2d780542f"
                    data-item="[object Object]"
                  ></div>
                </div>
              </div>
              <div
                className="cartItem632b2d780542f266 cart-item rounded"
                data-item-id="632b2d780542f266"
                data-itemprimaryid="266"
              >
                <div className="d-flex justify-content-between">
                  <div className="d-flex flex-grow-1">
                    <img
                      src="https://vyapar-catalog.vypcdn.in/632b2d780542f/632b2d780542f266c97bf10dc449f/632b2d780542f_266_135.jpg?v=1"
                      loading="lazy"
                      data-src="https://vyaparwebsiteimages.vypcdn.in/catalogue/product-placeholder.png"
                      className="cartProductImg 632b2d780542f266"
                    />
                    <div
                      style={{ marginLeft: "16px" }}
                      className="cart-item-data flex-grow-1"
                    >
                      <div className="text-accent-3 mt-n1 name632b2d780542f266">
                        Aditi Peanuts-650gm
                      </div>
                      <div className="bold mr-1 text-accent-3 black 632b2d780542f266">
                        <span className="currencySymbol">₨</span> 285.00{" "}
                      </div>
                      <div
                        className="d-none price-updated fs-12"
                        style={{ color: "#F79F1F" }}
                      ></div>
                      <div className="d-flex justify-content-between">
                        <div
                          className="removeItem d-flex mt-1"
                          data-id="632b2d780542f266"
                        >
                          <img
                            src="https://vyaparwebsiteimages.vypcdn.in/catalogue/delete.svg"
                            style={{
                              width: "6px",
                              height: "12px",
                              marginTop: "3px",
                            }}
                          />
                          <div
                            className="fs-12 text-tomato"
                            style={{ marginLeft: "0.35rem" }}
                          >
                            Remove
                          </div>
                        </div>
                        <div className="product-unavailable fs-12 mt-1 align-self-end text-tomato pr-2"></div>
                      </div>
                    </div>
                  </div>
                  <div className="product-unavailable fs-12 mt-1 align-self-end ml-4 text-tomato d-none "></div>
                  <div className="add-to-cart-btn" id="input-quantity">
                    <div
                      className="qttyWrapper632b2d780542f266 d-flex  qttyWrapper justify-content-around no-outline"
                      style={{ width: "80px" }}
                    >
                      <button
                        className="decrementBtnCart center"
                        data-id="632b2d780542f266"
                        style={{ outline: "0" }}
                      >
                        <img
                          src="https://vyaparwebsiteimages.vypcdn.in/catalogue/minus.svg"
                          alt=""
                          className="w-11 h-11"
                        />
                      </button>
                      <input
                        style={{ minWidth: "20px" }}
                        id="id632b2d780542f266"
                        data-id="632b2d780542f266"
                        value="10"
                        className="decimal_precision bold text-center no-outline p-0 h-100 form-control qttyValueCart632b2d780542f266 qttyValueCart border-0 shadow-none"
                      />
                      <button
                        className="incrementBtnCart center"
                        data-id="632b2d780542f266"
                        style={{ outline: "0" }}
                      >
                        <img
                          src="https://vyaparwebsiteimages.vypcdn.in/catalogue/plus-blue.svg"
                          alt=""
                          className="w-11 h-11"
                        />
                      </button>
                    </div>
                    <div id="out-of-stock632b2d780542f266"></div>
                  </div>
                  <div
                    className="d-none"
                    id="632b2d780542f"
                    data-item="[object Object]"
                  ></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
