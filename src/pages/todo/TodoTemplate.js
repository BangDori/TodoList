import { useCallback, useEffect, useReducer, useRef } from 'react';
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

function reducer(todos, action) {
  switch (action.type) {
    case 'INSERT':
      return [...todos, action.todo];
    case 'UPDATE':
      return todos.map((todo) => {
        return todo.id === action.id
          ? { ...todo, checked: !todo.checked }
          : todo;
      });
    case 'DELETE':
      return todos.filter((todo) => todo.id !== action.id);
    default:
      return todos;
  }
}

const TodoTemplate = ({ isLogin }) => {
  const [todos, dispatch] = useReducer(reducer, []);
  const id = useRef(1);

  useEffect(() => {
    const TodoList = async () => {
      try {
        const list = await getTodoList(isLogin.name);

        if (list.length !== 0) dispatch({ type: 'INSERT', list });
      } catch (e) {
        console.log(e);
      }
    };

    TodoList();
  }, [isLogin]);

  const onInsert = useCallback(
    async (text) => {
      const todo = {
        id: id.current,
        user_name: isLogin.name,
        text,
        checked: false,
      };

      id.current += 1;
      dispatch({ type: 'INSERT', todo });
    },
    [isLogin],
  );

  const onToggle = useCallback(async (id) => {
    dispatch({ type: 'UPDATE', id });
  }, []);

  const onRemove = useCallback(async (id) => {
    dispatch({ type: 'DELETE', id });
  }, []);

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
