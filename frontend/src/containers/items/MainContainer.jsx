import React, {useState, useEffect} from 'react'
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
      <FormContainer itemdata={items} />
    </div>
  )
}

export default MainContainer
