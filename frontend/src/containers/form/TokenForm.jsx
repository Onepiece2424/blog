import React, {useRef} from 'react'
import { Field } from 'redux-form'

const TokenForm = () => {

  const inputElement = useRef(null)
  const handleClick = () => {
   inputElement.current.focus();
    console.log("inputEl.current:", inputElement.current);
  };
  console.log(inputElement.current)

  return (
    <>
      <Field name="length" component="input" />
      <br></br>
      <input ref={inputElement} type="text" />
      <button onClick={handleClick}>入力エリアをフォーカスする</button>
    </>
  )
}

export default TokenForm
