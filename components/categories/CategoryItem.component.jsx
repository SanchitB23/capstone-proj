import React from "react";
import styles from "./CategoryItem.styles.module.scss";
import Link from "next/link";

const CategoryItem = ({ category }) => {
  return (
    <Link key={category.id} href={`/shop/${category.title}`}>
      <div className={styles.card} key={category.id}>
        <div
          className={styles.bgImg}
          style={{ backgroundImage: `url(${category.imageUrl})` }}
        ></div>
        <div className={styles.category}>
          <h2>{category.title}</h2>
          <p>Shop Now</p>
        </div>
      </div>
    </Link>
  );
};
export default CategoryItem;
