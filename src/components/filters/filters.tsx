import styles from './filters.module.css';
import cn from 'classnames';

const Filters = () => {
  return (
    <div className={styles.filters}>
      <button className={cn(styles.filter, styles.filter__active)}>All</button>
      <button className={styles.filter}>Active</button>
      <button className={styles.filter}>Done</button>
    </div>
  );
};

export default Filters;
