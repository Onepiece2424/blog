import React from 'react'
import { Field } from 'redux-form';

const SubForm = () => {
  return (
    <div>
      <Field name="age" component="input" />
      <br></br>
      <Field name="job" component="input" type="hidden" />
      <br></br>
    </div>
  )
}

export default SubForm
