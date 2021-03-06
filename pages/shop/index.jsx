import React, { useContext } from "react";
import { CategoriesContext } from "../../context/categories.context";
import styles from "./shop.module.scss";
import CategoryPreview from "../../components/category-preview";

const Shop = () => {
  const { categoriesMap } = useContext(CategoriesContext);
  return (
    <div className={styles["products-container"]}>
      {Object.keys(categoriesMap).map((title) => {
        const products = categoriesMap[title];
        return (
          <CategoryPreview title={title} products={products} key={title} />
        );
      })}
    </div>
  );
};

export default Shop;
