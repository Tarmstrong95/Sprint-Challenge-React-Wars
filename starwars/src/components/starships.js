import React from "react";
import "./StarWars.css";

class Starship extends React.Component {
    state = {
      starships: []
    };
  

  componentDidMount() {
    this.props.ship.map(ship => this.getCharacters(ship));
  }

  getCharacters = URL => {
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
