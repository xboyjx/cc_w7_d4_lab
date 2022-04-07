import React from "react";

const FavoriteCountryItem = ({favoriteCountry}) => {
    return (
        <>
        <tr>
            <td>{favoriteCountry.name}</td>
            <td>{favoriteCountry.population}</td>
            <td>{favoriteCountry.region}</td>
            <td><img src={favoriteCountry.flag}></img></td>
        </tr>
        </>
    )
}

export default FavoriteCountryItem;