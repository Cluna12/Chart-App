import './App.css';
import LoginForm from './Components/Loginform/LoginForm';

function App() {

  return (
  <div className='wrapper'>
    <LoginForm/>
  </div>



  );
}

export default App;



/*
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

<>
      <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#home">Pie-Chart</Nav.Link>
            <Nav.Link href="#features">Line-Graph</Nav.Link>
            <Nav.Link href="#pricing">Bar-Chart</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  */