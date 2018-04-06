import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchFlights } from '../actions'
import css from '../styles'
import flightType from '../flightType'
import FlightTable from './FlightTable'

class Overview extends Component {
  constructor(props) {
    super(props)
    props.fetchFlights(flightType.arrivals)
    this.state = {
      filterInput: '',
      selectedFlightType: flightType.arrivals,
    }
    this.handleInputChange = this.handleInputChange.bind(this)
    this.handleArrivalsClick = this.handleArrivalsClick.bind(this)
    this.handleDeparturesClick = this.handleDeparturesClick.bind(this)
  }

  // Fetches filtered list of flights based on the users input
  getFilteredFlights() {
    let flights
    const { filterInput, selectedFlightType } = this.state
    const { arrivalFlights, departureFlights } = this.props
    if (selectedFlightType === flightType.arrivals) {
      flights = arrivalFlights
    } else if (selectedFlightType === flightType.departures) {
      flights = departureFlights
    }

    return filterInput === '' ? flights : flights.filter(f => f.flightNumber.toLowerCase().includes(filterInput.toLowerCase()))
  }

  handleInputChange(event) {
    this.setState({
      filterInput: event.target.value,
    })
  }

  handleArrivalsClick() {
    this.setState({
      selectedFlightType: flightType.arrivals
    })
  }

  handleDeparturesClick() {
    const { departureFlights, fetchFlights } = this.props
    this.setState({
      selectedFlightType: flightType.departures
    })
    if (!departureFlights) {
      fetchFlights(flightType.departures)
    }
  }

  render() {
    const flights = this.getFilteredFlights()
    return (
      <div>
        <input style={css.input} id='flightNumberFilter' placeholder='Bókunarnúmer' value={this.state.filterInput} onChange={this.handleInputChange}/>
        <button style={css.button} onClick={this.handleArrivalsClick}>Komur</button>
        <button style={css.button} onClick={this.handleDeparturesClick}>Brottfarir</button>
        <FlightTable flights={flights} />
      </div>
    )
  }
}

const mapStateToProps = state => {
  return { arrivalFlights: state.arrivalFlights, departureFlights: state.departureFlights }
}

export default connect(mapStateToProps, { fetchFlights })(Overview)
