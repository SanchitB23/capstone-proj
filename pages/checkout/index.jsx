import React, { useContext } from "react";
import { CartContext } from "../../context/cart.context";
import styles from "./checkout.module.scss";
import CheckoutItem from "../../components/cart/checkout-item";

const Checkout = () => {
  const { cartItems, total } = useContext(CartContext);
  return (
    <div className={styles["checkout-container"]}>
      <div className={styles["checkout-header"]}>
        <div className={styles["header-block"]}>
          <span>Product</span>
        </div>
        <div className={styles["header-block"]}>
          <span>Description</span>
        </div>
        <div className={styles["header-block"]}>
          <span>Quantity</span>
        </div>
        <div className={styles["header-block"]}>
          <span>Price</span>
        </div>
        <div className={styles["header-block"]}>
          <span>Remove</span>
        </div>
      </div>
      {cartItems.map((cartItem) => (
        <CheckoutItem cartItem={cartItem} key={cartItem.id} />
      ))}
      <span className={styles.total}>Total: ${total}</span>
    </div>
  );
};

export default Checkout;
