import "./App.css";
import AppRouter from "./AppRouter";
import "bootstrap/dist/css/bootstrap.min.css";
import { ProductContextProvider } from "./context/ProductContext";
import { OrderNumberContextProvider } from "./context/OrderNumberContext";

function App() {
  return (
    <div className="App">
      <ProductContextProvider>
        <OrderNumberContextProvider>
          <AppRouter />
        </OrderNumberContextProvider>
      </ProductContextProvider>
    </div>
  );
}

export default App;
