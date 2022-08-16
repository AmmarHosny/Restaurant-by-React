import React from 'react'
import { Container, Nav, Navbar} from 'react-bootstrap'
import "./Navbar2.css"
import logo from '../../images/logo.png'

const Navbar1 = () => {
  return (
    <div>
    <Navbar  bg="light" expand="lg" >
      <Container >
        <Navbar.Brand href="#home">
          <img src={logo} alt=''></img>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#About Us">About Us</Nav.Link>
            <Nav.Link href="#Explore Foods">Explore Foods</Nav.Link>
            <Nav.Link href="#Reviews">Reviews</Nav.Link>
            <Nav.Link href="#FAQ">FAQ</Nav.Link>
            <Nav>
              <Nav.Link href="#deets" className='number'>+02 0111930731</Nav.Link>
            </Nav>
          </Nav>
        </Navbar.Collapse>
      </Container>
</Navbar>
    </div>
  )
}

export default Navbar1