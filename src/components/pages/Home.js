import React from "react";
import Products from "./Products";
import SideBarLeft from "./SideBarLeft";
import SideBarRight from "./SideBarRight";

const Home = () => {
  return (
    <div className="grid grid-cols-8 ">
      <div className="col-span-1 ">
        <SideBarLeft />
      </div>
      <div className=" col-span-5 ">
        <Products />
      </div>
      <div className="col-span-2  ">
        <SideBarRight />
      </div>
    </div>
  );
};

export default Home;
