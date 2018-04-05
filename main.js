import "babel-polyfill"

import React from 'react'
import ReactDOM from 'react-dom'

import Counter from './Counter'

import store from './store.js'
import { action } from './actions.js'



function render() {
  ReactDOM.render(
    <Counter
      value={store.getState()}
      onIncrement={() => action('INCREMENT')}
      onDecrement={() => action('DECREMENT')} />,
    document.getElementById('root')
  )
}

render()
store.subscribe(render)
