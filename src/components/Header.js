import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChartArea } from '@fortawesome/free-solid-svg-icons'

function Header(){
    return (
        <p className="header-title">_CoinStats Interview Assessment <FontAwesomeIcon icon={faChartArea} /></p> 
    );
}

export default Header;