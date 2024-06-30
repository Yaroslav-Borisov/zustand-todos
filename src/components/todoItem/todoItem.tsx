import BusketIcon from '../../icons/busket';
import DoneIcon from '../../icons/done';
import { useTodos } from '../../store/store';
import styles from './todoItem.module.css';
import cn from 'classnames';

interface TodoType {
  id: string;
  text: string;
  doneStatus: boolean;
}

interface TodoItemProps {
  todoItem: TodoType;
}

const TodoItem = ({ todoItem }: TodoItemProps) => {
  const changeTodoDoneStatus = useTodos((state) => state.changeTodoDoneStatus);
  const deleteTodo = useTodos((state) => state.deleteTodo);

  return (
    <li className={styles.todoItem}>
      <button className={styles.todoItem__done} onClick={() => changeTodoDoneStatus(todoItem.id)}>
        <DoneIcon className={styles.todoItem__doneIcon} />
      </button>
      <span className={cn(styles.todoItem__text, todoItem.doneStatus && styles.todoItem__textDone)}>
        {todoItem.text}
      </span>
      <button className={styles.todoItem__delete} onClick={() => deleteTodo(todoItem.id)}>
        <BusketIcon className={styles.todoItem__deleteIcon} />
      </button>
    </li>
  );
};

export default TodoItem;
