import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchFlights } from './actions'
import css from './styles'

const flightType = {
  departures: 'departures',
  arrivals: 'arrivals',
}

class Flights extends Component {
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

  getRows() {
    const flights = this.getFilteredFlights()
    if(!flights) {
      return
    }
    return flights.map((flight) => {
      return (
        <tr key={flight.flightNumber}>
          <td style={css.td}>{flight.date}</td>
          <td style={css.td}>{flight.flightNumber}</td>
          <td style={css.td}>{this.state.selectedFlightType === flightType.arrivals ? flight.from : flight.to}</td>
          <td style={css.td}>{flight.airline}</td>
          <td style={css.td}>{flight.plannedArrival}</td>
          <td style={css.td}>{flight.realArrival === '' ? 'TBA' : flight.realArrival}</td>
        </tr>
      )
    })

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
    this.setState({
      selectedFlightType: flightType.departures
    })
    if (!this.props.departureFlights) {
      this.props.fetchFlights(flightType.departures)
    }
  }

  render() {
    return (
      <div>
        <input style={css.input} id='flightNumberFilter' placeholder='Bókunarnúmer' value={this.state.filterInput} onChange={this.handleInputChange}/>
        <button style={css.button} onClick={this.handleArrivalsClick}>Komur</button>
        <button style={css.button} onClick={this.handleDeparturesClick}>Brottfarir</button>
        <table cellSpacing={0} style={css.table}>
          <thead>
            <tr>
              <th style={css.th}>Dagsetning</th>
              <th style={css.th}>Flugnúmer</th>
              <th style={css.th}>Borg</th>
              <th style={css.th}>Flugfélag</th>
              <th style={css.th}>Áætlaður komutími</th>
              {}<th style={css.th}>Komutími</th>
            </tr>
          </thead>
          <tbody>
            { this.getRows() }
          </tbody>
        </table>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return { arrivalFlights: state.arrivalFlights, departureFlights: state.departureFlights }
}

export default connect(mapStateToProps, { fetchFlights })(Flights)
