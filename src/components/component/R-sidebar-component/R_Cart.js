import React from "react";
import { FaPlusCircle } from "react-icons/fa";
import { FaMinusCircle } from "react-icons/fa";
const R_Cart = () => {
  return (
    <>
      <div className="flex justify-around items-center pb-2" id="R_Cart">
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
        <div className="rotate-45 text-red-600 text-lg">
          <FaPlusCircle />
        </div>
      </div>
    </>
  );
};

export default R_Cart;
