
//import Nav from "./nav";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

import { NavLink, Link } from "react-router-dom";

function Navigation() {
    return (
        <Navbar expand="lg" className="bg-2">
            <Container>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto">
                    <NavLink to="/">Home</NavLink>
                    <NavLink to="/Decks">Decks</NavLink>
                    <NavLink to="/Categories">Categories</NavLink>
                    <NavLink to="/Settings">Settings</NavLink>
                </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default function Header() {
    return (
        <header className="bg-1">
            <div className="pagetop">
                <img src="/images/illustrations/logo.png"/>
                <h1 className="display-1">Fonty's Flashcards</h1>
            </div>
            <Navigation />
        </header>
    )
}