import React from 'react'
import Laptop from './Laptop'

const laptopList =[
    {
        id: 1,
        name : "Asus"
    },
    {
        id: 2,
        name : "HP"
    },
    {
        id: 3,
        name: "Dell"
    }
]

function LaptopList() {
  return (
    <>
        {laptopList.map((laptop) => (
            <Laptop key={laptop.id} laptop={laptop} />
        ))}
    </>
  )
}

export default LaptopList