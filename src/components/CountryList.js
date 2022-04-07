import React from "react";
import CountryItem from "./CountryItem";

const CountryList = ({countries}) => {

    const countryItems = countries.map((country, index) => {
        return <CountryItem country={country} key={index}/>
    });

    return(
        <div>
            <table>
                <tr>
                    <th>Country Name</th>
                    <th>Population</th>
                    <th>Region</th>
                </tr>
                    {countryItems}
            </table>
        </div>
    );
};

export default CountryList;