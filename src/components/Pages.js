import React from 'react';
import Pagination from 'react-bootstrap/Pagination';
import PageItem from 'react-bootstrap/PageItem'

function Pages({ coinsPerPage, totalCoins, activePage, paginate }){
    // Hard coded for 5 Pages of Coins (This will affect the favourites page as there is no calculation being done for the total number of coins)
    const pageNumbers = [1, 2, 3, 4, 5];

    // Caculate how many pages required depending on the total number of coins
    // for (let i = 1; i <= Math.ceil(totalCoins / coinsPerPage); i++){
    //     pageNumbers.push(i);
    // }

    return (
        <div className="pagination-bar-row">
            <Pagination>
                {pageNumbers.map(number => (
                    <Pagination.Item onClick={() => paginate(number)} href="" key={number} active={number === activePage}>
                        <a>
                            {number}
                        </a>
                    </Pagination.Item>
                ))}
            </Pagination>
        </div>
    )

}

export default Pages;