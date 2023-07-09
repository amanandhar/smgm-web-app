import "./App.css";
import AppRouter from "./AppRouter";
import { ProductContextProvider } from "./context/ProductContext";
import { OrderNumberContextProvider } from "./context/OrderNumberContext";
import { Header } from "./_components/header";

function App() {
  return (
    <div className="App">
      <ProductContextProvider>
        <OrderNumberContextProvider>
          <Header />
          <AppRouter />
        </OrderNumberContextProvider>
      </ProductContextProvider>
    </div>
  );
}

export default App;
