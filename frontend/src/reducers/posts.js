import { REQUEST_STATE } from '../constants';

export const initialState = {
  fetchState: REQUEST_STATE.INITIAL,
  postsList: [],
};

export const postsActionTyps = {
  FETCHING: 'FETCHING',
  FETCH_SUCCESS: 'FETCH_SUCCESS'
}

export const postsReducer = (state, action) => {
  console.log(state)
  console.log(action)
  console.log(action.payload)
  console.log(action.payload)
  switch (action.type) {
    case postsActionTyps.FETCHING:
      return {
        ...state,
        fetchState: REQUEST_STATE.LOADING,
      };
    case postsActionTyps.FETCH_SUCCESS:
      return {
        fetchState: REQUEST_STATE.OK,
        postsList: action.payload,
      };
    default:
      throw new Error();
  }
}
