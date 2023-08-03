import React,{useContext} from 'react'
import {CpuContext, PriceContext} from '../App'

function Laptop({laptop}) {
  const cpu =  useContext(CpuContext);
  const price =  useContext(PriceContext);
  return (
    <h1>{laptop.name} - {cpu} and {price}</h1>
    // <CpuContext.Consumer>
    //     {
    //       (cpu)=> ( 
    //         <PriceContext.Consumer>
    //           {
    //             (price) => (
    //               <h1>{laptop.name} - {cpu} and price is {price}</h1>
    //             )
    //           }
    //         </PriceContext.Consumer>
    //        )
    //     }
    // </CpuContext.Consumer>
  )
}

export default Laptop