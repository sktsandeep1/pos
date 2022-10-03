import React from "react";
import Cart from "../cart/Cart";

import Payment_Details from "../payment-details/Payment_Details";

const Cart_Payment = () => {
  return (
    <div>
      <div className="h-72 overflow-y-scroll">
        <div>
          <Cart />
          <Payment_Details />
        </div>
      </div>
    </div>
  );
};

export default Cart_Payment;
