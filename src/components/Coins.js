import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons'
import { Sparklines, SparklinesLine } from 'react-sparklines';
import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import axios from 'axios';

function Coins({coins, loading, unit, isFavourite, currency, coinsPerPage, currentPage}){

    const [favourites, setFavourites] = useState([]);
    const [favCoins, setFavCoins] = useState([]);

    useEffect(() => {
        const fetchFavourites = async () => {
            let favourites = [];
            favourites = JSON.parse(sessionStorage.getItem("favourites"));
            if(favourites.length > 0){
                let listOfFavourites = favourites.join("%2C");
                    const res = await axios.get(`https://api.coingecko.com/api/v3/coins/markets?vs_currency=${currency}&ids=${listOfFavourites}&order=market_cap_desc&per_page=${coinsPerPage}&page=${currentPage}&sparkline=true`);
                    setFavCoins(res.data);
            }else{
                setFavCoins([]);
            }
        }

        //This is only used because it's using session variable, it is not neccessary if proper favourite handling
        //is used
        if(JSON.parse(sessionStorage.getItem("favourites")) !== null){
            fetchFavourites();
        }

    }, [favourites]);

    const removeFromFavourites = (coinName) => {
        let tempFav = []
        tempFav = JSON.parse(sessionStorage.getItem("favourites"));
        tempFav = tempFav.filter(function(a){return a !== coinName})
        setFavourites(tempFav);
        sessionStorage.setItem("favourites", JSON.stringify(tempFav));
    }

    const addToFavourites = (coinName) => {
        let tempFav = []
        if(JSON.parse(sessionStorage.getItem("favourites"))){
            tempFav = JSON.parse(sessionStorage.getItem("favourites"));
        }
        tempFav.push(coinName);
        setFavourites(tempFav);
        sessionStorage.setItem("favourites", JSON.stringify(tempFav));
    }

    const numberWithCommas = (x) => {
        if(x <= 1){
            return x.toString();
        }else{
            return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
        }
        
    }

    if(loading){
        return(
            <div className="reactive-table">
            <table>
                <thead>
                    <tr>
                        <th className="favourite"></th>
                        <th className="number">#</th>
                        <th className="coin-image"></th>
                        <th className="coin">Coin</th>
                        <th className="symbol"> </th>
                        <th className="price">Price</th>
                        <th className="Volume">24h Volume</th>
                        <th className="Sparkline">Last 7 Days</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td></td>
                        <td>#</td>
                        <td></td>
                        <td>Loading...</td>
                        <td></td>
                        <td>Loading...</td>
                        <td>Loading...</td>
                    </tr>
                </tbody>
            </table>
        </div>
        );
    }
    
    return (
        
    <div className="reactive-table">
        <table>
            <tr>
                <th className="favourite"></th>
                <th className="number">#</th>
                <th className="coin-image"></th>
                <th className="coin">Coin</th>
                <th className="symbol"> </th>
                <th className="price">Price</th>
                <th className="Volume">24h Volume</th>
                <th className="Sparkline">Last 7 Days</th>
            </tr>
            <tbody>

            {/* This Section Can be put into a proper function to reduce and clean code as alot of the lines repeat*/}

            {isFavourite ? (
                favCoins.length === 0 ? (
                    <tr>
                        <td></td>
                        <td>#</td>
                        <td></td>
                        <td>No Favourites</td>
                    </tr>
                ) : (
                    favCoins.map(coin => (
                        <tr>
                            {(JSON.parse(sessionStorage.getItem("favourites"))).includes(coin.id) ? (
                                <td><a className="favStarSelected" onClick={() => removeFromFavourites(coin.id)}><FontAwesomeIcon icon={faStar}/></a></td>
                            ) : (
                                <td><a className="favStar" onClick={() => addToFavourites(coin.id)}><FontAwesomeIcon icon={faStar}/></a></td>
                            )}
                            <td>{coin.market_cap_rank}</td>
                            <td><img alt={coin.name} src={coin.image} className="coin-icon"/></td>
                            <td><Link to={{pathname: `/crypto-dashboard/${coin.name}`}}>{coin.name}</Link></td>
                            <td>{coin.symbol}</td>
                            <td>{unit} {numberWithCommas(coin.current_price)}</td>
                            <td>{unit} {numberWithCommas(coin.total_volume)}</td>
                            <td>        
                                <Sparklines data={coin.sparkline_in_7d.price}>
                                    { coin.sparkline_in_7d.price[coin.sparkline_in_7d.price.length - 1] < coin.sparkline_in_7d.price[coin.sparkline_in_7d.price.length - 2] ? (
                                        <SparklinesLine color="red" />
                                    ):(
                                        <SparklinesLine color="green" />
                                    ) }
                                </Sparklines>
                            </td>
                        </tr>
                    ))
                ) 
            ) : (
                coins.map(coin => (
                    <tr>
                        {JSON.parse(sessionStorage.getItem("favourites")) && (JSON.parse(sessionStorage.getItem("favourites"))).includes(coin.id) ? (
                            <td><a className="favStarSelected" onClick={() => removeFromFavourites(coin.id)}><FontAwesomeIcon icon={faStar}/></a></td>
                        ) : (
                            <td><a className="favStar" onClick={() => addToFavourites(coin.id)}><FontAwesomeIcon icon={faStar}/></a></td>
                        )}
                        
                        <td>{coin.market_cap_rank}</td>
                        <td><img alt={coin.name} src={coin.image} className="coin-icon"/></td>
                        <td><Link to={{pathname: `/crypto-dashboard/${coin.name}`, state: { coinId: coin.id}}}>{coin.name}</Link></td>
                        <td>{coin.symbol.toString().toUpperCase()}</td>
                        <td>{unit} {numberWithCommas(coin.current_price)}</td>
                        <td>{unit} {numberWithCommas(coin.total_volume)}</td>
                        <td>        
                            <Sparklines data={coin.sparkline_in_7d.price}>
                                { coin.sparkline_in_7d.price[coin.sparkline_in_7d.price.length - 1] < coin.sparkline_in_7d.price[coin.sparkline_in_7d.price.length - 2] ? (
                                    <SparklinesLine color="red" />
                                ):(
                                    <SparklinesLine color="green" />
                                ) }
                            </Sparklines>
                        </td>
                    </tr>
                ))
            )}
            </tbody>
        </table>
    </div>
    );
}




export default Coins;