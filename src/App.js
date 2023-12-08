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
  Login,
  Dashboard,
  ProductCategory,
} from "./Pages";
import CartPage from "./Pages/CartPage/";
import ProtectedRoute from "./Components/ProtectedRoute";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<SharedHomeLayout />}>
          <Route index element={<Home />} />

          <Route path="products">
            <Route index element={<Products />} />
            <Route path=":productCategory" element={<ProductCategory />} />
            <Route
              path=":productId/:productTitle"
              element={<ProductDetails />}
            />
          </Route>
          <Route path="blog/:blogId/:blogTitle" element={<BlogDetails />} />
        </Route>
        <Route path="/" element={<SharedLayout />}>
          <Route path="cart" element={<CartPage />} />
          <Route path="login" element={<Login />} />
          <Route
            path="dashboard"
            element={
              <ProtectedRoute>
                <Dashboard />
              </ProtectedRoute>
            }
          />
        </Route>
        <Route path="checkout" element={<Checkout />} />
        <Route path="test" element={<Test />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
