import AppRouter from "./AppRouter";
import { ProductContextProvider } from "./context/ProductContext";
import { OrderNumberContextProvider } from "./context/OrderNumberContext";
import { Header } from "./_components/header";
import { CategoryIdContextProvider } from "./context/CategoryIdContext";
import { ProductNameContextProvider } from "./context/ProductNameContext";
import "./App.css";

function App() {
  return (
    <div className="App">
      <ProductContextProvider>
        <OrderNumberContextProvider>
          <CategoryIdContextProvider>
            <ProductNameContextProvider>
              <Header />
              <AppRouter />
            </ProductNameContextProvider>
          </CategoryIdContextProvider>
        </OrderNumberContextProvider>
      </ProductContextProvider>
    </div>
  );
}

export default App;
