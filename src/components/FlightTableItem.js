import React, { Component } from 'react'
import css from '../styles'

export default class FlightTableItem extends Component {
  render() {
    const { flight } = this.props
    return (
      <tr>
        <td style={css.td}>{flight.date}</td>
        <td style={css.td}>{flight.flightNumber}</td>
        <td style={css.td}>{flight.from ? flight.from : flight.to}</td>
        <td style={css.td}>{flight.airline}</td>
        <td style={css.td}>{flight.plannedArrival}</td>
        <td style={css.td}>{flight.realArrival === '' ? 'TBA' : flight.realArrival}</td>
      </tr>
    )

  }
}
