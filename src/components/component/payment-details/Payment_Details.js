import React from "react";
import Cart from "../cart/Cart";
const Payment_Details = () => {
  return (
    <>
      <hr className="mt-2 mb-1" />
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
    </>
  );
};

export default Payment_Details;
