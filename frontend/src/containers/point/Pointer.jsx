import React from 'react'
import { useSelector,useDispatch } from "react-redux";

const Pointer = () => {

  const point = useSelector((state) => state.pointReducer.point);

  const dispatch = useDispatch();

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
      <p>Point: {point}</p>
      <button onClick={increase}>Up</button>
      <button onClick={decrease}>Down</button>
      <br></br>
      <br></br>
    </>
  )
}

export default Pointer;
