import React,{ useState, useEffect } from "react";
import CountryList from "../components/CountryList";

const CountryContainer = () => {

    const[countries, setCountries] = useState([]);

    useEffect(() => {
        getCountries();
    },[])

    const getCountries = function(){
        fetch('https://restcountries.com/v2/all')
        .then(res => res.json())
        // .then(country => console.log(country))
        .then(countries => setCountries(countries))
    }





    return (
        <div>
            <CountryList countries={countries} />
        </div>
    );
};

export default CountryContainer;