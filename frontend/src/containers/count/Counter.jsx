import React from 'react'
import { useSelector } from "react-redux";

const Counter = () => {

  const count = useSelector((state) => state.countReducer.count);

  // const dispatch = useDispatch();

  // // actionをdispatchする
  // const increase = () => {
  //   dispatch({type: "INCREASE_COUNT"});
  // };

  // const decrease = () => {
  //   dispatch({type: "DECREASE_COUNT"});
  // };

  return (
    <>
      <h3>Redux Learn</h3>
      {/* <p>Count: {count}</p>
      <button onClick={increase}>Up</button>
      <button onClick={decrease}>Down</button> */}
      <p>Count:{count}</p>
    </>
  )
}

export default Counter;
