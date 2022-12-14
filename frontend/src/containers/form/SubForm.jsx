import React from 'react'
import { Field } from 'redux-form';
import TokenForm from './TokenForm';

const SubForm = () => {
  return (
    <div>
      <Field name="age" component="input" />
      <br></br>
      <Field name="job" component="input" />
      <br></br>
      <TokenForm />
    </div>
  )
}

export default SubForm
