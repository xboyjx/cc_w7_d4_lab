import React from "react";
import CountryItem from "./CountryItem";

const CountryList = ({countries, onCountryClick}) => {

    const countryItems = countries.map((country, index) => {
        return <CountryItem country={country} key={index} onCountryClick={onCountryClick}/>
    });

    return(
        <div>
            <table>
                <tr>
                    <th>Country Name</th>
                    <th>Population</th>
                    <th>Region</th>
                    <th>Flag</th>
                </tr>
                    {countryItems}
            </table>
        </div>
    );
};

export default CountryList;