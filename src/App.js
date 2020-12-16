//Find better way to handling imports through modules
import React from "react";


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
import { BrowserRouter as Router, Route, Switch, Redirect } from "react-router-dom";

//Pages
import MainPage from "./pages/index";
import Favourites from "./pages/favourites";
import CoinPage from "./pages/coinpage";

function App() {
    return( 
    <Router>
      <Switch>
        <Route exact path="/crypto-dashboard/favourites" component={Favourites} />
        <Route exact path="/crypto-dashboard/:coin" name="coin" component={CoinPage} />
        <Route path="/crypto-dashboard/" component={MainPage} />
        <Redirect to="/crypto-dashboard/" />
        {/* REDIRECT TO 404 */}
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