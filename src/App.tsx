import React from "react";
import "./App.css";
import AppRouter from "./AppRouter";
import "bootstrap/dist/css/bootstrap.min.css";

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
