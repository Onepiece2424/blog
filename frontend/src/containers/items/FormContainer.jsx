import React,{useState} from 'react'
import {Button} from 'react-bootstrap'
import axios from 'axios'
import { Field } from 'redux-form';

const FormContainer = () => {

  const [name, setName] = useState('')
  const [quantity, setQuantity] = useState('')

  const handleChange = (e) => {
    setName(e.target.value)
  }

  const quantityChange = (e) => {
    setQuantity(e.target.value)
  }

  const createItem = () => {
    axios.post('http://localhost:3000/items',
    { item_name: name,
      quantity: quantity
    })
    .then((response) => {
      console.log(response);
    })
    .catch((error) =>{
      console.log(error)
    })
  }

  return (
    <>
      <form>
        <Field name='商品名' component='input' value={name} onChange={handleChange} placeholder='商品名' />
        <br></br>
        <Field name='数量' component='input' value={quantity} onChange={quantityChange} placeholder='数量' />
        <br></br>
        <br></br>
        <Button type="submit" onClick={createItem}>商品登録</Button>
      </form>
    </>
  )
}

export default FormContainer
