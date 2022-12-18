import React,{useState} from 'react'
import {Button} from 'react-bootstrap'
import axios from 'axios'

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
    .catch((data) =>{
      console.log(data)
    })
  }

  return (
    <>
      <form>
        <input value={name} onChange={handleChange} />
        <br></br>
        <input value={quantity} onChange={quantityChange} />
        <br></br>
        <Button type="submit" onClick={createItem}>つぶやく</Button>
      </form>
    </>
  )
}

export default FormContainer
