import React from "react";
import CountryItem from "./CountryItem";

const CountryList = ({countries}) => {

    const countryItems = countries.map((country, index) => {
        return <CountryItem country={country} key={index}/>
    });

    return(
        <div>
            <ul>
                {countryItems}
            </ul>
        </div>
    );
};

export default CountryList;