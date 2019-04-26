import React from 'react'
import './StarWars.css'
import Starship from './starships'
import Vehicle from './vehicles'
import Species from './species'


 const CharacterCard = props => {
    return (
        <div className="container">
            <h1>{props.characterInfo.name}</h1>
            <p><strong>Birth Year: </strong><br/>{props.characterInfo.birth_year}</p>
            <p><strong>Eye Color: </strong><br/>{props.characterInfo.eye_color}</p>
            <p><strong>Gender: </strong><br/>{props.characterInfo.gender}</p>
            <p><strong>Hair Color: </strong><br/>{props.characterInfo.hair_color}</p>
            <p><strong>Height: </strong><br/>{props.characterInfo.height}cm</p>
            <p><strong>Mass: </strong><br/>{props.characterInfo.mass}kg</p>
            <p><strong>Skin Color: </strong><br/>{props.characterInfo.skin_color}</p>
            <p><strong>Species: </strong><br/>{props.characterInfo.species.map((species, i) => <Species key={i} species={species}/>)}</p>
            <p><strong>Starships: </strong><br/>{props.characterInfo.starships.map((ship, i) => <Starship key={i} ship={ship}/>)}</p>
            <p><strong>Vehicles: </strong><br/>{props.characterInfo.vehicles.map((vehicle, i) => <Vehicle key={i} vehicle={vehicle}/>)}</p>
        </div>
    )
}
export default CharacterCard;

/* 
name
birth year
eye color
gender
hair color
height cm
mass kg
skin color
species
starships
vehicles
*/