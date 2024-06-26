import { BrowserRouter, Route, Routes } from "react-router-dom";
import { SharedHomeLayout, SharedLayout } from "./Components/SharedLayouts";
import ProtectedRoute from "./Components/ProtectedRoute";
import {
  Home,
  Checkout,
  ProductDetails,
  Error,
  Products,
  Login,
  Dashboard,
  Cart,
} from "./Pages";

function App() {
  return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<SharedHomeLayout />}>
            <Route index element={<Home />} />

            <Route path="products">
              <Route index element={<Products />} />
              <Route
                path=":productId/:productTitle"
                element={<ProductDetails />}
              />
            </Route>
            <Route path=":productCategory" element={<Products />} />
          </Route>
          <Route path="/" element={<SharedLayout />}>
            <Route path="cart" element={<Cart />} />
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
          <Route path="*" element={<Error />} />
        </Routes>
      </BrowserRouter>
  );
}

export default App;
