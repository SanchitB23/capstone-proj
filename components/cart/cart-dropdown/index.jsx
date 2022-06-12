import React, { useContext } from "react";
import styles from "./cart-dropdown.module.scss";
import Button from "../../button";
import CartItem from "../cart-item";
import { CartContext } from "../../../context/cart.context";
import Link from "next/link";

const CartDropdown = () => {
  const { cartItems, setIsCartOpen } = useContext(CartContext);
  return (
    <div className={styles["cart-dropdown-container"]}>
      <div className={styles["cart-items"]}>
        {cartItems.map((value, index) => (
          <CartItem cartItem={value} key={index} />
        ))}
      </div>
      <Link href="/checkout">
        <Button onClick={() => setIsCartOpen((prevState) => !prevState)}>
          Go to Checkout
        </Button>
      </Link>
    </div>
  );
};

export default CartDropdown;
