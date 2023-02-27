import React from 'react';
import styled from 'styled-components';
import cn from 'classnames';
import {
  MdCheckBoxOutlineBlank,
  MdCheckBox,
  MdRemoveCircleOutline,
} from 'react-icons/md';

const VirtualBox = styled.div`
  & + & {
    border-top: 1px solid #dee2e6;
  }

  &:nth-child(even) {
    background: #f8f9fa;
  }
`;

const TodoListItemBox = styled.div`
  padding: 0.5rem !important;
  display: flex;
  align-items: center;

  .checkbox {
    cursor: pointer;
    flex: 1;
    display: flex;
    align-items: center;

    svg {
      font-size: 1.5rem;
    }

    .text {
      margin-left: 0.5rem;
      flex: 1;
      font-size: 18px;
    }

    &.checked {
      svg {
        color: #22b8cf;
      }

      .text {
        color: #adb5bd;
        text-decoration: line-through;
      }
    }
  }

  .remove {
    display: flex;
    align-items: center;
    font-size: 1.5rem;
    color: #000000;
    cursor: pointer;
    &:hover {
      color: #ff6b6b;
    }
  }
`;

// 각 데이터에 대한 View
const TodoListItem = ({ todo, onToggle, onRemove, style }) => {
  const { id, text, checked } = todo;

  return (
    <VirtualBox style={style}>
      <TodoListItemBox>
        <div
          className={cn('checkbox', { checked })}
          onClick={() => onToggle(id)}
        >
          {checked ? <MdCheckBox /> : <MdCheckBoxOutlineBlank />}
          <div className='text'> {text}</div>
        </div>
        <div className='remove' onClick={() => onRemove(id)}>
          <MdRemoveCircleOutline />
        </div>
      </TodoListItemBox>
    </VirtualBox>
  );
};

// todo, onRemove, onToggle이 변경되지 않으면, 리렌더링을 하지 않음
export default React.memo(TodoListItem);
