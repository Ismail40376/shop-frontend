import { Provider } from "react-redux";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { store } from "../store";
import "./App.scss";
import Layout from "./layout/Layout";
import CatalogPage from "./pages/CatalogPage";
import HomePage from "./pages/HomePage";
import ProductPage from "./pages/productPage/ProductPage";
import RegisterPage from "./pages/register/RegisterPage";
import SignInPage from "./sign-in/SignIn";
import CartPage from "./pages/cart/CartPage";

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<HomePage />} />
            <Route path="/Catalog" element={<CatalogPage />} />
            <Route path="/catalog/:category" element={<CatalogPage />} />
            <Route path="/catalog/product/:id" element={<ProductPage />} />
            <Route path="/register" element={<RegisterPage />} />
            <Route path="/login" element={<SignInPage />} />
            <Route path="/cart" element={<CartPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
