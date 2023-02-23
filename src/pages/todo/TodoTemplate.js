import axios from "axios";
import { useEffect, useState } from "react";
import TodosBox from "../../styles/pages/TodosBox";
import {
  getTodoList,
  insertTodoList,
  removeTodoList,
  updateTodoList,
} from "../../utils/todo";
// import { getTodoList } from "../../utils/todo";
import TodoInsert from "./TodoInsert";
import TodoList from "./TodoList";

const TodoTemplate = ({ isLogin }) => {
  const [todos, setTodos] = useState([]);

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

  const insertTodo = async (text) => {
    const nextTodos = {
      id: todos.length + 1,
      text,
      checked: false,
    };

    insertTodoList(isLogin.name, nextTodos);
    setTodos(todos.concat(nextTodos));
  };

  const onToggle = async (id) => {
    const nextTodos = todos.map((todo) =>
      todo.id === id ? { ...todo, checked: !todo.checked } : todo
    );

    updateTodoList(isLogin.name, id, todos[id - 1]);
    setTodos(nextTodos);
  };

  const onRemove = async (id) => {
    const nextTodos = todos.filter((todo) => todo.id !== id);

    removeTodoList(isLogin.name, id);
    setTodos(nextTodos);
  };

  return (
    <TodosBox>
      <div className="todo_container">
        <div className="app-title">Todo List</div>
        <TodoInsert insert={insertTodo} />
        <TodoList todos={todos} onToggle={onToggle} onRemove={onRemove} />
      </div>
    </TodosBox>
  );
};

export default TodoTemplate;
