import React from "react";
import { BiCategory } from "react-icons/bi";
import { BiCircle } from "react-icons/bi";
import { GiReturnArrow } from "react-icons/gi";
import { BsFillCreditCardFill } from "react-icons/bs";
import { FaDatabase } from "react-icons/fa";
import { FaGift } from "react-icons/fa";
import { IoMdSettings } from "react-icons/io";
import { FaStickyNote } from "react-icons/fa";

const SideBarRight = () => {
  return (
    <>
      <div className="container h-screen bg-violet-800 text-violet-200">
        <div className="middle-section font-bold text-lg">
          <div className="order cursor-pointer flex items-center pl-5 gap-5 pt-2 pb-2 hover:bg-violet-900">
            <BiCircle className="" />
            <h3>Order</h3>
          </div>
          <div className="return cursor-pointer flex items-center pl-5 gap-5 pt-2 pb-2 hover:bg-violet-900">
            <GiReturnArrow />
            <h3>Returns</h3>
          </div>

          <div className="checkout cursor-pointer flex items-center pl-5 gap-5 pt-2 pb-2 hover:bg-violet-900">
            <BsFillCreditCardFill />
            <h3>Checkout</h3>
          </div>

          <div className="stock cursor-pointer flex items-center pl-5 gap-5 pt-2 pb-2 hover:bg-violet-900">
            <FaDatabase />
            <h3>Stocks</h3>
          </div>
        </div>
      </div>
    </>
  );
};

export default SideBarRight;
