import { FilterType, TodoType } from '../../const';
import { useTodos } from '../../store/useTodos';
import styles from './footer.module.css';

const Footer = () => {
  const todos = useTodos((state) => state.todos);

  const getFiltyerTodosNumber = (todos: TodoType[], filterType: FilterType) => {
    switch (filterType) {
      case FilterType.Active:
        return todos.filter((todo) => todo.completed === false).length;
      case FilterType.Done:
        return todos.filter((todo) => todo.completed === true).length;
    }
  };
  return (
    <span className={styles.footer__text}>
      {getFiltyerTodosNumber(todos, FilterType.Active)} more to do,{' '}
      {getFiltyerTodosNumber(todos, FilterType.Done)} done
    </span>
  );
};

export default Footer;
