import React, { useState,createContext } from 'react'
import reactLogo from './assets/react.svg'
import Navbar from './components/Navbar/Navbar'
import View from './routes'
import './App.css'
// import ContextComponent from './components/Context'
// import LaptopList from './components/LaptopList'
import CartList from './components/Cart/CartList'
// export const Context = createContext();

export const CartContext = createContext()
const product = [
]
function App() {
  const [cart, setCart] = useState(product)
  console.log(React)
  return (
    <>
      <CartContext.Provider value={{cart , setCart}}>
        <CartList></CartList>
      </CartContext.Provider>
    </>
  )
}

export default App
