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
        return (
            <div>
                {value.type == type && <li><a onClick={() => onClickCurrency(key, value.unit)} className="" href="#!">{key.toString().toUpperCase()} ({value.unit})</a></li>}
            </div>
        )
    })

    if(loading){
        return (
            <h2>loading currencies</h2>
        )
    }

    return (
            <div class="dropdown">
                <Button class="dropbtn">{currentCurrency.toString().toUpperCase()}</Button>
                <p>Crypto</p>
                {currencyType("crypto")}
                <p>Fiat</p>
                {currencyType("fiat")}
                <p>Commodity</p>
                {currencyType("commodity")}
            </div>
        );
}

function mapObject(object, callback) {
    return Object.keys(object).map(function (key) {
      return callback(key, object[key]);
    });
}


export default Currency;
