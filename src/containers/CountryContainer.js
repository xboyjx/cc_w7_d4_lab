import React,{ useState, useEffect } from "react";
import CountryList from "../components/CountryList";
import CountryDetail from "../components/CountryDetail";
import FavoriteList from "../components/FavoriteList";

const CountryContainer = () => {

    const[countries, setCountries] = useState([]);
    const[selectedCountry, setSelectedCountry] =useState(null);
    const[favoriteCountries, setFavoriteCountries] = useState([])
    const[totalPop, setTotalPop] = useState(0)


    useEffect(() => {
        getCountries();
        getTotalPop();
    })

    const getCountries = function(){
        fetch('https://restcountries.com/v2/all')
        .then(res => res.json())
        // .then(country => console.log(country))
        .then(countries => setCountries(countries))
    }

    const onCountryClick = function(country){
        setSelectedCountry(country);
    }

    const onFavoriteButtonClick = function(selectedCountry) {
        const updatedFavoriteCountries = [...favoriteCountries, selectedCountry]
        setFavoriteCountries(updatedFavoriteCountries)
    }

    const getTotalPop = () => {
        const populationList = countries.map((country) => {
            return country.population
        })

        const total = populationList.reduce((previousValue, currentValue) =>{
            return previousValue + currentValue}, 0)

        setTotalPop(total)  
    }


    return (
        <div>
            <h2>Total Population of all countries: {totalPop}</h2>
            <CountryList countries={countries} onCountryClick={onCountryClick} onFavoriteButtonClick={onFavoriteButtonClick} />
            {selectedCountry ? <CountryDetail country = {selectedCountry}/> :null}
            <FavoriteList favoriteCountries={favoriteCountries} />
        </div>
    );
};

export default CountryContainer;