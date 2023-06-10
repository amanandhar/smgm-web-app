import { useState } from "react";
import Modal from "react-bootstrap/Modal";
import ModalBody from "react-bootstrap/ModalBody";
import ModalHeader from "react-bootstrap/ModalHeader";
import ModalFooter from "react-bootstrap/ModalFooter";
import ModalTitle from "react-bootstrap/ModalTitle";

export interface IModalDialogProps {
  show: boolean;
  onClose: () => void;
}

export const ModalDialog = (props: IModalDialogProps) => {
  const [isOpen, setIsOpen] = useState<boolean>(props.show ?? false);

  const hideModal = () => {
    setIsOpen(false);
  };

  const onExited = () => {
    props.onClose();
  };

  return (
    <>
      <Modal show={isOpen} onHide={hideModal} onExited={onExited}>
        <Modal.Header closeButton>
          <Modal.Title>Order Placed!</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          Your Order ID is ODLKXYV1686364144. Your order was placed successfully
          from SMGM Online Grocery Store
        </Modal.Body>
        <Modal.Footer>SMGM Online Grocery Store</Modal.Footer>
      </Modal>
    </>
  );
};
