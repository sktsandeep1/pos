import React from "react";
import { HashLink as Link } from "react-router-hash-link";
import { IoMdBarcode } from "react-icons/io";
import { FaHandHolding, FaShoppingCart } from "react-icons/fa";
import { RiArrowDownSFill } from "react-icons/ri";
import { FaPause } from "react-icons/fa";

const R_nav = () => {
  return (
    <>
      <nav className="flex justify-between items-center px-5">
        <ul className="flex justify-around items-center font-bold">
          <li>
            <img className="w-10 rounded-full" src="/images/logo.png" alt="" />
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
          <li className="cursor-pointer ring-2 ring-black rounded-full p-2">
            <div>
              <FaPause />
              <span className="absolute top-7 right-14 text-sm text-white text-center font-bold rounded-full bg-violet-800 w-7 h-7 p-1">
                0
              </span>
            </div>
          </li>
          {/* <Link to="/#R_Cart"> */}
          <li className="cursor-pointer ring-2 ring-black rounded-full p-2">
            <div>
              <FaShoppingCart />
              <span className=" absolute top-7 right-1 text-sm text-white text-center font-bold rounded-full bg-violet-800 w-7 h-7 p-1">
                0
              </span>
            </div>
          </li>
          {/* </Link> */}
        </ul>
      </nav>
    </>
  );
};

export default R_nav;
