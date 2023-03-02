import { createAction, handleActions } from 'redux-actions';

const SET = 'user/SET';
const RESET = 'user/RESET';

export const set = createAction(SET);
export const reset = createAction(RESET);

const initialState = {
  id: '',
  name: '',
  status: false,
};

const user = handleActions(
  {
    [SET]: (state, action) => action.payload,
    [RESET]: (state, action) => ({
      id: '',
      name: '',
      status: false,
    }),
  },
  initialState,
);

export default user;
