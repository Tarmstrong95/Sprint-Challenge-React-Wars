import React from "react";
import "./StarWars.css";

class Starship extends React.Component {
  constructor(props) {
    super(props);
    this.props = props;
    this.state = {
      starships: []
    };
  }

  componentDidMount() {
    this.props.ship.map(ship => this.getCharacters(ship));
    //   this.getCharacters(this.props.ship);
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
        this.setState({ starships: [...this.state.starships, data] });
      })
      .catch(err => {
        throw new Error(err);
      });
  };

  render() {
    if (this.state.starships.length > 0) {
      return (
        <p>
          <strong>Starships: </strong>
          <br />
          {this.state.starships.map(ship => (
            <li>{ship.name}</li>
          ))}
        </p>
      );
    } else {
      return (
        <p>
          <strong>Starships: </strong>
          <br />
          <li>n/a</li>
        </p>
      );
    }
  }
}
export default Starship;
