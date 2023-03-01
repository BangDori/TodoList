import {
  useCallback,
  useState,
  useReducer,
  useEffect,
  useContext,
} from 'react';
import TodosBox from '../../styles/pages/TodosBox';
import {
  getTot,
  insertTodoList,
  removeTodoList,
  updateTodoList,
} from '../../services/todo';
import TodoInsert from './TodoInsert';
import TodoList from './TodoList';
import UserContext from '../../contexts/user';

// 리듀서를 통한 복잡한 상태 관리
function reducer(todos, action) {
  switch (action.type) {
    // 초기 데이터 삽입
    case 'SET_DATA':
      return action.data;
    // 데이터 삽입
    case 'INSERT':
      return todos.concat(action.todo);
    // 데이터 수정
    case 'UPDATE':
      return todos.map((todo) =>
        todo.id === action.id ? { ...todo, checked: !todo.checked } : todo,
      );
    // 데이터 삭제
    case 'DELETE':
      return todos.filter((todo) => todo.id !== action.id);
    default:
      return todos;
  }
}

// 유저의 데이터를 query를 이용하여 불러오기
async function fetchTodos(name) {
  return await fetch(`http://localhost:4000/todos?user_name=${name}`)
    .then((res) => res.json())
    .then((data) => data);
}

const TodoTemplate = () => {
  const { state } = useContext(UserContext);
  // todos 로딩이 끝났음을 확인하기 위해 useState hook으로 isLoading 상태 관리
  const [isLoading, setIsLoading] = useState(false);
  // todos에 대한 복잡한 상태 관리를 위해 useReducer hook으로 todos 상태 관리
  const [todos, dispatch] = useReducer(reducer, null);

  useEffect(() => {
    // 비동기 함수를 통해, todos가 순차적으로 처리될 수 있도록 처리
    const fetchData = async () => {
      // 데이터를 불러오기 전까지 loading 상태를 true로 설정
      setIsLoading(true);
      try {
        await fetchTodos(state.isLogin.name).then((data) => {
          // 정상적으로 fetch 되었을 경우, dispatch를 통해 todos 상태에 데이터들을 저장
          dispatch({ type: 'SET_DATA', data });
        });
      } catch (e) {
        console.log(e);
      }

      // 데이터를 불러오기가 종료되면 loading 상태를 false로 설정
      setIsLoading(false);
    };
    fetchData();
  }, [state]);

  const onInsert = useCallback(
    async (text) => {
      // 게시글 아이디 받아오기
      const id = await getTot();

      const todo = {
        id: id,
        user_name: state.isLogin.name,
        text,
        checked: false,
      };

      // view에 반영
      dispatch({ type: 'INSERT', todo });
      // 상태를 데이터베이스에 저장하기
      insertTodoList(todo);
    },
    [state],
  );

  const onToggle = useCallback(
    async (id) => {
      // filter 함수를 사용해, 일치하는 데이터 가져오기
      const [todo] = todos.filter((t) => t.id === id);

      // view에 반영
      dispatch({ type: 'UPDATE', id });
      // 수정된 상태를 데이터베이스에 저장하기
      updateTodoList(id, todo);
    },
    [todos],
  );

  const onRemove = useCallback(async (id) => {
    // view 반영
    dispatch({ type: 'DELETE', id });
    // id와 일치하는 데이터 데이터베이스에서 삭제하기
    removeTodoList(id);
  }, []);

  // 로딩중 이라면, 로딩 중이라는 문구 표시
  if (isLoading) {
    return <h3>Loading...</h3>;
  }

  // 로딩이 끝났음에도, 데이터가 불러와지지 않을 경우 null을 반환
  if (!todos) {
    return null;
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
