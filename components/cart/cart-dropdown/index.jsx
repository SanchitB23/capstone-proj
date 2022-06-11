import React, { useContext } from "react";
import styles from "./cart-dropdown.module.scss";
import Button from "../../button";
import CartItem from "../cart-item";
import { CartContext } from "../../../context/cart.context";

const CartDropdown = () => {
  const { cartItems } = useContext(CartContext);
  return (
    <div className={styles["cart-dropdown-container"]}>
      <div className={styles["cart-items"]}>
        {cartItems.map((value, index) => (
          <CartItem cartItem={value} key={index} />
        ))}
      </div>
      <Button>Go to Checkout</Button>
    </div>
  );
};

export default CartDropdown;
