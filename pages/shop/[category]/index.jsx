import React, { useContext, useEffect, useState } from "react";
import { CategoriesContext } from "../../../context/categories.context";
import ProductCard from "../../../components/product-card";
import styles from "./styles.module.scss";

const Category = ({ param }) => {
  const { categoriesMap } = useContext(CategoriesContext);
  const [products, setProducts] = useState(categoriesMap[param]);
  useEffect(() => {
    setProducts(categoriesMap[param]);
  }, [param, categoriesMap]);
  return (
    <>
      <h2 className={styles.title}>{param}</h2>
      <div className={styles.container}>
        {products &&
          products.map((product) => (
            <ProductCard product={product} key={product.id} />
          ))}
      </div>
    </>
  );
};
export const getServerSideProps = (context) => {
  return {
    props: {
      param: context.params.category,
    },
  };
};
export default Category;
