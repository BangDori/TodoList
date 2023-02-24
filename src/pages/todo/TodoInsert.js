import React, { useCallback, useState } from 'react';
import styled from 'styled-components';

const TodoInsertBox = styled.form`
  display: flex;
  background: #495057;

  input {
    background: none;
    outline: none;
    border: none;
    padding: 0.5rem;
    font-size: 1.125rem;
    line-height: 1.5;
    color: white;

    &::placeholder {
      color: #dee2e6;
    }

    flex: 1;
  }

  button {
    background: none;
    outline: none;
    border: none;
    background: #868e96;
    color: white;
    padding: 0 1rem;
    font-size: 1.5rem;
    display: flex;
    align-items: center;
    cursor: pointer;
    transition: 0.1s background ease-in;

    &:hover {
      background: #adb5bd;
    }
  }
`;

const TodoInsert = ({ onInsert }) => {
  const [todo, setTodo] = useState('');

  const onChange = useCallback((e) => {
    setTodo(e.target.value);
  }, []);

  const onSubmit = useCallback(
    (e) => {
      e.preventDefault();

      onInsert(todo);
      setTodo('');
    },
    [onInsert, todo],
  );

  return (
    <TodoInsertBox onSubmit={onSubmit} method='post' action=''>
      <input
        name='todo'
        value={todo}
        onChange={onChange}
        placeholder='Input todo'
      />
      <button type='submit'>Add</button>
    </TodoInsertBox>
  );
};

export default TodoInsert;
