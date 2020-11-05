import React, { useState, useEffect } from 'react';
import { Button } from 'react-bootstrap';
import Coins from './Coins';
import Pages from './Pages';
import Currency from './Currency';
import axios from 'axios';
import { Link } from "react-router-dom";


function MainList(){


    // Hooks
    const[favPage, setIsFavPage] = useState(false);
    const[coins, setCoins] = useState([]);
    // const[favourites, setFavourites] = useState([]);
    const[loading, setLoading] = useState(false);
    const [currentPage, setCurrentPage] = useState(1);
    const [coinsPerPage, setCoinsPerPage] = useState(20);
    const [currency, setCurrency] = useState("usd");
    const [unit, setUnit] = useState('$');

    useEffect(() => {
        const getPage = () => {
            //Proper path handling can be done with routing and passing down through components by accessing the props
            if(window.location.pathname === "/internship-interview-questions/favourites"){
                setIsFavPage(true);
            } 
        }

        const fetchCoins = async () => {
            setLoading(true);
            let url = `https://api.coingecko.com/api/v3/coins/markets?vs_currency=${currency}&order=market_cap_desc&per_page=${coinsPerPage}&page=${currentPage}&sparkline=true`;
            const res = await axios.get(url);
            setCoins(res.data);
            setLoading(false);
        }

        fetchCoins();
        getPage();

    }, [currentPage, currency]);

    // useEffect(() => {
    //     const fetchFavourites = async () => {
    //         let favourites = []
    //         favourites = JSON.parse(sessionStorage.getItem("favourites"));
    //         if(favourites){
    //             let listOfFavourites = favourites.join("%2C");
                
    //                 const res = await axios.get(`https://api.coingecko.com/api/v3/coins/markets?vs_currency=${currency}&ids=${listOfFavourites}&order=market_cap_desc&per_page=${coinsPerPage}&page=${currentPage}&sparkline=true`);
            
    //         }
    //     }

    //     fetchFavourites();

    // }, [sessionStorage.getItem("favourites")]);

    //Change Page
    const paginate = (pageNumber) => setCurrentPage(pageNumber);

    //Change Currency
    const chCurrency = (changedCurrency) => setCurrency(changedCurrency);
    const currUnit = (changedUnit) => setUnit(changedUnit); 
    
    // Getting Current Coins
    // const indexOfLastCoin = currentPage * coinsPerPage;
    // const indexOfFirstCoin = indexOfLastCoin - coinsPerPage;
    // const currentCoins = coins.slice(indexOfFirstCoin, indexOfLastCoin);
    
    return(
      <div>
            <nav className="menu-bar">
                <div className="menu-item"><Currency currentCurrency={currency} chCurrency={chCurrency} currUnit={currUnit}></Currency></div> 
                {favPage ? (
                    <div className="menu-item"><Link to="/internship-interview-questions/"><Button variant="danger">Back To Home</Button></Link></div>
                ) : (
                    <div className="menu-item"><Link to="/internship-interview-questions/favourites"><Button variant="warning">Favourites</Button></Link></div>
                )}
            </nav>
            <Coins coins={coins} loading={loading} unit={unit} isFavourite={favPage} currency={currency} coinsPerPage={coinsPerPage} currentPage={currentPage}/>
            <Pages coinsPerPage={coinsPerPage} totalPosts={coins.length} activePage={currentPage} paginate={paginate}/>
      </div>
    );
}

export default MainList;