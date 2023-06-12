import React from "react";
import "./App.css";
import AppRouter from "./AppRouter";
import "bootstrap/dist/css/bootstrap.min.css";
import { ProductContextProvider } from "./context/ProductContext";

const ProductCartContext = React.createContext({});

function App() {
  return (
    <div className="App">
      <ProductContextProvider>
        <AppRouter />
      </ProductContextProvider>
    </div>
  );
}

export default App;
