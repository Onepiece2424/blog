// import { createStore } from 'redux'

export const initialState = {
  alphanumerals: []
}

export const alphaNumeralReducer = (state = initialState, action) => {
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

// const store = createStore(alphaNumeralReducer);

// export default store;
