import React from "react";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { useNavigate } from "react-router";


export const NavBar = ()=> {
    const navigate = useNavigate();
    return (
            <Navbar sticky="top" bg="dark" data-bs-theme="dark" expand="lg">
              <Container>
                <Navbar.Brand onClick={()=>navigate("/")}>Homepage</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                  <Nav className="ms-auto">
                    <Nav.Link onClick={()=>navigate("/Agenda")}>Agenda</Nav.Link>
                    <Nav.Link onClick={()=>navigate("/Users")}>Users</Nav.Link>
                  </Nav>
                </Navbar.Collapse>
              </Container>
            </Navbar>
          )
}