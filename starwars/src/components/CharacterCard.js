import React from 'react'
import './StarWars.css'
import Starship from './starships'
import Vehicle from './vehicles'
import Species from './species'


 const CharacterCard = props => {
     const {birth_year, eye_color, gender, hair_color, height, mass, skin_color, species, starships, vehicles} = props.characterInfo;
    return (
        <div className="container">
            <h1>{props.characterInfo.name}</h1>
            <p><strong>Birth Year: </strong><br/>{birth_year}</p>
            <p><strong>Eye Color: </strong><br/>{eye_color}</p>
            <p><strong>Gender: </strong><br/>{gender}</p>
            <p><strong>Hair Color: </strong><br/>{hair_color}</p>
            <p><strong>Height: </strong><br/>{height}cm</p>
            <p><strong>Mass: </strong><br/>{mass}kg</p>
            <p><strong>Skin Color: </strong><br/>{skin_color}</p>
            <p><strong>Species: </strong><br/>{species.map((species, i) => <Species key={i} species={species}/>)}</p>
            <Starship ship={starships}/>
            <Vehicle vehicle={vehicles}/>
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