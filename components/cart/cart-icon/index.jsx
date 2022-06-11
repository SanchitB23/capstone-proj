import React, { useContext } from "react";
import Cart from "../../../assets/shopping-bag.svg";
import styles from "./cart-icon.module.scss";
import { CartContext } from "../../../context/cart.context";

const CartIcon = () => {
  const { setIsCartOpen, cartCount } = useContext(CartContext);

  return (
    <div
      className={styles["cart-icon-container"]}
      onClick={() => setIsCartOpen((prevState) => !prevState)}
    >
      <Cart className={styles["shopping-icon"]} />
      <span className={styles["item-count"]}>{cartCount}</span>
    </div>
  );
};

export default CartIcon;
