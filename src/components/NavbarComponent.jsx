import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { FaLinkedin, FaGithub, FaInstagram } from 'react-icons/fa';
import { MdHome, MdSchool, MdWork, MdInfo } from 'react-icons/md';
import { Link } from 'react-scroll'; // Smooth scrolling

import '../components/NavbarComponent.css';

const NavbarComponent = () => {
    return (
        <Navbar className="transparent-navbar" expand="lg" fixed="top">
            <Navbar.Brand href="#home">
                <span className="navbar-brand"> Portfolio</span>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                    <Nav.Link as={Link} to="home" smooth={true} duration={500}>
                        <MdHome />
                    </Nav.Link>
                    <Nav.Link as={Link} to="about" smooth={true} duration={500}>
                        <MdInfo />
                    </Nav.Link>
                    <Nav.Link as={Link} to="education" smooth={true} duration={500}>
                        <MdSchool />
                    </Nav.Link>
                    <Nav.Link as={Link} to="technical" smooth={true} duration={500}>
                        <MdWork />
                    </Nav.Link>
                </Nav>
                <Nav className="ml-auto social-icons">
                    <Nav.Link href="https://www.linkedin.com/in/avinashchandubingi" target="_blank" rel="noopener noreferrer">
                        <FaLinkedin />
                    </Nav.Link>
                    <Nav.Link href="https://github.com/avinashchandu" target="_blank" rel="noopener noreferrer">
                        <FaGithub />
                    </Nav.Link>
                    <Nav.Link href="https://instagram.com/avinash.chandu" target="_blank" rel="noopener noreferrer">
                        <FaInstagram />
                    </Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    );
};

export default NavbarComponent;
