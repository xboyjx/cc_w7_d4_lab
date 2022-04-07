import React from "react";

const CountryItem = ({country}) => {

    return (
        <>
        <tr>
            <td>{country.name}</td>
            <td>{country.population}</td>
            <td>{country.region}</td>
        </tr>
        </>
    )
}

export default CountryItem