import { Container } from 'react-bootstrap';
import MainList from './MainList';

function Dashboard(){
    return (
        <Container fluid className="dashboard-container">
            <MainList />
        </Container>
    );
}

export default Dashboard;