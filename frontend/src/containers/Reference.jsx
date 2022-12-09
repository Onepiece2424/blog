import React, { useRef, useState, useEffect } from 'react'

const Reference = () => {

  const [count, setCount] = useState(0);
  const prevCountRef = useRef();

  useEffect(() => {
    prevCountRef.current = count;
  }, [count]);

  return (
    <>
      <>こんにちは</>
      <>Now: {count}, before: {prevCountRef.current}</>
      <br></br>
      <button onClick={() => setCount((count) => count + 1)}>Increment</button>
    </>
  )
}

export default Reference
