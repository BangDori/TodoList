import { createAction, handleActions } from 'redux-actions';

const INIT = 'todos/INIT';
const INSERT = 'todos/INSERT';
const TOGGLE = 'todos/TOGGLE';
const REMOVE = 'todos/REMOVE';

export const init = createAction(INIT);
export const insert = createAction(INSERT);
export const toggle = createAction(TOGGLE);
export const remove = createAction(REMOVE);

const initialState = [{}];

const todos = handleActions(
  {
    [INIT]: (state, { payload: initData }) => initData,
    [INSERT]: (state, { payload: todo }) => state.concat(todo),
    [TOGGLE]: (state, { payload: id }) => {
      return state.map((todo) =>
        todo.id === id ? { ...todo, checked: !todo.checked } : todo,
      );
    },
    [REMOVE]: (state, { payload: id }) =>
      state.filter((todo) => todo.id !== id),
  },
  initialState,
);

export default todos;
