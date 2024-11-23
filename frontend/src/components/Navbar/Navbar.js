import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Nav, Navbar, Button } from 'react-bootstrap';
import './Navbar.css';
function NavbarComponent() {
  
  return (
    <Navbar expand="lg" className='custom-navbar'>
      <Container fluid>
        <Navbar.Brand as={Link} to='/' className='text-light me-3'>Kind Reminder</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={Link} to='/calendar' className="nav-link-custom text-light me-3" > Calendar</Nav.Link>
            <Nav.Link as={Link} to='/events' className="nav-link-custom text-light me-3"> Events</Nav.Link>
            <Nav.Link as={Link} to='/reminders' className="nav-link-custom text-light me-3"> Reminders</Nav.Link>
            <Nav.Link as={Link} to='/tasks' className="nav-link-custom text-light me-3"> Tasks</Nav.Link>
          </Nav>

      
          
          <Button as={Link} to="/signin" className="capsule-button me-2">Sign In</Button>
          <Button as={Link} to="/signup" className="capsule-button">Sign Up</Button>



        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavbarComponent;
