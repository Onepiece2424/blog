import React from 'react'

const ItemsContainer = (props) => {

  const {itemdata} = props

  return (
    <>
      <h3>登録した商品一覧</h3>
      <ul>
        {itemdata.map((item) =>
          <li key={item.id}>{item.item_name}</li>
        )}
      </ul>
    </>
  )
}

export default ItemsContainer
