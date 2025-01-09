import { BrowserRouter, Routes, Route } from "react-router-dom";
import ShoppingCart from "./page/ShoppingCart";
import NavBar from "./component/NavBar";
import Login from "./page/Login";
import NotFound from "./component/NotFound";
import Home from "./page/Home";
import ProtectedRoute from "./component/ProtectedRoute";
import Register from "./page/Register";
// import ProductDetail from "./component/ProductDetail"
// import ProductListing from "./component/ProductListing"
// import ProductCategory from "./component/ProductCategory"

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
          </Route>
          <Route path="/Login" element={<Login />} />
          <Route path="/Register" element={<Register />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
