import { faAutoprefixer } from '@fortawesome/free-brands-svg-icons';
import React from 'react';
import BootstrapTable from 'react-bootstrap-table-next';

function Posts({coins, loading}){

    const columns = [{
    dataField: 'market_cap_rank',
    text: '#',
    sort: true
    }, {
    dataField: 'name',
    text: 'Coin',
    sort: true
    }, {
    dataField: 'symbol',
    text: '',
    sort: false
    }, {
    dataField: 'current_price',
    text: 'Price',
    sort: true
    }, {
    dataField: 'total_volume',
    text: '24h Volume',
    sort: true
    }];

    const defaultSorted = [{
    dataField: 'market_cap_rank',
    order: 'asc'
    }];

    if(loading){
        return <h2>Loading coins...</h2>
    }
    
    return (
        <BootstrapTable
            keyField="id"
            data={ coins }
            columns={ columns }
            defaultSorted={ defaultSorted } 
            />
        // <BootstrapTable keyField='id' data={ coins } columns={ columns } bordered={ false } />
        
    // <div>
    //     <table>
    //         <tr>
    //             <th>#</th>
    //             <th>Coin</th>
    //             <th> </th>
    //             <th>Price</th>
    //             <th>24h Volume</th>
    //         </tr>
    //         <tbody>
    //         {coins.map(coin => (
    //             <tr>
    //                 <td>5</td>
    //                 <td>{coin.name}</td>
    //                 <td>{coin.symbol}</td>
    //                 <td>{coin.current_price}</td>
    //                 <td>{coin.total_volume}</td>
    //             </tr>
    //         ))}
    //         </tbody>
    //     </table>
    // </div>

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