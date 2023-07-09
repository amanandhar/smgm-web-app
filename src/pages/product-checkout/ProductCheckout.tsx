import { useContext, useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import {
  IOrderNumberContext,
  OrderNumberContext,
} from "../../context/OrderNumberContext";
import { ModalDialog } from "../../_components/modal-dialog";
import { ProductCart } from "../../_components/product-cart";

export const ProductCheckout = () => {
  const history = useHistory();
  const orderNumberContext = useContext<IOrderNumberContext>(
    OrderNumberContext
  );

  const [orderNumber, setOrderNumber] = useState<string>("");
  const [showModalDialog, setShowModalDialog] = useState<boolean>(false);

  useEffect(() => {
    const contextOrderNumber = orderNumberContext.contextOrderNumber;
    setOrderNumber(contextOrderNumber);
  }, [orderNumberContext.contextOrderNumber]);

  const handleModalDialogClose = () => {
    setShowModalDialog(false);
    history.push("dashboard");
  };

  return (
    <>
      <ProductCart />
      {showModalDialog && (
        <ModalDialog
          orderNumber={orderNumber}
          show={showModalDialog}
          onClose={handleModalDialogClose}
        />
      )}
    </>
  );
};
