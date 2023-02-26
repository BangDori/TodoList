import { useCallback, useState, useReducer, useEffect } from 'react';
import TodosBox from '../../styles/pages/TodosBox';
import {
  getTot,
  insertTodoList,
  removeTodoList,
  updateTodoList,
} from '../../services/todo';
import TodoInsert from './TodoInsert';
import TodoList from './TodoList';

function reducer(todos, action) {
  switch (action.type) {
    case 'SET_DATA':
      return action.data;
    case 'INSERT':
      return todos.concat(action.todo);
    case 'UPDATE':
      return todos.map((todo) =>
        todo.id === action.id ? { ...todo, checked: !todo.checked } : todo,
      );
    case 'DELETE':
      return todos.filter((todo) => todo.id !== action.id);
    default:
      return todos;
  }
}

async function fetchTodos(name) {
  return await fetch(`http://localhost:4000/todos?user_name=${name}`)
    .then((res) => res.json())
    .then((data) => data);
}

const TodoTemplate = ({ isLogin }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [todos, dispatch] = useReducer(reducer, {});

  useEffect(() => {
    fetchTodos(isLogin.name).then((data) => {
      dispatch({ type: 'SET_DATA', data });
      setIsLoading(false);
    });
  }, [isLogin]);

  const onInsert = useCallback(
    async (text) => {
      const id = await getTot();

      const todo = {
        id: id,
        user_name: isLogin.name,
        text,
        checked: false,
      };

      dispatch({ type: 'INSERT', todo });
      insertTodoList(todo);
    },
    [isLogin],
  );

  const onToggle = useCallback(
    async (id) => {
      const [todo] = todos.filter((t) => t.id === id);

      dispatch({ type: 'UPDATE', id });
      updateTodoList(id, todo);
    },
    [todos],
  );

  const onRemove = useCallback(async (id) => {
    dispatch({ type: 'DELETE', id });
    removeTodoList(id);
  }, []);

  if (isLoading) {
    return <h3>Loading...</h3>;
  }

  return (
    <TodosBox>
      <div className='todo_container'>
        <div className='app-title'>Todo List</div>
        <TodoInsert onInsert={onInsert} />

        <TodoList todos={todos} onToggle={onToggle} onRemove={onRemove} />
      </div>
    </TodosBox>
  );
};

export default TodoTemplate;
