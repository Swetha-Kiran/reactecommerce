import React from 'react'
import "./header.css"
import { Link, useNavigate } from "react-router-dom"
import { Navbar, Nav, Form, Container } from 'react-bootstrap'

function Header() {

  const navigate = useNavigate();

  //get logged user from localstorage
  const authuser = JSON.parse(localStorage.getItem('user'))

  //handle logout
  const handleLogout = () => {
    localStorage.removeItem("loggedIn")
    navigate('/login')
  }
  
  //rendering the component
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container fluid>
        <Navbar.Brand href="#" id="nav-title">Vastra - ecommerce</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">

          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link as={Link} to={'/home'}>Home</Nav.Link>
            <Nav.Link as={Link} to={'/products'}>Products</Nav.Link>
          </Nav>

          <p style={{ marginRight: "20px" }}>Hello {authuser[0].name}! </p>
          <Form className="d-flex">
            <Nav.Link as={Link} to={'/login'} ><p id="nav-btn" onClick={handleLogout}>Log Out</p></Nav.Link>
            <Nav.Link as={Link} to={'/cart'}>Go to cart</Nav.Link>
          </Form>

        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default Header