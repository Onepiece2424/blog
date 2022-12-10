import React, { useRef, useState, useEffect } from 'react'

const Reference = () => {

  const [count, setCount] = useState(0);
  const prevCountRef = useRef();
  console.log(prevCountRef)

  useEffect(() => {
    prevCountRef.current = count;
  }, [count]);

  // 初回レンダリング時に入力フォームにフォーカスをあてる
  const search = useRef(null);
  useEffect(() => {
    search.current.focus()
  },[])

  return (
    <>
      <>こんにちは</>
      <>Now: {count}, before: {prevCountRef.current}</>
      <br></br>
      <button onClick={() => setCount((count) => count + 1)}>Increment</button>
      <br></br>
      <input ref={search}/><button>探す</button>
    </>
  )
}

export default Reference
