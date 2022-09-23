import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./components/pages/Home";
import Products from "./components/pages/Products";
import Nav from "./components/pages/Nav";
import SideBarLeft from "./components/pages/SideBarLeft";
import SideBarRight from "./components/pages/SideBarRight";

// import SidebarRight from "./components/sidebarRight/SidebarRight";
function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} exact></Route>
          <Route path="/" element={<SideBarLeft />}></Route>
          <Route path="/" element={<Nav />}></Route>
          <Route path="/" element={<Products />}></Route>
          <Route path="/" element={<SideBarRight />}></Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
