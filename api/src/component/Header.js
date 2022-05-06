import React from 'react'
import {Navbar,Container,Nav} from "react-bootstrap"
function Header() {
  return (
    <div>
   <Navbar bg="light" expand="lg" fixed='top' >
  <Container fluid>
    <Navbar.Brand href="#">My App</Navbar.Brand>
    <Navbar.Toggle aria-controls="navbarScroll" />
    <Navbar.Collapse id="navbarScroll">
      <Nav
        className="me-auto my-2 my-lg-0"
        style={{ maxHeight: '100px' }}
        navbarScroll
      >
        <Nav.Link href="/">Home</Nav.Link>
        <Nav.Link href="liked">Liked</Nav.Link>
      </Nav>
      
    </Navbar.Collapse>
  </Container>
</Navbar>


    </div>
  )
}

export default Header