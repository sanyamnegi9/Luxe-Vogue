import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import { Home, Checkout, ProductDetails, Test, Error } from "./Pages";

import CartPage from "./Pages/CartPage/";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/product/:id" element={<ProductDetails />} />
        <Route path="/test" element={<Test />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="*" element={<Error />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
