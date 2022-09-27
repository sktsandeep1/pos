import React from "react";
import { IoMdBarcode } from "react-icons/io";
import { FaShoppingCart } from "react-icons/fa";
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
          <li className="cursor-pointer">
            <FaPause />
          </li>
          <li className="cursor-pointer">
            <FaShoppingCart />
          </li>
        </ul>
      </nav>
    </>
  );
};

export default R_nav;
