import React, { useContext } from "react";
import { ProductContext } from "../../context/product.context";
import ProductCard from "../../components/product-card";
import styles from "./shop.module.scss";

const Shop = () => {
  const { products } = useContext(ProductContext);
  return (
    <div className={styles["products-container"]}>
      {products.map((product) => (
        <ProductCard product={product} key={product.id} />
      ))}
    </div>
  );
};

export default Shop;
