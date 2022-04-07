import React from "react";
import FavoriteCountryItem from "./FavoriteItem";

const FavoriteList = ({favoriteCountries}) => {
    const favoriteCountryItems = favoriteCountries.map((favoriteCountry, index) => {
        return <FavoriteCountryItem favoriteCountry={favoriteCountry} key={index} />
    });

    return (
        <div>
            <table>
                <tr>
                    <th>Country Name</th>
                    <th>Population</th>
                    <th>Region</th>
                    <th>Flag</th>
                </tr>
                    {favoriteCountryItems}
            </table>
        </div>
    )
}

export default FavoriteList