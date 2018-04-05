import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchFlights } from './actions'
class Flights extends Component {
  constructor(props) {
    super(props)
    props.fetchFlights()
  }
  getFlights() {
    return this.props.flights
  }
  getRows() {
    const flights = this.getFlights()
    if(!flights) {
      return
    }
    return this.getFlights().map((flight) => {
      return (
        <tr>
          <td>{flight.date}</td>
          <td>{flight.flightNumber}</td>
          <td>{flight.from}</td>
          <td>{flight.airline}</td>
          <td>{flight.plannedArrival}</td>
          <td>{flight.realArrival}</td>
        </tr>
      )
    })

  }
  render() {
    console.log(this.getFlights())
    return (
      <table>
        <thead>
          <tr>
            <th>Dagsetning</th>
            <th>Flugnr</th>
            <th>Borg</th>
            <th>Flugfelag</th>
            <th>Aaetladur timi</th>
            <th>Rauntimi</th>
          </tr>
        </thead>
        <tbody>
          { this.getRows() }
        </tbody>
      </table>
    )
  }
}

const mapStateToProps = state => {
  return { flights: state.flights }
}

export default connect(mapStateToProps, { fetchFlights })(Flights)
