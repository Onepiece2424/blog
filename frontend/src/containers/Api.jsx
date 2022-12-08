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


  // axios.postでデータの生成
  const [name, setName] = useState('')

  const handleChange = (e) => {
  setName(e.target.value)
}

const createNewUser = () => {
  axios.post('https://jsonplaceholder.typicode.com/users', {
    name: name
  })
  .then(response => {
    setUsers([...users, response.data])
  })
  .catch(error => {
    console.log(error);
  });
}

  return (
    <>
      {users.map((user, index) => (
        <div key={index}>{user.name}</div>
      ))}
      <input value={name} onChange={handleChange} /><br />
      <button onClick={createNewUser}>作成</button>
      <ul>
        {users.map((user, index) => (
          <li key={index}>{user.name}</li>
        ))}
      </ul>
    </>
  )
})

export default  Api;
