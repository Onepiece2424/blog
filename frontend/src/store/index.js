import { createStore, combineReducers } from "redux";
import { reducer as reduxFormReducer } from 'redux-form';


const countReducer = (
  state = {
    count: 50,
  }
) => {
  return state;
};

// pointアップダウンするreduer
const pointReducer = (state = {point: 1}, action) => {
  switch (action.type) {
    case 'INCREASE_POINT':
      return {
        point: state.point + 1,
      };
    case 'DECREASE_POINT':
      return {
        point: state.point - 1,
      };
    default:
      return state;
  }
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

const initialState = {
  alphanumerals: []
}

const alphaNumeralReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'GET_DATA':
    return {
      ...state,
      alphanumerals: action.payload
    };
    default:
      return state;
  }
};


const rootReducer = combineReducers({
  countReducer,
  pointReducer,
  postsReducer,
  alphaNumeralReducer,
  form: reduxFormReducer,
});

const store = createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
console.log(store.getState());

export default store;
