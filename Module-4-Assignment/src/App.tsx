import { BrowserRouter, Routes, Route } from "react-router-dom";
import ShoppingCart from "./page/ShoppingCart";
import NavBar from "./component/NavBar";
import Login from "./page/Login";
import NotFound from "./component/NotFound";
import Home from "./page/Home";
import ProtectedRoute from "./component/ProtectedRoute";
import Register from "./page/Register";
import ProductDetail from "./page/ProductDetail";
// import { CartProvider } from "./context/cartContext";



const App = () => {
  return (
    <>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route element={<ProtectedRoute />}>
            <Route path="*" element={<NotFound />} />
            <Route path="/ShoppingCart" element={<ShoppingCart />} />
            <Route path="/ProductDetail/:productId" element={<ProductDetail />} />
          </Route>
          <Route path="/Login" element={<Login />} />
          <Route path="/Register" element={<Register />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
