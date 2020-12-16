import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChartArea } from '@fortawesome/free-solid-svg-icons'

function Header(){
    return (
        <p className="header-title">_Crypto DashBoard <FontAwesomeIcon icon={faChartArea} /> <a className="title" href="https://github.com/JAhimaz/crypto-dashboard"> GitHub | Joshua Ahimaz</a>
        
        </p> 
    );
}

export default Header;