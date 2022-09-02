import React from "react";
import 'bootstrap/dist/css/bootstrap.css';
import { Container, Nav, Navbar } from "react-bootstrap";

export default class StylingComponent extends React.Component {
    
    render() {
        return (
        <Navbar bg="dark" variant="dark">
            <Container>
            <Navbar.Brand href="#home">Kadek Sucipta</Navbar.Brand>
            <Nav className="me-auto">
                <Nav.Link href="#biography">Biography</Nav.Link>
                <Nav.Link href="#contact">Contact</Nav.Link>
            </Nav>
            </Container>
        </Navbar>

        
        )
    }
}