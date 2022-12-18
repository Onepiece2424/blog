import React, {useEffect} from 'react'
import axios from 'axios'

const MainContainer = () => {

  useEffect(() => {
    axios.get('http://localhost:3000/items')
    .then((results) => {
      console.log(results)
    })
    .catch((data) =>{
      console.log(data)
    })
  }, [])

  return (
    <div>
      メインです。
    </div>
  )
}

export default MainContainer
