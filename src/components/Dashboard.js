import { Container } from 'react-bootstrap';
import MainList from './MainList';

function Dashboard(){
    return (
        <Container fluid className="dashboard">
            <MainList fluid/>
        </Container>
    );
}

export default Dashboard;