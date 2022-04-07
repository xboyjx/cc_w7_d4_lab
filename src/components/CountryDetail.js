import React from "react";

const CountryDetail = ({country}) => {


    return(
        <div>
            <h3>{country.name}</h3>
            <p>Capital: {country.capital}</p>
            <p>Population: {country.population}</p>
        </div>
    )
}

export default CountryDetail