import React, {useState, useEffect} from 'react'
// import { reduxForm } from 'redux-form';
import axios from 'axios'
import ItemsContainer from './ItemsContainer'
import FormContainer from './FormContainer'
import showResults from '../func/showResults';

const MainContainer = (props) => {

  // console.log(props)
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
      <FormContainer onSubmit={showResults} />
      <ItemsContainer itemdata={items} />
      <br></br>
    </div>
  )
}

export default MainContainer
