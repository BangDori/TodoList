import React from "react";
import TodoListItem from "./TodoListItem";

const TodoList = ({ todos, onToggle, onRemove }) => {
  return (
    <>
      {todos.map((todo) => (
        <TodoListItem
          key={todo.id}
          todo={todo}
          onToggle={onToggle}
          onRemove={onRemove}
        />
      ))}
    </>
  );
};

export default TodoList;
