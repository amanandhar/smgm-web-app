import "./Modal1.scss";

export const Modal1 = () => {
  return (
    <>
      <div
        className="modal fade orderPlacedModal show"
        id="orderSuccess"
        tabIndex={-1}
        role="dialog"
        aria-labelledby="exampleModalCenterTitle"
        aria-modal="true"
        style={{ paddingRight: "17px", display: "block" }}
      >
        <div
          className="modal-dialog modal-dialog-centered center"
          role="document"
        >
          <div className="modal-content">
            <div
              className="text-left m-3 closeOrderPlacedModal"
              data-dismiss="modal"
            >
              <img
                src="https://vyaparwebsiteimages.vypcdn.in/catalogue/close.svg"
                alt=""
              />
            </div>
            <div className="modal-body pt-2">
              <img
                src="https://vyaparwebsiteimages.vypcdn.in/catalogue/done-large.svg"
                alt=""
              />
              <div
                style={{ color: "#08BD7C", margin: "20px 0 12px" }}
                className="fs-18"
              >
                Order Placed!
              </div>
              <div className="orderMsg">
                Your Order ID is{" "}
                <span className="bold orderId">OD6IYXP1686266320</span>. Your
                order was placed successfully from{" "}
                <span className="bold firmName">SMGM Online Grocery Store</span>
              </div>
              <div className="callOptions">
                <div className="d-flex justify-content-between">
                  <span className="call-store d-none d-md-block flex-grow-1 dark-gray">
                    <img
                      src="https://vyaparwebsiteimages.vypcdn.in/catalogue/phone-2.svg"
                      alt=""
                      className="mr-2"
                    />
                    <span>9841862943</span>
                  </span>
                  <a
                    href="tel:9841862943"
                    className="text-decoration-none call-store flex-grow-1 d-block d-md-none"
                  >
                    <img
                      src="https://vyaparwebsiteimages.vypcdn.in/catalogue/phone.svg"
                      alt=""
                      className="mr-1 "
                    />{" "}
                    Call Store
                  </a>
                  <a
                    href="https://web.whatsapp.com/send?phone=+9779841862943"
                    className="text-decoration-none send-whatsapp flex-grow-1 ml-3"
                    target="_blank"
                  >
                    <img
                      src="https://vyaparwebsiteimages.vypcdn.in/catalogue/whatsapp-new.svg"
                      alt=""
                      className="mr-1"
                    />{" "}
                    Send Whatsapp
                  </a>
                </div>
              </div>
              <div className="mt-16 hr-2"></div>
              <div className="msg dark-gray fs-14 mt-16">
                <span className="bold firmName">SMGM Online Grocery Store</span>{" "}
                and <span className="bold">1 Lakh+ businessmen</span>
                are using Vyapar to get orders online.
              </div>
              <a
                href="https://vyaparapp.in"
                target="_blank"
                className="dwnld-vyapar"
              >
                <img
                  src="https://vyaparwebsiteimages.vypcdn.in/party-details/download_vyaparapp_red.png"
                  className="mt-12 vyapar-logo"
                  alt="vyapar logo"
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
