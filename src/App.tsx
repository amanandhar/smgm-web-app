import React from "react";
import "./App.css";
import { Dashboard } from "./pages/dashboard";
import { ProductCheckout } from "./pages/product-checkout";

const ProductCartContext = React.createContext({});

function App() {
  return (
    <div className="App">
      <ProductCartContext.Provider value={0}>
        {/* <Dashboard /> */}
        <ProductCheckout />
      </ProductCartContext.Provider>
    </div>
  );
}

export default App;
