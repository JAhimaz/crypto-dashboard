import React from "react";

import '../css/App.css';
import '../css/Header.css';
import '../css/Dashboard.css';
import '../css/Coins.css';
import '../css/Pages.css';
import '../css/Currency.css';
import '../css/MainList.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Dashboard from '../components/Dashboard';
import Header from '../components/Header';


function MainPage() {
  return (
    <div className="App">
      <Header />
      <Dashboard>
      </Dashboard>
    </div>
  );
};

export default MainPage