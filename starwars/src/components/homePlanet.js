import React from "react";
import "./StarWars.css";

class Planet extends React.Component {
    state = {
      planets: []
    };

  componentDidMount() {
    this.getCharacters(this.props.planet);
  }

  getCharacters = URL => {

    fetch(URL)
      .then(res => {
        return res.json();
      })
      .then(data => {
        this.setState({ planets: data });
      })
      .catch(err => {
        throw new Error(err);
      });
  };

  render() {
    return (
      <p>
        <strong>HomePlanet: </strong>
        <br />
        <li>{this.state.planets.name}</li>
      </p>
    );
  }
}
export default Planet;
