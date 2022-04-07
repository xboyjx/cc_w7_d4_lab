import React,{ useState, useEffect } from "react";
import CountryList from "../components/CountryList";
import CountryDetail from "../components/CountryDetail";

const CountryContainer = () => {

    const[countries, setCountries] = useState([]);
    const[selectedCountry, setSelectedCountry] =useState(null);

    useEffect(() => {
        getCountries();
    },[])

    const getCountries = function(){
        fetch('https://restcountries.com/v2/all')
        .then(res => res.json())
        // .then(country => console.log(country))
        .then(countries => setCountries(countries))
    }

    const onCountryClick = function(country){
        setSelectedCountry(country);
    }





    return (
        <div>
            <CountryList countries={countries} onCountryClick={onCountryClick} />
            {selectedCountry ? <CountryDetail country = {selectedCountry}/> :null}
        </div>
    );
};

export default CountryContainer;