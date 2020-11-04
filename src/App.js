//Find better way to handling imports through modules

import './css/App.css';
import './css/Header.css';
import './css/Dashboard.css';
import './css/Coins.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header';
import Dashboard from './components/Dashboard';

function App() {
  return (
    <div className="App">
      <Header />
      <Dashboard>
      </Dashboard>
    </div>
  );
}

export default App;
