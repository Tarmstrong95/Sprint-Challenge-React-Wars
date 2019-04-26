import React from 'react'
import './StarWars.css'
import Starship from './starships'
import Vehicle from './vehicles'
import Species from './species'
import Planet from './homePlanet'
import Films from './films'


 const CharacterCard = props => {

     const {birth_year, 
        eye_color, 
        gender, 
        hair_color, 
        height, mass, 
        skin_color, 
        species, 
        starships, 
        vehicles, 
        homeworld, 
        films} 
        = props.characterInfo;
        
    return (
        <div className="container">
            <h1>{props.characterInfo.name}</h1>
            <div className="items">
                <p><strong>Birth Year: </strong><br/>{birth_year}</p>
                <p><strong>Gender: </strong><br/>{gender}</p>
                <Species species={species}/>
                <p><strong>Hair Color: </strong><br/>{hair_color}</p>
                <p><strong>Eye Color: </strong><br/>{eye_color}</p>
                <p><strong>Skin Color: </strong><br/>{skin_color}</p>
                <p><strong>Height: </strong><br/>{height}cm</p>
                <p><strong>Mass: </strong><br/>{mass}kg</p>
                <Planet planet = {homeworld}/>
                <Vehicle vehicle={vehicles}/>
                <Starship ship={starships}/>
                <Films film={films} />
            </div>
            
        </div>
    )
}
export default CharacterCard;