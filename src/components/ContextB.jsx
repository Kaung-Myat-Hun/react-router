import React from 'react'
import {Context} from '../App'

function ContextB() {
  return (
    <Context.Consumer>
        {
            (name) => <h1>Hello! My name is {name}</h1>
        }
    </Context.Consumer>
  )
}

export default ContextB