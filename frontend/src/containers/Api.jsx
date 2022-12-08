import React,{ useState,useEffect } from 'react'

import axios from 'axios';

const Api = (() => {

  // stateの設定
  const [users, setUsers] = useState([])

  // axiosを使用しGETメソッドによるデータの取得
  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/users')
    .then(response => setUsers(response.data))
    .catch(error => console.log(error))
  }, [])

  // コンソールに表示
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
