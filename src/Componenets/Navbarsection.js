import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import QuickPik from '../../src/Images/QuickPik.png';
import Contact from '../../src/Images/Contact.png';
import Cart from '../../src/Images/Cart.png';
import '../../src/App.css';
import Vector from '../../src/Images/Vector.png'
import Form from '../../src/Images/Form.png'
import 'animate.css';



function Navbarsection() {
  return (
    <div>
    <Navbar collapseOnSelect expand="lg" className="p-4">
      <Container>
        <Navbar.Brand href="#home"><img src={QuickPik} alt="QuickPik Logo" /></Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto gap-4">
            <Nav.Link href="#Home" id='Nav'>Home</Nav.Link>
            <Nav.Link href="#About us" id='Nav'>About us</Nav.Link>
            <Nav.Link href="#Products" id='Nav'>Products</Nav.Link>
            <Nav.Link href="#Services" id='Nav'>Services</Nav.Link>
            <Nav.Link href="#Contact us" id='Nav'>Contact us</Nav.Link>
          </Nav>
          <Nav>
            <button className='btn-navbar mob-nav animate__animated animate__swing'>ShopNow</button>
            <Nav.Link className='ms-3'><img  className='mob-nav' src={Contact} alt="Contact" /></Nav.Link>
            <Nav.Link><img  className='mob-nav' src={Cart} alt="Cart" /></Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    <div className='d-flex m-3 main-nav-div p-2 d-flex justify-content-center'>
      <button className='nav-btn-1'>
    <img src={Vector} alt=''></img>All catogries
      </button>
      <div className='d-flex'> 
        <button className='nav-btn-2'>What are you looking for?</button><img src={Form} alt=''></img>
      </div>
    </div>
    </div>
   
  );
}

export default Navbarsection;
