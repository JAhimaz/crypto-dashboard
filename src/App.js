import './css/App.css';
import './css/Header.css';
import './css/Footer.css';
import './css/Dashboard.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Dashboard from './components/Dashboard';

function App() {
  return (
    <div className="App">
      <Header />
      <Dashboard>

      </Dashboard>
      <Footer/>
    </div>
  );
}

export default App;
