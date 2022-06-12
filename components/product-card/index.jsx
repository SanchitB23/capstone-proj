import React, { useContext } from "react";
import styles from "./product-card.module.scss";
import Button, { BUTTON_TYPE_CLASSES } from "../button";
import Image from "next/image";
import { CartContext } from "../../context/cart.context";

const ProductCard = ({ product }) => {
  const { name, price, imageUrl } = product;
  const { addItemToCart } = useContext(CartContext);
  const addProductToCart = () => addItemToCart(product);
  return (
    <div className={styles["product-card-container"]}>
      <Image src={imageUrl} alt={`${name}`} layout="fill" />
      <div className={styles.footer}>
        <span className={styles.name}>{name}</span>
        <span>${price}</span>
      </div>
      <Button
        button_type={BUTTON_TYPE_CLASSES.inverted}
        onClick={addProductToCart}
      >
        Add to cart
      </Button>
    </div>
  );
};

export default ProductCard;
