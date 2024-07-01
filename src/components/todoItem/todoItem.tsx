import { TodoType } from '../../const';
import BusketIcon from '../../icons/busket';
import DoneIcon from '../../icons/done';
import { useTodos } from '../../store/useTodos';
import styles from './todoItem.module.css';
import cn from 'classnames';

interface TodoItemProps {
  todoItem: TodoType;
}

const TodoItem = ({ todoItem }: TodoItemProps) => {
  const changeTodoDoneStatus = useTodos((state) => state.changeTodoDoneStatus);
  const deleteTodo = useTodos((state) => state.deleteTodo);

  return (
    <li className={styles.todoItem}>
      <button
        className={styles.todoItem__done}
        onClick={() => todoItem.id && changeTodoDoneStatus(todoItem)}
      >
        <DoneIcon className={styles.todoItem__doneIcon} />
      </button>
      <span className={cn(styles.todoItem__text, todoItem.completed && styles.todoItem__textDone)}>
        {todoItem.title}
      </span>
      <button
        className={styles.todoItem__delete}
        onClick={() => todoItem.id && deleteTodo(todoItem)}
      >
        <BusketIcon className={styles.todoItem__deleteIcon} />
      </button>
    </li>
  );
};

export default TodoItem;
