export const initialState = {
  point: 1
};

export const pointReducer = (state, action) => {
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
