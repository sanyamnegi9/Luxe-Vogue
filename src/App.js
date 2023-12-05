import { BrowserRouter, Route, Routes } from "react-router-dom";
import { SharedHomeLayout, SharedLayout } from "./Components/SharedLayouts";
import {
  BlogDetails,
  Home,
  Checkout,
  ProductDetails,
  Test,
  Error,
  Products,
} from "./Pages";
import CartPage from "./Pages/CartPage/";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<SharedHomeLayout />}>
          <Route index element={<Home />} />
          <Route path="products">
            <Route index element={<Products />} />
            <Route path=":productId/:productTitle" element={<ProductDetails />} />
          </Route>
          <Route path="blog/:blogId/:blogTitle" element={<BlogDetails />} />
          <Route path="test" element={<Test />} />
        </Route>
        <Route path="cart" element={<SharedLayout />}>
          <Route index element={<CartPage />} />
        </Route>
        <Route path="checkout" element={<Checkout />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
