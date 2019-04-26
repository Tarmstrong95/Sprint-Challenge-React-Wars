import React from 'react'
import './StarWars.css'


 class Vehicle extends React.Component {
     constructor(props){
         super(props);
         this.props = props;
         this.state = {
            vehicles: []
         }
     }


     componentDidMount() {
          this.getCharacters(this.props.vehicle);
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
              this.setState({ vehicles: data });
            })
            .catch(err => {
              throw new Error(err);
            });
        };




     render(){
         return (
        <li>{this.state.vehicles.name}</li>
    )
     }
    
}
export default Vehicle;
