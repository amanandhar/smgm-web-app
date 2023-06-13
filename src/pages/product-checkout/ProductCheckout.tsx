import { useState } from "react";
import { useHistory } from "react-router-dom";
import { Header } from "../../_components/header";
import { ModalDialog } from "../../_components/modal-dialog";
import { ProductCart } from "../../_components/product-cart";

export const ProductCheckout = () => {
  const history = useHistory();
  const [showModalDialog, setShowModalDialog] = useState<boolean>(false);

  const handleModalDialogClose = () => {
    setShowModalDialog(false);
    history.push("dashboard");
  };

  return (
    <>
      <div className="sticky-container">
        <Header />
      </div>
      <ProductCart />
      {showModalDialog && (
        <ModalDialog show={showModalDialog} onClose={handleModalDialogClose} />
      )}
    </>
  );
};
