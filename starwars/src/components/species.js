import React from "react";
import "./StarWars.css";

class Species extends React.Component {
    state = {
      species: []
    };

  componentDidMount() {
    this.getCharacters(this.props.species);
  }

  getCharacters = URL => {

    fetch(URL)
      .then(res => {
        return res.json();
      })
      .then(data => {
        this.setState({ species: data });
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
        <li>{this.state.species.name}</li>
      </p>
    );
  }
}
export default Species;
