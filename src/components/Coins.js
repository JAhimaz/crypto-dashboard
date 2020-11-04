import { faAutoprefixer } from '@fortawesome/free-brands-svg-icons';
import { Sparklines, SparklinesLine } from 'react-sparklines';
import React from 'react';

function Posts({coins, loading, unit}){

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
            {coins.map(coin => (
                <tr>
                    <td>fav</td>
                    <td>{coin.market_cap_rank}</td>
                    <td><img src={coin.image} className="coin-icon"/></td>
                    <td>{coin.name}</td>
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
            ))}
            </tbody>
        </table>
    </div>
    );
}

export default Posts;