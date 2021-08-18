import React from "react";
import styled from 'styled-components'
import { Navbar, Nav, Container } from "react-bootstrap";

const Header = () => {
  return (
    <header>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">ProShop</Navbar.Brand>
          <LeftContainer>
          <Nav className="me-auto">
           
            <Nav.Link href="#features"><i className="fas fa-shopping-cart"></i>Cart</Nav.Link>
            <Nav.Link href="#pricing"><i className="fas fa-"> </i>SignIn</Nav.Link>
  
          </Nav>
          </LeftContainer>
        </Container>
      </Navbar>
    </header>
  );
};

export default Header;

const LeftContainer=styled.div`
`