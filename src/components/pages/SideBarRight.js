import React from "react";
import R_nav from "../component/R-sidebar-component/R_nav";
import R_navTwo from "../component/R-sidebar-component/R_navTwo";
import { FaPause } from "react-icons/fa";
import { FaUserAlt } from "react-icons/fa";
import { FaMinusSquare } from "react-icons/fa";
import { RiCoupon5Fill } from "react-icons/ri";
import { GiReturnArrow } from "react-icons/gi";
import { GiSwipeCard } from "react-icons/gi";
import Payment_Details from "../component/payment-details/Payment_Details";
import Cart_Payment from "../component/cart-payment/Cart_Payment";

const SideBarRight = () => {
  return (
    <>
      <div className="container h-screen bg-white pt-2 sticky top-0 flex flex-col justify between ">
        <div>
          <R_nav />
          <hr className="mt-2 mb-2 " />
          <R_navTwo />
          <hr className="mt-2 mb-2 " />
          <Cart_Payment />
        </div>
        <div className="w-full absolute bottom-0">
          <hr className=" mb-2" />
          <div className="px-8 py-1 font-bold text-lg flex justify-between items-center">
            <small className="font-bold text-sm">Total </small>
            <span className="text-xs">$ 2324.00</span>
          </div>
          <div className="bg-violet-500 hover:bg-violet-600 font-bold text-lg cursor-pointer my-2 px-2 py-2 flex justify-center items-center gap-3 ">
            <FaUserAlt />
            <span>Select Customer</span>
          </div>
          <div>
            <div className="flex">
              <div className="w-1/2 bg-violet-400 hover:bg-violet-600 cursor-pointer font-bold flex justify-center items-center gap-2 px-2 py-2 mx-1 my-1">
                <FaMinusSquare />
                Discount
              </div>
              <div className="w-1/2 bg-violet-400 hover:bg-violet-600 cursor-pointer font-bold flex justify-center items-center gap-2 px-2 py-2 mx-1 my-1">
                <RiCoupon5Fill />
                Coupon
              </div>
            </div>
            <div className="flex">
              <div className="w-1/2 bg-violet-400 hover:bg-violet-600 cursor-pointer font-bold flex justify-center items-center gap-2 px-2 py-2 mx-1 my-1">
                <FaPause /> Hold Order
              </div>
              <div className="w-1/2 bg-violet-400 hover:bg-violet-600 cursor-pointer font-bold flex justify-center items-center gap-2 px-2 py-2 mx-1 my-1">
                <GiReturnArrow />
                Return Order
              </div>
            </div>
          </div>
          <div className="bg-violet-700 hover:bg-violet-800 font-bold text-lg text-white cursor-pointer my-2 px-2 py-2 flex justify-center items-center gap-3 ">
            <GiSwipeCard />
            Checkout
          </div>
        </div>
      </div>
    </>
  );
};

export default SideBarRight;
