import React from "react";
import logo from "../../../assets/logo.png";
import moment from "moment";
import Marquee from "react-fast-marquee";
import { Form, Link } from "react-router-dom";
import { Container, Nav, Navbar } from "react-bootstrap";
import { FaUser} from 'react-icons/fa';



const Header = () => {
  return (
    <div className="container pt-3">
      <div className="text-center">
        <img src={logo} alt="" />
        <p className="text-secondary">
          <small>Journalism Without Fear or Favour</small>
        </p>
        <p>{moment().format("dddd, MMMM D ,YYYY ")}</p>
      </div>
      <div className="d-flex bg-light py-2 rounded">
        <button className="btn btn-danger">Latest</button>
        <Marquee>
          I can be a React component, multiple React components, or just some
          text...........<Link>see more</Link>
        </Marquee>
      </div>
     {/* navbar */}
     <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container>
        <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mx-auto">
            <Nav.Link href="#">Home</Nav.Link>
            <Nav.Link href="#about">About</Nav.Link>
            <Nav.Link href="#career">Career</Nav.Link>
            
          </Nav>
          <Nav>
            <Nav.Link href="#"><FaUser></FaUser></Nav.Link>
            <Nav.Link eventKey={2} href="#memes">
              Login
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </div>
  );
};

export default Header;
