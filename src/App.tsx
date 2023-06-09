import React from "react";
import "./App.css";
import AppRouter from "./AppRouter";

const ProductCartContext = React.createContext({});

function App() {
  return (
    <div className="App">
      <ProductCartContext.Provider value={0}>
        <AppRouter />
      </ProductCartContext.Provider>
    </div>
  );
}

export default App;
