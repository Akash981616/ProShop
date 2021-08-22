import React from "react";
import { LinkContainer } from "react-router-bootstrap";
import styled from "styled-components";
import { Navbar, Nav, Container } from "react-bootstrap";

const Header = () => {
  return (
    <header>
      <Navbar bg="dark" variant="dark">
        <Container>
          <LinkContainer  to='/'>
            <Navbar.Brand>ProShop</Navbar.Brand>
          </LinkContainer>

          <LeftContainer>
            <Nav className="me-auto">
              <LinkContainer to='/cart'>
                <Nav.Link>
                  <i className="fas fa-shopping-cart"></i>Cart
                </Nav.Link>
              </LinkContainer>
              <LinkContainer to='SignIn'>
                <Nav.Link>
                  <i className="fas fa- "> </i>SignIn
                </Nav.Link>
              </LinkContainer>
            </Nav>
          </LeftContainer>
        </Container>
      </Navbar>
    </header>
  );
};

export default Header;

const LeftContainer = styled.div``;
