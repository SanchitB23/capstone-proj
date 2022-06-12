import React, { useContext } from "react";
import styles from "./checkout-item.module.scss";
import Image from "next/image";
import { CartContext } from "../../../context/cart.context";

const CheckoutItem = ({ cartItem }) => {
  const { price, name, quantity, imageUrl } = cartItem;
  const { clearItemFromCart, addItemToCart, removeItemFromCart } =
    useContext(CartContext);
  return (
    <div className={styles["checkout-item-container"]}>
      <div className={styles["image-container"]}>
        <Image src={imageUrl} alt={name} height={"100%"} width={"100%"} />
      </div>
      <span className={styles.name}>{name}</span>
      <span className={styles.quantity}>
        <div
          className={styles.arrow}
          onClick={() => removeItemFromCart(cartItem)}
        >
          &#10094;
        </div>
        <span className={styles.value}>{quantity}</span>
        <div className={styles.arrow} onClick={() => addItemToCart(cartItem)}>
          &#10095;
        </div>
      </span>
      <span className={styles.price}>{price}</span>
      <div
        className={styles["remove-button"]}
        onClick={() => clearItemFromCart(cartItem)}
      >
        &#10005;
      </div>
    </div>
  );
};

export default CheckoutItem;
