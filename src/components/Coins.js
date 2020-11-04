import { faAutoprefixer } from '@fortawesome/free-brands-svg-icons';
import React from 'react';
import BootstrapTable from 'react-bootstrap-table-next';

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
                    <td>Sparkline Goes Here</td>
                </tr>
            ))}
            </tbody>
        </table>
    </div>

    // <ul className="coins-list">
    //     {coins.map(coin => (
    //         <li key={coin.id} className="coins-list-item">
    //             {coin.name}
    //         </li>
    //     ))}
    // </ul>
    );
}

export default Posts;