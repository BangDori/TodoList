import React, { useCallback } from 'react';
import { List } from 'react-virtualized';
import TodoListItem from './TodoListItem';

const TodoList = ({ todos, onToggle, onRemove }) => {
  /**
   * 기본적으로, react-virtualized는 오직 화면에 보여지는 행들만 렌더링한다.
   * 하지만, 유저가 빠르게 스클롤링 할 때와 같은 경우에
   * 유저 스크롤링을 유지하기 위해 추가적인 행을 렌더링할 필요가 있다.
   * 부드러운 스크롤을 보장하기 위해, react-virtaulized 라이브러리는 'overscanRowCount'(기본값 10)를 제공한다.
   * 대부분의 경우 최적의 성능을 위해 최소 overscanRowCount를 10으로 정하는것을 권장한다.
   */
  const rowRenderer = useCallback(
    ({ index, key, style }) => {
      const todo = todos[index];
      return (
        <TodoListItem
          todo={todo}
          key={key}
          onRemove={onRemove}
          onToggle={onToggle}
          style={style}
        />
      );
    },
    [onRemove, onToggle, todos],
  );

  return (
    <List
      className='TodoList'
      width={360} // View 전체 크기
      height={168} // View 전체 높이
      rowCount={todos.length} // 항목의 전체 개수
      rowHeight={42} // 항목 높이
      rowRenderer={rowRenderer} // 렌더링 할 항목
      list={todos} // 배열
      style={{ outline: 'none' }} // list에 기본으로 적용되는 outline 스타일 제거
    />
  );
};

export default React.memo(TodoList);
