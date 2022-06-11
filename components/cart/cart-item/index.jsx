import React from "react";
import styles from "./cart-item.module.scss";
import Image from "next/image";

const CartItem = ({ cartItem }) => {
  const { name, quantity, imageUrl, price } = cartItem;
  return (
    <div className={styles["cart-item-container"]}>
      <Image src={imageUrl} alt={`${name}`} height={"100%"} width={"100%"} />
      <div className={styles["item-details"]}>
        <span className={styles.name}>{name}</span>
        <span className={styles.name}>
          {quantity} x $ {price}
        </span>
      </div>
    </div>
  );
};

export default CartItem;
