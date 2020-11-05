import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChartArea } from '@fortawesome/free-solid-svg-icons'

function Header(){
    return (
        <p className="header-title">_CoinStats Interview Assessment <FontAwesomeIcon icon={faChartArea} /> | <a className="title" href="https://trello.com/b/yAbRgw2z/coingecko-interview">Trello Board</a> |  <a className="title" href="https://github.com/JAhimaz/internship-interview-questions/tree/Assessment"> GitHub</a>
        
        </p> 
    );
}

export default Header;