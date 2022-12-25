import { useState } from 'react';
import axios from 'axios'
import { reduxForm, Field } from 'redux-form';
// import showResults from '../func/showResults';
import { dataTransfer } from '../func/dataTransfer';

const FormContainer = (props) => {

  const { handleSubmit } = props;

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
      quantity: quantity,
    })
    .then((response) => {
      console.log(response);
    })
    .catch((error) =>{
      console.log(error)
    })
  };

  return (
    <>
      <form onSubmit={handleSubmit(dataTransfer)}>
        <h3>商品登録フォーム</h3>
        <Field name='商品名' component='input' value={name} onChange={handleChange} placeholder='商品名' />
        <br></br>
        <Field name='数量' component='input' value={quantity} onChange={quantityChange} placeholder='数量' />
        <br></br>
        <br></br>
        <Field name="recaptchatoken" component="input" type="hidden" />
        <button type="submit" onClick={createItem}>商品登録</button>
      </form>
    </>
  )
}

export default reduxForm({
  form: 'ContainerForm',
})(FormContainer);
