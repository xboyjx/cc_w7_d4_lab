import React from "react";

const CountryItem = ({country, onCountryClick, onFavoriteButtonClick}) => {

    const handleClick = function(){
        onCountryClick(country)
        console.log(`Clicked on ${country.name}`)
    }

    const handleFavoriteButtonClick = function(){
        onFavoriteButtonClick(country)
        console.log(`added ${country.name} to favorites`)
    }

    return (
        <>
        <tr>
            <td onClick={handleClick}>{country.name}</td>
            <td>{country.population}</td>
            <td>{country.region}</td>
            <td><img src={country.flag}></img></td>
            <td><button onClick={handleFavoriteButtonClick}>Favourite</button></td>
        </tr>
        </>
    )
}

export default CountryItem