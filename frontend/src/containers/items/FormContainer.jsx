import { useState,useCallback,useEffect,useRef } from 'react';
import { useGoogleReCaptcha } from 'react-google-recaptcha-v3';
import axios from 'axios'
import { reduxForm, Field } from 'redux-form';

const FormContainer = (props) => {

  const { change } = props;
  const { executeRecaptcha } = useGoogleReCaptcha();
  const elm = useRef(null)

  const [name, setName] = useState('')
  const [quantity, setQuantity] = useState('')

  const handleSubmit = (e) =>{
    e.preventDefault();
  }

  const handleChange = (e) => {
    setName(e.target.value)
  }

  const quantityChange = (e) => {
    setQuantity(e.target.value)
  }

  const createItem = useCallback(async() => {
    if (!executeRecaptcha) {
      return;
    }

    const recaotchaToken = await executeRecaptcha('create');

    /* eslint-disable */
    elm.current = change("recaptchatoken", recaotchaToken)

    axios.post('http://localhost:3000/items',
    { item_name: name,
      quantity: quantity,
      token: recaotchaToken
    })
    .then((response) => {
      console.log(response);
    })
    .catch((error) =>{
      console.log(error)
    })
  }, [executeRecaptcha]);

  useEffect(() => {
    createItem();
  }, [createItem]);

  return (
    <>
      <form onSubmit={handleSubmit}>
        <h3>商品登録フォーム</h3>
        <Field name='商品名' component='input' value={name} onChange={handleChange} placeholder='商品名' />
        <br></br>
        <Field name='数量' component='input' value={quantity} onChange={quantityChange} placeholder='数量' />
        <br></br>
        <br></br>
        <Field name="recaptchatoken" component="input" type="hidden" value={elm} />
        <button type="submit" onClick={createItem}>商品登録</button>
      </form>
    </>
  )
}

export default reduxForm({
  form: 'FormContainerForm',
})(FormContainer);
