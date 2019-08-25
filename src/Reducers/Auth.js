import { createActions, handleActions, combineActions } from 'redux-actions';

const initState = {
  isAuthenticated: !!localStorage.getItem('mr_token'),
  token: localStorage.getItem('mr_token'),
  emailLabel: '',
  nameLabel: ''
};

export const creators = createActions({
  AUTH_CHECK: () => ({}),
  SET_EMAIL: (emailLabel) => ({emailLabel}),
  SET_NAME: (nameLabel) => ({nameLabel}),
  SET_STATE: (isAuthenticated) => ({isAuthenticated})
});

const authCheckReducer = (state) => {
  state = Object.assign({}, state, {
    isAuthenticated: !!localStorage.getItem('mr_token')
  });
  return state;
};
const setEmail = (state, {payload}) => {
  const nextState = Object.assign({}, state, payload);
  nextState.fetching = false;
  nextState.isAuthenticated = true;
  return nextState;
};
const setName = (state, {payload}) => {
  const nextState = Object.assign({}, state, payload);
  nextState.fetching = false;
  nextState.isAuthenticated = true;
  return nextState;
};
const setState = (state, {payload}) => {
  const nextState = Object.assign({}, state, payload);
  return nextState;
};


export default handleActions (
  {
    AUTH_CHECK: authCheckReducer,
    SET_EMAIL: setEmail,
    SET_NAME: setName,
    SET_STATE: setState
  },
  initState
);
