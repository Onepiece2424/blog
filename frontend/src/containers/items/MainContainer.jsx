import React, {useState, useEffect} from 'react'
import { reduxForm } from 'redux-form';
import axios from 'axios'
import ItemsContainer from './ItemsContainer'
import FormContainer from './FormContainer'

const MainContainer = () => {

  const [items,setItems] = useState([])

  useEffect(() => {
    axios.get('http://localhost:3000/items')
    .then((results) => {
      console.log(results)
      setItems(results.data)
    })
    .catch((data) =>{
      console.log(data)
    })
  }, [])

  return (
    <div>
      <ItemsContainer itemdata={items} />
      <FormContainer />
    </div>
  )
}

export default reduxForm({
  form: 'MainContainerForm',
})(MainContainer);
