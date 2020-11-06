import React from "react";

import '../css/App.css';
import '../css/Header.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from '../components/Header';
import CoinBoard from '../components/CoinBoard';


function CoinPage() {
    return (
    <div className="App">
        <Header />
        <CoinBoard />
    </div>
    );
};

export default CoinPage;