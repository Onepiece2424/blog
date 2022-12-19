import React from 'react'
import {initialState} from '../../reducers/addtodo/addtodo'
import { useSelector } from "react-redux";


const ItemsContainer = (props) => {

  const {itemdata} = props
  const item_name = useSelector((state) => initialState.item_name);
  console.log(item_name)

  return (
    <>
      <h3>登録した商品一覧</h3>
      <>{item_name}</>
      <>商品：{initialState.item_name}</>
      <br></br>
      <>数量：{initialState.quantity}</>
      <>
        {itemdata.map((item) =>
          <div key={item.id}>
            <div >商品：{item.item_name}</div>
            <div>数量：{item.quantity}</div>
          </div>
        )}
      </>
    </>
  )
}

export default ItemsContainer
