import React from "react";
import "./StarWars.css";

class Vehicle extends React.Component {
  constructor(props) {
    super(props);
    this.props = props;
    this.state = {
      vehicles: []
    };
  }

  componentDidMount() {
    this.props.vehicle.map(vehicle => this.getCharacters(vehicle));
    //   this.getCharacters(this.props.vehicle);
  }

  getCharacters = URL => {
    // feel free to research what this code is doing.
    // At a high level we are calling an API to fetch some starwars data from the open web.
    // We then take that data and resolve it our state.
    fetch(URL)
      .then(res => {
        return res.json();
      })
      .then(data => {
        this.setState({ vehicles: [...this.state.vehicles, data] });
      })
      .catch(err => {
        throw new Error(err);
      });
  };

  render() {
    if (this.state.vehicles.length > 0) {
      return (
        <p>
          <strong>Vehicles: </strong>
          <br />
          {this.state.vehicles.map(vehicle => (
            <li>{vehicle.name}</li>
          ))}
        </p>
      );
    } else {
      return (
        <p>
          <strong>Vehicles: </strong>
          <br />
          <li>n/a</li>
        </p>
      );
    }
  }
}
export default Vehicle;
