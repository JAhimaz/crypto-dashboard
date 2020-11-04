import { faAutoprefixer } from '@fortawesome/free-brands-svg-icons';
import { Sparklines, SparklinesLine } from 'react-sparklines';
import React from 'react';

function Posts({coins, loading}){

    if(loading){
        return(
            <div className="reactive-table">
            <table>
                <tr>
                    <th class="number">#</th>
                    <th class="coin-image"></th>
                    <th class="coin">Coin</th>
                    <th class="symbol"> </th>
                    <th class="price">Price</th>
                    <th class="Volume">24h Volume</th>
                    <th class="Sparkline">Last 7 Days</th>
                </tr>
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
                <th class="number">#</th>
                <th class="coin-image"></th>
                <th class="coin">Coin</th>
                <th class="symbol"> </th>
                <th class="price">Price</th>
                <th class="Volume">24h Volume</th>
                <th class="Sparkline">Last 7 Days</th>
            </tr>
            <tbody>
            {coins.map(coin => (
                <tr>
                    <td>{coin.market_cap_rank}</td>
                    <td><img src={coin.image} className="coin-icon"/></td>
                    <td>{coin.name}</td>
                    <td>{coin.symbol}</td>
                    <td>{coin.current_price}</td>
                    <td>{coin.total_volume}</td>
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