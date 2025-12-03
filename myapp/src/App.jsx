import { BrowserRouter, Route, Routes } from "react-router";
import PracticePage from "./pages/practice";
import ProductsPage from "./pages/products";
import HomePage from "./pages/home";
import AboutPage from "./pages/about";
import ContactPage from "./pages/contact";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/products" element={<ProductsPage />} />
        <Route path="/practice" element={<PracticePage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
