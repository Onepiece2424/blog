import React from 'react'

export const renderFields = (fields) => (
  <div>
    <div className="input-row">
      <input {...fields.firstName.input} type="text" placeholder='lastname' />
      {fields.firstName.meta.touched && fields.firstName.meta.error &&
       <span className="error">{fields.firstName.meta.error}</span>}
    </div>
    <div className="input-row">
      <input {...fields.lastName.input} type="text" placeholder='firstname' />
      {fields.lastName.meta.touched && fields.lastName.meta.error &&
       <span className="error">{fields.lastName.meta.error}</span>}
    </div>
  </div>
)
