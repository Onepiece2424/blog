import React from 'react'
import store from '../../store';

const ItemsContainer = (props) => {

  const {itemdata} = props

  console.log(store.getState().addtodoReducer)

  return (
    <>
      <h3>登録した商品一覧</h3>
      <>{store.getState().addtodoReducer.item_name}</>
      <>{store.getState().addtodoReducer.quantity}</>
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
