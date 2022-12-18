import React from 'react'
import {Button,FormGroup,FormControl} from 'react-bootstrap'

const FormContainer = () => {

  const handle = () => {
    console.log('コンんちは')
  }

  return (
    <>
      <form>
        <FormGroup controlId="formBasicText">
          <FormControl
            type="text"
            placeholder="Enter text"
          />
        </FormGroup>
      </form>
      <Button type="submit" onClick={handle}>つぶやく</Button>
    </>
  )
}

export default FormContainer
