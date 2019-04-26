import React from "react";
import "./StarWars.css";

class Films extends React.Component {
  constructor(props) {
    super(props);
    this.props = props;
    this.state = {
      films: []
    };
  }

  componentDidMount() {
    this.props.film.map(film => this.getCharacters(film));
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
        this.setState({ films: [...this.state.films, data] });
      })
      .catch(err => {
        throw new Error(err);
      });
  };

  render() {

      return (
        <p>
          <strong>Films: </strong>
          <br />
          {this.state.films.map(film => (
            <li>{film.title}</li>
          ))}
        </p>
      )
  }
}
export default Films;
