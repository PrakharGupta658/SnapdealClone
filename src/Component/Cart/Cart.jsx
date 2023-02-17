import React from "react";
import CardStructure from "./CartStructure";
import { CartProvider } from "react-use-cart";

function Cart() {
  return (
    <>
      <div className="container contact_div">
        <div className="row">
          <div className="col-md-6 col-10 mx-auto">
            <div className="my-2 mb-auto">
              <h1 className="text-center">Shopping Cart</h1>
            </div>
            <CartProvider>
              <CardStructure />
            </CartProvider>
          </div>
        </div>
      </div>
    </>
  );
}

export default Cart;
