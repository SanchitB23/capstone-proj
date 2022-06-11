import CategoryItem from '../categories/CategoryItem.component';

import styles from './directory.styles.module.scss';

const Directory = (props) => {
  return (
    <div className={styles.container}>
      {props.categories.map((category) => (
        <CategoryItem key={category.id} category={category} />
      ))}
    </div>
  );
};

export default Directory;
