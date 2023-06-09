import { useState } from "react";
import Modal from "react-bootstrap/Modal";

export interface IModalDialogProps {
  orderNumber: string;
  show: boolean;
  onClose: () => void;
}

export const ModalDialog = (props: IModalDialogProps) => {
  const [orderNumber, setOrderNumber] = useState(props.orderNumber);
  const [isOpen, setIsOpen] = useState<boolean>(props.show ?? false);

  const hideModal = () => {
    setIsOpen(false);
  };

  const onExited = () => {
    props.onClose();
  };

  return (
    <>
      <Modal
        show={isOpen}
        onHide={hideModal}
        onExited={onExited}
        centered
        aria-labelledby="contained-modal-title-vcenter"
      >
        <Modal.Header
          closeButton
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Modal.Title></Modal.Title>
        </Modal.Header>
        <Modal.Body style={{ textAlign: "center" }}>
          <div>
            <img
              src={process.env.PUBLIC_URL + "/images/icons/done-large.svg"}
              alt=""
            />
          </div>
          <div
            style={{ color: "#08BD7C", margin: "20px 0 12px" }}
            className="fs-18"
          >
            Order Placed Successfully!
          </div>
          <div>
            Your Order ID is <strong>{orderNumber}</strong>. Your order was
            placed successfully in SMGM Online Grocery Store
          </div>
          <div className="callOptions">
            <div className="d-flex justify-content-between">
              <span
                className="call-store d-none d-md-block flex-grow-1 dark-gray"
                style={{ marginRight: "2px" }}
              >
                <img
                  src={process.env.PUBLIC_URL + "/images/icons/phone.svg"}
                  alt=""
                  className="mr-2"
                />
                <span>01-4351920</span>
              </span>
              <a
                href="https://web.whatsapp.com/send?phone=+9779841862943"
                className="text-decoration-none send-whatsapp flex-grow-1 ml-3"
                target="_blank"
                style={{ marginLeft: "2px" }}
              >
                <img
                  src={process.env.PUBLIC_URL + "/images/icons/whatsapp.svg"}
                  alt=""
                  className="mr-1"
                />
                9841862943
              </a>
            </div>
          </div>
          <div className="mt-16 hr-2"></div>
        </Modal.Body>
        <Modal.Footer
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <div className="msg dark-gray fs-14 mt-16">
            <span className="bold firmName">SMGM Online Grocery Store</span>
          </div>
        </Modal.Footer>
      </Modal>
    </>
  );
};
