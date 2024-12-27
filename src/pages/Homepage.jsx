import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { NavLink } from "react-router";
import { routeConfig } from '../routing/routerConfig,js';

export const Homepage = () => {
    return (
        <Navbar sticky="top" bg="dark" data-bs-theme="dark" expand="lg">
            <Container className="navbar-expand-lg">
                <Navbar.Brand href="#">Homepage</Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll">
                    <Nav className="ms-auto" navbarScroll
                        {routeConfig.map((route) => {
                            return (
                                <NavLink to={route.path} end>
                                   {route.name}
                                </NavLink>
                            )
                        }
                        )}
                    >
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}