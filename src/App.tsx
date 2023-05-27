import React from "react";
import "./App.css";
import { Product } from "./pages/product";

const ProductCountContext = React.createContext(0);

function App() {
  return (
    <div className="App">
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
      <ProductCountContext.Provider value={0}>
        <Product />
      </ProductCountContext.Provider>

      {/* <CategorySlider /> */}
      {/* <ItemButton /> */}
      {/* <ProductCheckout /> */}
    </div>
  );
}

export default App;
