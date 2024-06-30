import { useTodos } from '../../store/store';
import TodoItem from '../todoItem/todoItem';
import styles from './todoList.module.css';

const TodoList = () => {
  const todos = useTodos((state) => state.todos);

  return (
    <ul className={styles.todoList}>
      {todos.map((item) => (
        <TodoItem todoItem={item} key={`todoItem-${item.id}`} />
      ))}
    </ul>
  );
};

export default TodoList;
