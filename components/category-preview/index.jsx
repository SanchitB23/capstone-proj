import styles from "./category-preview.module.scss";
import React from "react";
import ProductCard from "../product-card";
import Link from "next/link";

const CategoryPreview = ({ title, products }) => {
  return (
    <div className={styles["category-preview-container"]}>
      <h2>
        <Link href={`shop/${title}`}>
          <span className={styles.title}>{title.toUpperCase()}</span>
        </Link>
      </h2>
      <div className={styles.preview}>
        {products
          .filter((_, index) => index < 4)
          .map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
      </div>
    </div>
  );
};

export default CategoryPreview;
