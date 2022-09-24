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
      <div className="container h-screen bg-violet-800 text-violet-200">
        <nav className="flex justify-around items-center">
          <ul className="flex gap-1 justify-around items-center font-bold">
            <li>img</li>
            <li className="">
              Alex <span>(City)</span>
            </li>
            <li>
              <RiArrowDownSFill />
            </li>
          </ul>
          <ul className="flex gap-1 justify-around items-center">
            <li>
              <IoMdBarcode />
            </li>
            <li>
              <FaPause />
            </li>
            <li>
              <FaShoppingCart />
            </li>
          </ul>
        </nav>
        <nav>
          <ul className="flex justify-around items-center">
            <li>
              <AiFillDelete />
            </li>
            <li className="flex">
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
        <div>
          <div className=" ">
            <div className="flex justify-around items-center ">
              <img src="" alt="img" />
              <small>
                Salad <p>250g</p>
              </small>
              <small>$ 500.00</small>
              <div className="flex flex-col gap-1 items-center">
                <FaPlusCircle />
                <input
                  className="w-12 h-5 text-violet-900 rounded"
                  type="number"
                  name=""
                  id=""
                />
                <FaMinusCircle />
              </div>
              <FaPlusCircle />
            </div>
            <hr />
            <div>
              <small>
                Available Loyalty Balance : <span>10pt</span>
              </small>
            </div>
            <hr />
            <div>
              <div>
                <small>Sub-total</small>
                <span> $ 100.00</span>
              </div>
              <div>
                <small>Taxes</small>
                <span> $ 30.00</span>
              </div>
              <div>
                <input type="checkbox" />
                <small>Home Delivery</small>
                <input
                  className="w-12 h-5 text-violet-900 rounded"
                  type="number"
                  name=""
                  id=""
                />
              </div>
              <div>
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
            <hr />
            <div>
              <small>Total </small>
              <span>$ 2324.00</span>
            </div>
          </div>
        </div>
        <div>
          <div>
            <FaUserAlt />
            <span>Select Customer</span>
          </div>
          <div>
            <div>
              <div>
                <FaMinusSquare />
                Discount
              </div>
              <div>
                <RiCoupon5Fill />
                Coupon
              </div>
            </div>
            <div>
              <div>
                <FaPause /> Hold Order
              </div>
              <div>
                <GiReturnArrow />
                Return Order
              </div>
            </div>
          </div>
          <div>
            <GiSwipeCard />
            Checkout
          </div>
        </div>
      </div>
    </>
  );
};

export default SideBarRight;
