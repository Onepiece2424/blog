import React from 'react'
import { Field } from 'redux-form';

const SubForm = () => {
  return (
    <div>
      <Field name="age" component="input" />
    </div>
  )
}

export default SubForm
