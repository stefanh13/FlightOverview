import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchFlights } from './actions'

const css = {
  table: {
    width: "100%",
    maxWidth: "100%",
    marginBottom: "22px",
    fontSize: "14px",
    textAlign: "left",
    verticalAlign: "top",
    padding: "10px 20px",
    fontFamily: "museo-sans,\"Helvetica Neue\",Helvetica,Arial,sans-serif",
  },
  th: {
    fontWeight: "300",
    backgroundColor: "#981a85",
    padding: "8px",
    lineHeight: "1.42857143",
    color: "#fff"
  },
  td: {
    borderBottom: "1px solid #d3d3d3",
    padding: "8px",
    lineHeight: "1.42857143",
    verticalAlign: "top"
  },
  input: {
    "border": "1px solid #ccc",
    "padding": "10px",
    "borderRadius": "2px",
    "marginLeft":"20px"
  }
}

class Flights extends Component {
  constructor(props) {
    super(props)
    props.fetchFlights()
    this.state = {
      filterInput: ''
    }
    this.handleInputChange = this.handleInputChange.bind(this)
  }
  getFlights() {
    const { flights } = this.props
    const { filterInput } = this.state
    return filterInput === '' ? flights : flights.filter(f => f.flightNumber.toLowerCase().includes(filterInput.toLowerCase()))
  }
  getRows() {
    const flights = this.getFlights()
    if(!flights) {
      return
    }
    return flights.map((flight) => {
      return (
        <tr>
          <td style={css.td}>{flight.date}</td>
          <td style={css.td}>{flight.flightNumber}</td>
          <td style={css.td}>{flight.from}</td>
          <td style={css.td}>{flight.airline}</td>
          <td style={css.td}>{flight.plannedArrival}</td>
          <td style={css.td}>{flight.realArrival}</td>
        </tr>
      )
    })

  }
  handleInputChange(event) {
    this.setState({
      filterInput: event.target.value,
    })
  }
  render() {
    console.log(this.getFlights())
    return (
      <div>
        <input style={css.input} id='flightNumberFilter' placeholder='Bokunarnumer' value={this.state.filterInput} onChange={this.handleInputChange}/>
        <table cellSpacing={0} style={css.table}>
          <thead>
            <tr>
              <th style={css.th}>Dagsetning</th>
              <th style={css.th}>Flugnr</th>
              <th style={css.th}>Borg</th>
              <th style={css.th}>Flugfelag</th>
              <th style={css.th}>Aaetladur timi</th>
              <th style={css.th}>Rauntimi</th>
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
  return { flights: state.flights }
}

export default connect(mapStateToProps, { fetchFlights })(Flights)
