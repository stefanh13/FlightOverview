import "babel-polyfill"

import React from 'react'
import ReactDOM from 'react-dom'

import Counter from './Counter'

import store from './store.js'
import { incrementAction, decrementAction, type } from './actions.js'



function render() {
  ReactDOM.render(
    <Counter
      value={store.getState()}
      onIncrement={() => incrementAction()}
      onDecrement={() => decrementAction()} />,
    document.getElementById('root')
  )
}

render()
store.subscribe(render)
