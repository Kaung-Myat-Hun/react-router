import React,{useContext} from 'react'
import { CartContext } from '../../App'
import Cart from './Cart'

function CartList() {
const {cart , setCart} = useContext(CartContext)
  return (
    <>
        <div style={{margin: "20px"}}>
            <button onClick={()=>{
            setCart([...cart, {name: "phone", price: "200$"}])}}>Phone +</button> <br />
            <button onClick={()=> {
            setCart([...cart, {name: "tablet", price: "250$"}])}}>Tablet +</button> <br />
            <button onClick={()=>{
            setCart([...cart, {name: "watch", price: "350$"}])}}>Watch +</button> <br />
        </div>
        <div>
            {cart.map((item, index)=> (
                <Cart key={index} product={item.name} price={item.price} />
            ))}
        </div>
    </>
  )
}

export default CartList