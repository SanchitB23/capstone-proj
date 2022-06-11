import React from "react";
import styles from "./product-card.module.scss";
import Button, { BUTTON_TYPE_CLASSES } from "../button";
import Image from "next/image";

const ProductCard = ({ product }) => {
  const { name, price, imageUrl } = product;
  return (
    <div className={styles["product-card-container"]}>
      <Image src={imageUrl} alt={`${name}`} layout="fill" />
      <div className={styles.footer}>
        <span className="name">{name}</span>
        <span className="price">{price}</span>
      </div>
      <Button button_type={BUTTON_TYPE_CLASSES.inverted}>Add to cart</Button>
    </div>
  );
};

export default ProductCard;
