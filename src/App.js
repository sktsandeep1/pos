import { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import { CartContext } from "./components/context/CartContext";
import Home from "./components/pages/Home";
import Products from "./components/pages/Products";
import Nav from "./components/pages/Nav";
import SideBarLeft from "./components/pages/SideBarLeft";
import SideBarRight from "./components/pages/SideBarRight";
import Cart from "./components/component/cart/Cart";
import R_Cart from "./components/component/R-sidebar-component/R_Cart";
import R_nav from "./components/component/R-sidebar-component/R_nav";

function App() {
  const [cart, setCart] = useState({});
  // fetch from local storage

  useEffect(() => {
    const cart = window.localStorage.getItem("cart");
    setCart(JSON.parse(cart));
  }, []);

  useEffect(() => {
    window.localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} exact></Route>
          <Route path="/" element={<SideBarLeft />}></Route>
          <Route path="/" element={<Nav />}></Route>
          <Route path="/" element={<Products />}></Route>
          <Route path="/" element={<SideBarRight />}></Route>
          <Route path="/" element={<Cart />}></Route>
          <Route path="/" element={<R_Cart />}></Route>
          <Route path="/" element={<R_nav />}></Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
