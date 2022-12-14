import React, {useRef} from 'react'
import { Field } from 'redux-form'

const TokenForm = () => {

  const inputElement = useRef(null)
  console.log(inputElement.current)

  return (
    <>
      <Field name="length" component="input" />
      <input ref={inputElement} type="text" />
    </>
  )
}

export default TokenForm
