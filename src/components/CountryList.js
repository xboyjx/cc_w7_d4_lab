import React from "react";
import CountryItem from "./CountryItem";

const CountryList = ({countries, onCountryClick, onFavoriteButtonClick}) => {

    const countryItems = countries.map((country, index) => {
        return <CountryItem country={country} key={index} onCountryClick={onCountryClick} onFavoriteButtonClick={onFavoriteButtonClick}/>
    });

    return(
        <div>
            <table>
                <tr>
                    <th>Country Name</th>
                    <th>Population</th>
                    <th>Region</th>
                    <th>Flag</th>
                    <th>Favourite?</th>
                </tr>
                    {countryItems}
            </table>
        </div>
    );
};

export default CountryList;