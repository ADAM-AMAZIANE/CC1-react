
import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Nav } from 'react-bootstrap';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';

export default function NavBar() {
  return (
    <div>



<Navbar bg="light" expand="lg">
<Navbar.Brand href='adam'>ADAM</Navbar.Brand>
<Navbar.Toggle aria-controls="basic-navbar-nav" />
<Navbar.Collapse id="basic-navbar-nav">
  <Nav className="mr-auto">
    <Nav.Link as={Link} to="/Calc">calc</Nav.Link>
    <Nav.Link as={Link} to="/ImageSlider">ImageSlider</Nav.Link>
    <Nav.Link as={Link} to="/TodoList">TodoList</Nav.Link>
    <Nav.Link as={Link} to="/ContactForm">ContactForm</Nav.Link>
    <Nav.Link as={Link} to="/Api">Api</Nav.Link>
    <Nav.Link as={Link} to="/Langue">Langue</Nav.Link>
  </Nav>
</Navbar.Collapse>
</Navbar>


    </div>
  )
}





