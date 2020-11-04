import React, { useState, useEffect } from 'react';
import Coins from './Coins';
import Pages from './Pages';
import Currency from './Currency';
import axios from 'axios';

function MainList(){

    // Hooks
    const[coins, setCoins] = useState([]);
    const[loading, setLoading] = useState(false);
    const [currentPage, setCurrentPage] = useState(1);
    const [coinsPerPage, setCoinsPerPage] = useState(20);
    const [currency, setCurrency] = useState("usd");
    const [unit, setUnit] = useState('$');

    useEffect(() => {
        const fetchCoins = async () => {
            setLoading(true);
            let url = `https://api.coingecko.com/api/v3/coins/markets?vs_currency=${currency}&order=market_cap_desc&per_page=${coinsPerPage}&page=${currentPage}&sparkline=true`;
            const res = await axios.get(url);
            setCoins(res.data);
            setLoading(false);
        }
    
        fetchCoins();

    }, [currentPage, currency]);

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
            <Currency chCurrency={chCurrency} currUnit={currUnit}></Currency>
            <Coins coins={coins} loading={loading} unit={unit} />
            <Pages coinsPerPage={coinsPerPage} totalPosts={coins.length} activePage={currentPage} paginate={paginate}/>
      </div>
    );
}

export default MainList;