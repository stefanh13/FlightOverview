import "babel-polyfill"

import React from 'react'
import ReactDOM from 'react-dom'

// import Counter from './Counter'
import Flights from './Flights'

import store from './store.js'
import { fetchFlights, decrementAction, type } from './actions.js'

import { Provider } from 'react-redux'

function render() {
  ReactDOM.render(
    <Provider store={store}>
      <Flights flights={store.getState()}/>
    </Provider>
    ,
    document.getElementById('root')
  )
}

render()
store.subscribe(render)
