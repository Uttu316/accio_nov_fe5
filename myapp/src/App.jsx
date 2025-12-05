import PracticePage from "./pages/practice";
import ProductsPage from "./pages/products";
import HomePage from "./pages/home";
import AboutPage from "./pages/about";
import ContactPage from "./pages/contact";
import NotFoundPage from "./pages/notfound";
import ProductPage from "./pages/product";
import CartProvider from "./contexts/CartContext";
import { BrowserRouter, Route, Routes } from "react-router";
import CartPage from "./pages/cart";

function App() {
  return (
    <CartProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/products" element={<ProductsPage />} />
          <Route path="/practice" element={<PracticePage />} />
          <Route path="/cart" element={<CartPage />} />
          <Route path="/product/:productId" element={<ProductPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </BrowserRouter>
    </CartProvider>
  );
}

export default App;
