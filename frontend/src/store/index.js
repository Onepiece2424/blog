import { createStore, combineReducers } from "redux";
import { reducer as reduxFormReducer } from 'redux-form';


const initialState = {
  item_name: "ダンベル",
  quantity: 20
};

const addtodoReducer = (state = initialState) => {
  return state;
};

const countReducer = (
  state = {
    count: 50,
  }
) => {
  return state;
};

const postsReducer = (
  state = {
    posts: [
      { id: 1, title: 'Reduxについて' },
      {
        id: 2,
        title: 'ReduxのHooksについて',
      },
    ],
  }
) => {
  return state;
};


const rootReducer = combineReducers({
  countReducer,
  postsReducer,
  addtodoReducer,
  form: reduxFormReducer,
});

const store = createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;
