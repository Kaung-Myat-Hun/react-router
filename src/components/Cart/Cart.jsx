import React from 'react'

function Cart({product, price}) {
  return (
    <div style={{display: "flex"}}>
        <h3>{product}</h3> - <h3>{price}</h3>
    </div>
  )
}

export default Cart