import React,{ useState, useEffect } from "react";

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
        
    );
};

export default CountryContainer;