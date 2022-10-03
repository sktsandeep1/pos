import React from "react";
import { BiCategory } from "react-icons/bi";
import { BiCircle } from "react-icons/bi";
import { GiReturnArrow } from "react-icons/gi";
import { BsFillCreditCardFill } from "react-icons/bs";
import { FaDatabase } from "react-icons/fa";
import { FaGift } from "react-icons/fa";
import { IoMdSettings } from "react-icons/io";
import { FaStickyNote } from "react-icons/fa";

const SideBarLeft = () => {
  return (
    <>
      <div className="w-full h-screen bg-violet-800 text-violet-200 sticky top-0">
        <div className="top-section ">
          <div className="category flex items-center gap-3">
            <h1 className="font-bold text-xl pl-5 py-3">Categories</h1>
            <BiCategory />
          </div>
          <ul className="categories ">
            <li className="cursor-pointer text-lg pl-8 pt-2 pb-2 hover:bg-violet-900">
              Food
            </li>
            <li className="cursor-pointer text-lg pl-8 pt-2 pb-2 hover:bg-violet-900">
              Fashion
            </li>
            <li className="cursor-pointer text-lg pl-8 pt-2 pb-2 hover:bg-violet-900">
              Electronic
            </li>
            <li className="cursor-pointer text-lg pl-8 pt-2 pb-2 hover:bg-violet-900">
              Personal Care
            </li>
          </ul>
        </div>
        <hr className="w-4/5 m-auto mt-4" />
        <div className="middle-section font-bold mt-4 text-lg">
          <div className="order cursor-pointer flex items-center pl-3 gap-2 pt-2 pb-2 hover:bg-violet-900">
            <BiCircle className="" />
            <h3>Order</h3>
          </div>
          <div className="return cursor-pointer flex items-center pl-3 gap-2 pt-2 pb-2 hover:bg-violet-900">
            <GiReturnArrow />
            <h3>Returns</h3>
          </div>

          <div className="checkout cursor-pointer flex items-center pl-3 gap-2 pt-2 pb-2 hover:bg-violet-900">
            <BsFillCreditCardFill />
            <h3>Checkout</h3>
          </div>

          <div className="stock cursor-pointer flex items-center pl-3 gap-2 pt-2 pb-2 hover:bg-violet-900">
            <FaDatabase />
            <h3>Stocks</h3>
          </div>
        </div>
        <hr className="w-4/5 m-auto mt-4" />
        <div className="last-section font-bold text-lg mt-4">
          <div className="loyaltyPoint cursor-pointer flex items-center pl-3  pt-2 pb-2 gap-2 hover:bg-violet-900 ">
            <FaGift />
            <h3>Loyalty Points</h3>
          </div>
          <div className="setting cursor-pointer flex items-center pl-3 pt-2 pb-2 gap-2 hover:bg-violet-900">
            <IoMdSettings />
            <h3>Settings</h3>
          </div>
          <div className="report cursor-pointer flex items-center pl-3 pt-2 pb-2 gap-2 hover:bg-violet-900">
            <FaStickyNote />
            <h3>Reports</h3>
          </div>
        </div>
      </div>
    </>
  );
};

export default SideBarLeft;
