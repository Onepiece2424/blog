import React from 'react'

const ItemsContainer = (props) => {

  const {itemdata} = props

  return (
    <>
      <ul>
        {itemdata.map((item) =>
          <li key={item.id}>{item.item_name}</li>
        )}
      </ul>
    </>
  )
}

export default ItemsContainer
