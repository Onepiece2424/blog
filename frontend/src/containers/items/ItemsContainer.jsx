import React from 'react'

const ItemsContainer = (props) => {

  const {itemdata} = props

  return (
    <>
      <h3>登録した商品一覧</h3>
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
