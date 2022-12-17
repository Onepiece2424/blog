import React,{useReducer} from 'react'
import {initialState, pointReducer} from '../../reducers/pointers/pointers'

const Pointer = () => {

  const [state, dispatch] = useReducer(pointReducer, initialState);

  // actionをdispatchする
  const increase = () => {
    dispatch({type: "INCREASE_POINT"});
  };

  const decrease = () => {
    dispatch({type: "DECREASE_POINT"});
  };

  return (
    <>
      <h3>Pointアップダウン</h3>
      <p>Point: {state.point}</p>
      <button onClick={increase}>Up</button>
      <button onClick={decrease}>Down</button>
      <br></br>
      <br></br>
    </>
  )
}

export default Pointer;
