import React from "react";
import "./StarWars.css";

class Planet extends React.Component {
  constructor(props) {
    super(props);
    this.props = props;
    this.state = {
      planets: []
    };
  }

  componentDidMount() {
    this.getCharacters(this.props.planet);
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
        this.setState({ planets: data });
      })
      .catch(err => {
        throw new Error(err);
      });
  };

  render() {
    return (
      <p>
        <strong>Species: </strong>
        <br />
        <li>{this.state.planets.name}</li>
      </p>
    );
  }
}
export default Planet;
