import { FilterType } from '../../const';
import { useFilters } from '../../store/useFilters';
import styles from './filters.module.css';
import cn from 'classnames';

const Filters = () => {
  const { filterType, setFilter } = useFilters((state) => ({
    filterType: state.filterType,
    setFilter: state.setFilter,
  }));

  return (
    <div className={styles.filters}>
      <button
        className={cn(styles.filter, filterType === FilterType.All && styles.filter__active)}
        onClick={() => setFilter(FilterType.All)}
      >
        All
      </button>
      <button
        className={cn(styles.filter, filterType === FilterType.Active && styles.filter__active)}
        onClick={() => setFilter(FilterType.Active)}
      >
        Active
      </button>
      <button
        className={cn(styles.filter, filterType === FilterType.Done && styles.filter__active)}
        onClick={() => setFilter(FilterType.Done)}
      >
        Done
      </button>
    </div>
  );
};

export default Filters;
