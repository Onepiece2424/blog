import React from 'react'

const TokenForm = (field) => {

  const { meta: { touched, error } } = field;
  console.log(field)

  return (
    <>
      <p className="text-danger">{ touched ? error : '' }</p>
    </>
  )
}

export default TokenForm
