import React from "react";
import { useDispatch,useSelector } from "react-redux";
import { LinkContainer } from "react-router-bootstrap";
import styled from "styled-components";
import { Navbar, Nav, Container, NavDropdown } from "react-bootstrap";
import {logout} from  '../actions/userAction'; 
const Header = () => {
  const dispatch = useDispatch( )
  const userLogin=useSelector(state=>state.userLogin);
  const {userInfo}=userLogin;
  const logoutHandler=()=>{
  dispatch(logout());  
  }
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
              {userInfo?(<NavDropdown title={userInfo.name} id="username">
                <LinkContainer to='/profile'>
                <NavDropdown.Item>profile</NavDropdown.Item>

                </LinkContainer>
                <NavDropdown.Item onClick={logoutHandler}
                >Logout</NavDropdown.Item>
              </NavDropdown>)
              :<LinkContainer to='/login'>
                <Nav.Link>
                  <i className="fas fa- "> </i>SignIn
                </Nav.Link>
              </LinkContainer>}
            </Nav>
          </LeftContainer>
        </Container>
      </Navbar>
    </header>
  );
};

export default Header;

const LeftContainer = styled.div``;
