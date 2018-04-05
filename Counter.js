/*eslint-disable no-unused-vars */
import React, { Component, PropTypes } from 'react'

const Counter = ({ value, onIncrement, onDecrement }) =>
      <div>
        <button onClick={onIncrement}>
          Increment
        </button>
        {' '}
        <button onClick={onDecrement}>
          Decrement
        </button>
        <hr />
        <div>
        </div>
      </div>

/* Counter.propTypes = {
  value: PropTypes.object
  onIncrement: PropTypes.func.isRequired,
  onDecrement: PropTypes.func.isRequired
} */

export default Counter
