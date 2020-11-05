import React, { useState, useEffect } from 'react';
import { Button } from 'react-bootstrap';
import axios from 'axios';

function Currency({currentCurrency, chCurrency, currUnit}){

    const[currencies, setCurrencies] = useState([]);
    const[loading, setLoading] = useState(false);

    useEffect(() => {
        const fetchCurrencies = async () => {
            setLoading(true);
            let url = `https://api.coingecko.com/api/v3/exchange_rates`;
            const res = await axios.get(url);
            setCurrencies(res.data.rates);
            setLoading(false);
        }
    
        fetchCurrencies();

    }, []);

    const onClickCurrency = (key, unit) => {
        chCurrency(key);
        currUnit(unit);
    }

    const currencyType = (type) => mapObject(currencies, function (key, value){
        if(value.type === type){
            return(
                <li><a onClick={() => onClickCurrency(key, value.unit)} className="currency-items" href="#">{key.toString().toUpperCase()} ({value.unit})</a></li>
            );
        }
    })

    if(loading){
        return (
            <div className="dropdown">
                <Button variant="success" className="dropbtn">{currentCurrency.toString().toUpperCase()}</Button>
            </div>
        )
    }

    return (
            <div className="dropdown">
                <Button variant="success" className="dropbtn">{currentCurrency.toString().toUpperCase()}</Button>
                <div className="dropdown-content">
                    <ul>Crypto</ul>
                    {currencyType("crypto")}
                    <ul>Fiat</ul>
                    {currencyType("fiat")}
                    <ul>Commodity</ul>
                    {currencyType("commodity")}
                </div>
            </div>
        );
}

function mapObject(object, callback) {
    return Object.keys(object).map(function (key) {
      return callback(key, object[key]);
    });
}


export default Currency;
