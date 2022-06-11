import React from "react";
import styles from "./cart-dropdown.module.scss";
import Button from "../button";

const CartDropdown = () => {
  return (
    <div className={styles["cart-dropdown-container"]}>
      <div className={styles["cart-items"]}></div>
      <Button>Go to Checkout</Button>
    </div>
  );
};

export default CartDropdown;
