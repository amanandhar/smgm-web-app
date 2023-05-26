import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { Product } from "./pages/product";
import { CategorySlider } from "./_components/category-slider";

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
      <Product />
      {/* <CategorySlider /> */}
      {/* <ItemButton /> */}
      {/* <ProductCheckout /> */}
    </div>
  );
}

export default App;
