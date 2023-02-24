import { useCallback, useEffect, useState } from 'react';
import TodosBox from '../../styles/pages/TodosBox';
import {
  getTodoList,
  getTot,
  insertTodoList,
  removeTodoList,
  updateTodoList,
} from '../../services/todo';
import TodoInsert from './TodoInsert';
import TodoList from './TodoList';

const TodoTemplate = ({ isLogin }) => {
  const [todos, setTodos] = useState(undefined);

  useEffect(() => {
    const TodoList = async () => {
      try {
        const list = await getTodoList(isLogin.name);
        setTodos(list);
      } catch (e) {
        console.log(e);
      }
    };

    TodoList();
  }, [isLogin]);

  const onInsert = useCallback(
    async (text) => {
      const id = await getTot();

      const nextTodo = {
        id: id,
        user_name: isLogin.name,
        text,
        checked: false,
      };

      await insertTodoList(nextTodo);
      setTodos(todos.concat(nextTodo));
    },
    [isLogin, todos],
  );

  const onToggle = useCallback(
    async (id) => {
      const nextTodos = todos.map((todo) =>
        todo.id === id ? { ...todo, checked: !todo.checked } : todo,
      );

      updateTodoList(id, todos[id - 1]);
      setTodos(nextTodos);
    },
    [todos],
  );

  const onRemove = useCallback(
    async (id) => {
      const nextTodos = todos.filter((todo) => todo.id !== id);

      removeTodoList(id);
      setTodos(nextTodos);
    },
    [todos],
  );

  if (todos === undefined) {
    return <h3 style={{ color: 'red' }}>서버와의 연결이 끊어졌습니다.</h3>;
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
