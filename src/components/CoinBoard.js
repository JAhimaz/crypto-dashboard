import { Sparklines, SparklinesLine } from 'react-sparklines';
import React, { useState, useEffect } from 'react';
import { useLocation, Link } from "react-router-dom";
import axios from 'axios';


function CoinBoard(){

    const [coin, setCoin] = useState([]);
    const [loading, setLoading] = useState(true);

    let data = useLocation();
    let coinId = data.state.coinId;

    useEffect(() => {
        const fetchCoin = async () => {
            if(typeof coinId === 'undefined'){
                console.log("NULL COINNAME");
            }else{
                console.log(coinId);
                let url = `https://api.coingecko.com/api/v3/coins/${coinId}?market_data=true&sparkline=true`;
                const res = await axios.get(url);
                setCoin(res.data);
                setLoading(false);
            }
        }

        fetchCoin();

    }, []);

    if(loading){
        return (
            <h2>Loading Data</h2>
        )
    }else{
        return (
            <div>
                <h2>{coin.name} {coin.id} {coin.hashing_algoritm} {coin.symbol} {coin.market_cap_rank}</h2>
                <img src={coin.image.large} alt={coin.name} />
            </div>
        );
    }
}

export default CoinBoard;