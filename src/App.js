//Find better way to handling imports through modules
import React, { Component } from "react";


// import './css/App.css';
// import './css/Header.css';
// import './css/Dashboard.css';
// import './css/Coins.css';
// import './css/Pages.css';
// import './css/Currency.css';
// import './css/MainList.css';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import Header from './components/Header';
// import Dashboard from './components/Dashboard';

//Routing
import { BrowserRouter as Router, Route, Switch, Link, Redirect } from "react-router-dom";

//Pages
import MainPage from "./pages/index";
import Favourites from "./pages/favourites";

function App() {
    return( 
    <Router>
      <Switch>
        <Route exact path="/" component={MainPage} />
        <Route exact path="/favourites" component={Favourites} />
        <Redirect to="/" />
      </Switch>
     
    </Router>
    );
}

export default App;

// function App(){
//   return (
//     <div className="App">
//       <Header />
//       <Dashboard>
//       </Dashboard>
//     </div>
//   );
// }