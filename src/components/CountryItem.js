import React from "react";

const CountryItem = ({country, onCountryClick}) => {

    const handleClick = function(){
        onCountryClick(country)
        console.log(`Clicked on ${country.name}`)
    }

    return (
        <>
        <tr>
            <td onClick={handleClick}>{country.name}</td>
            <td>{country.population}</td>
            <td>{country.region}</td>
            <td><img src={country.flag}></img></td>
        </tr>
        </>
    )
}

export default CountryItem