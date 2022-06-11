import React from "react";
import Cart from "../../assets/shopping-bag.svg";
import styles from "./cart-icon.module.scss";

const CartIcon = ({ openCart }) => {
  return (
    <div
      className={styles["cart-icon-container"]}
      onClick={() => openCart((prevState) => !prevState)}
    >
      <Cart className={styles["shopping-icon"]} />
      <span className={styles["item-count"]}>0</span>
    </div>
  );
};

export default CartIcon;
