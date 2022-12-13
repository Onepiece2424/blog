import { createStore } from "redux";

// initialStateの作成
const initialState = {
  count: 1,
};

// reducerの作成
const reducer = (state = initialState) => {
  return state;
};

const store = createStore(reducer);

export default store;
