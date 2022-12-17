import React, { useRef, useState, useEffect } from 'react'

const Reference = () => {

  // useRefを使用し、特定の値を保持
  const [count, setCount] = useState(0);
  const prevCountRef = useRef();

  useEffect(() => {
    prevCountRef.current = count;
  }, [count]);

  // useRefを使用し、初回レンダリング時に入力フォームにフォーカスをあてる
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
      <br></br>
      <input ref={search}/><button>探す</button>
      <br></br>
    </>
  )
}

export default Reference
