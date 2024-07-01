import { useState } from 'react';
import { useTodos } from '../../store/useTodos';
import styles from './form.module.css';

const Form = () => {
  const [todoTitle, setTodoTitle] = useState('');
  const addTodo = useTodos((state) => state.addTodo);
  return (
    <div className={styles.form}>
      <input
        className={styles.input}
        type="text"
        value={todoTitle}
        onChange={(e) => setTodoTitle(e.target.value)}
      />
      <button
        className={styles.button}
        type="button"
        onClick={() => {
          if (todoTitle) {
            addTodo(todoTitle);
            setTodoTitle('');
          }
        }}
      >
        +
      </button>
    </div>
  );
};

export default Form;
