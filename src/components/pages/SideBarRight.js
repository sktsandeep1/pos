import React from "react";
import { RiArrowDownSFill } from "react-icons/ri";
import { IoMdBarcode } from "react-icons/io";
import { FaPause } from "react-icons/fa";
import { FaShoppingCart } from "react-icons/fa";
import { AiFillDelete } from "react-icons/ai";
import { FaPlusCircle } from "react-icons/fa";
import { FaMinusCircle } from "react-icons/fa";
import { FaUserAlt } from "react-icons/fa";
import { FaMinusSquare } from "react-icons/fa";
import { RiCoupon5Fill } from "react-icons/ri";
import { GiReturnArrow } from "react-icons/gi";
import { GiSwipeCard } from "react-icons/gi";

const SideBarRight = () => {
  return (
    <>
      <div className="container h-screen bg-white pt-2 sticky top-0">
        <nav className="flex justify-between items-center px-5">
          <ul className="flex justify-around items-center font-bold">
            <li>
              <img
                className="w-10 rounded-full"
                src="/images/logo.png"
                alt=""
              />
            </li>
            <li className="pl-2">
              Alex <span>(City)</span>
            </li>
            <li>
              <RiArrowDownSFill />
              <ul className="hidden">
                <li className="">Athena</li>
                <li className="">Alan</li>
              </ul>
            </li>
          </ul>
          <ul className="flex gap-3 justify-around items-center text-xl">
            <li className="cursor-pointer">
              <IoMdBarcode />
            </li>
            <li className="cursor-pointer">
              <FaPause />
            </li>
            <li className="cursor-pointer">
              <FaShoppingCart />
            </li>
          </ul>
        </nav>
        <hr className="mt-2 mb-2 " />
        <nav>
          <ul className="flex justify-around items-center ">
            <li className="text-xl text-red-600">
              <AiFillDelete />
            </li>
            <li className="flex gap-1 items-center">
              Cart Details <span>(5)</span>
              <span>
                <RiArrowDownSFill />
              </span>
            </li>
            <li>
              <FaPlusCircle />
            </li>
          </ul>
        </nav>
        <hr className="mt-2 mb-2 " />
        <div>
          <div className=" ">
            <div className="flex justify-around items-center ">
              <img className="w-10" src="/images/logo.png" alt="img" />
              <small className="text-center">
                <span className="text-sm font-bold block"> Salad</span>
                <span className="text-xs">250g</span>
              </small>
              <small>$500.00</small>
              <div className="flex flex-col gap-1 items-center">
                <FaPlusCircle />
                <input
                  className="w-16 h-5 text-violet-900 rounded border border-black p-1"
                  type="number"
                  name=""
                  id=""
                />
                <FaMinusCircle />
              </div>
              <FaPlusCircle />
            </div>
            <hr className="mt-2 mb-2" />
            <div>
              <small className="px-8 font-bold text-sm">
                Available Loyalty Balance : <span>10pt</span>
              </small>
            </div>
            <hr className="mt-2 mb-2" />
            <div>
              <div className="px-8 py-1 font-bold text-lg flex justify-between items-center">
                <small>Sub-total</small>
                <span className="text-xs"> $ 100.00</span>
              </div>
              <div className="px-8 py-1 font-bold text-lg flex justify-between items-center">
                <small>Taxes</small>
                <span className="text-xs"> $ 30.00</span>
              </div>
              <div className="px-8 py-1 font-bold text-lg flex gap-5">
                <input type="checkbox" />
                <small>Home Delivery</small>
                <input
                  className="w-12 h-5 text-violet-900 rounded"
                  type="number"
                  name=""
                  id=""
                />
              </div>
              <div className="px-8 py-1 font-bold text-lg flex gap-5">
                <input type="checkbox" />
                <small>Loyalty Points</small>
                <input
                  className="w-12 h-5 text-violet-900 rounded"
                  type="number"
                  name=""
                  id=""
                />
              </div>
            </div>
            <hr className="mt-2 mb-2" />
            <div className="px-8 py-1 font-bold text-lg flex justify-between items-center">
              <small className="font-bold text-sm">Total </small>
              <span className="text-xs">$ 2324.00</span>
            </div>
          </div>
        </div>
        <div>
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
