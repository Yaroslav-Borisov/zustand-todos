import { useEffect } from 'react';
import { useTodos } from '../../store/useTodos';
import TodoItem from '../todoItem/todoItem';
import styles from './todoList.module.css';
import { useFilters } from '../../store/useFilters';
import { FilterType, TodoType } from '../../const';

const TodoList = () => {
  const { todos, loading, error, getTodos } = useTodos((state) => ({
    todos: state.todos,
    loading: state.loading,
    error: state.error,
    getTodos: state.getTodos,
  }));

  const filterType = useFilters((state) => state.filterType);

  useEffect(() => {
    getTodos();
  }, []);

  const gitFilteredTodos = (filterType: FilterType, todos: TodoType[]) => {
    switch (filterType) {
      case FilterType.All:
        return todos;
      case FilterType.Active:
        return todos.filter((todo) => todo.completed === false);
      case FilterType.Done:
        return todos.filter((todo) => todo.completed === true);
    }
  };

  return (
    <ul className={styles.todoList}>
      {loading ? (
        <h3>Loading...</h3>
      ) : (
        gitFilteredTodos(filterType, todos).map((item) => (
          <TodoItem todoItem={item} key={`todoItem-${item.id}`} />
        ))
      )}
      {error && error}
    </ul>
  );
};

export default TodoList;
