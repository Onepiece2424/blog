import React,{ useState,useEffect } from 'react'

import axios from 'axios';

const Api = (() => {

  const [users, setUsers] = useState([])

  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/users')
    .then(response => setUsers(response.data))
    .catch(error => console.log(error))
  }, [])

  console.log(users)

  return (
    <>
      {users.map((user, index) => (
        <div key={index}>{user.name}</div>
      ))}
    </>
  )
})

export default  Api;
