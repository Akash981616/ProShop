import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import Message from "../components/Message";
import Loader from "../components/Loader";
import { useSelector, useDispatch } from "react-redux";
import { Button, Row, Col, Form } from "react-bootstrap";
import { login } from "../actions/userAction";

const LogInScreen = ({ location, history }) => {
  const dispatch = useDispatch();
  const userLogin = useSelector((state) => state.userLogin);
  const { loading, error, userInfo } = userLogin;

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const redirect = location.search ? location.search.split("=")[1] : "/";
  useEffect(() => {
    if (userInfo) {
      history.push(redirect);
    }
  }, [history, userInfo, redirect]);
  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(login(email, password));
  };
  return (
    <FormContainer>
      <h1>Sign In</h1>
      {error && <Message varient="danger">{error}</Message>}
      {loading && <Loader />}
      <Row className="justify-content-md-center">
        <Col xs={12} md={6}>
          <Form onSubmit={submitHandler}>
            <Form.Group className="mb-3" controlId="email">
              <Form.Label>Email address</Form.Label>
              <Form.Control type="email" placeholder="Enter email" onChange={(e)=>setEmail(e.target.value)}/>
              <Form.Text className="text-muted">
                We'll never share your email with anyone else.
              </Form.Text>
            </Form.Group>
            <Form.Group className="mb-3" controlId="password">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" placeholder="Password" onChange={(e)=>setPassword(e.target.value)} />
            </Form.Group>
           

            <ButtonContainer>
              <Button varient="primary" type="submit">
                Log In
              </Button>
            </ButtonContainer>
          </Form>
        </Col>
        <Row className="py-3">
          <Col>
            New Costumer?
            <Link to="/register">
              Register
            </Link>
          </Col>
        </Row>
      </Row>
    </FormContainer>
  );
};

export default LogInScreen;
const FormContainer = styled.div``;
const ButtonContainer = styled.div`
  margin-top: 20px;
`;
