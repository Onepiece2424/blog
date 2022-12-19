import React,{useReducer} from 'react'
import {initialState, addtodoReducer} from '../../reducers/addtodo/addtodo'

const ItemsContainer = (props) => {

  const {itemdata} = props
  const [state, dispatch] = useReducer(addtodoReducer, initialState);
  console.log(state)

  return (
    <>
      <h3>登録した商品一覧</h3>
      <>商品：{state.item_name}</>
      <br></br>
      <>数量：{state.quantity}</>
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
