import React from "react";
import Header from "../Header";
import { CartContext } from "../../context/AppContext"; 

const Cart = () => {
  const [cart, ] = CartContext()
  return (
    <>
    <Header />
    cart
  </>

  );
};

export default Cart;