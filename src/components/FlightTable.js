import React, { Component } from 'react'
import css from '../styles'
import FlightTableItem from './FlightTableItem'


export default class FlightTable extends Component {
  getRows() {
    const flights = this.props.flights
    if(!flights) {
      return
    }
    return flights.map((flight) => {
      return (
        <FlightTableItem key={flight.flightNumber} flight={flight} />
      )
    })

  }

  render() {
    return (
      <table cellSpacing={0} style={css.table}>
        <thead>
          <tr>
            <th style={css.th}>Dagsetning</th>
            <th style={css.th}>Flugnúmer</th>
            <th style={css.th}>Borg</th>
            <th style={css.th}>Flugfélag</th>
            <th style={css.th}>Áætlaður komutími</th>
            <th style={css.th}>Komutími</th>
          </tr>
        </thead>
        <tbody>
          { this.getRows() }
        </tbody>
      </table>
    )

  }
}
