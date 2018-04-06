import "babel-polyfill"

import React from 'react'
import ReactDOM from 'react-dom'

import Overview from './components/Overview'

import store from './store.js'
import { Provider } from 'react-redux'

function render() {
  ReactDOM.render(
    <Provider store={store}>
      <Overview />
    </Provider>
    ,
    document.getElementById('root')
  )
}

render()
