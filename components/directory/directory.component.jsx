import CategoryItem from "../categories/CategoryItem.component";

import styles from "./directory.styles.module.scss";

const Directory = (props) => {
  return (
    <div className={styles.container}>
      {props.categories.map((category) => (
        <CategoryItem category={category} key={category.id} />
      ))}
    </div>
  );
};

export default Directory;
