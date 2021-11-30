import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import Message from "../components/Message";
import Loader from "../components/Loader";
import { useSelector, useDispatch } from "react-redux";
import { Button, Row, Col, Form } from "react-bootstrap";
import { register } from "../actions/userAction";

const RegisterScreen = ({ location, history }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [message, setMessage] = useState("Passwords do not match");
  
  const dispatch = useDispatch();
  const redirect = location.search ? location.search.split("=")[1] : "/";
  const userRegister = useSelector((state) => state.userRegister);
  const { loading, error, userInfo } = userRegister;
  useEffect(() => {
    if (userInfo) {
      history.push(redirect);
    }
  }, [history, userInfo, redirect]);
  const submitHandler = (e) => {
    e.preventDefault();
    if(password!==confirmPassword){
        setMessage("Passwords do not match");
        alertBox();
    }
  };
  const alertBox=()=>{
      window.alert(message);
  }
  return (
    <FormContainer>
      <h1>Sign UP</h1>
      {error && <Message varient="danger">{setMessage("Passwords do not match")}</Message>}
      {loading && <Loader />}
      <Row className="justify-content-md-center">
        <Col xs={12} md={6}>
          <Form onSubmia={submitHandler}>
            <Form.Group className="mb-3" controlId="name">
              <Form.Label></Form.Label>
              <Form.Control
                type="name"
                placeholder="Enter name"
                value={name}
                onChange={(e) => setName(e.target.valu e)}
              />
              <Form.Text className="text-muted">
                We'll never share your email with anyone else.
              </Form.Text>
            </Form.Group>
            <Form.Group className="mb-3" controlId="email">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                type="email"
                value={email}
                placeholder="Enter email"
                onChange={(e) => setEmail(e.target.value)}
              />
              <Form.Text className="text-muted">
                We'll never share your email with anyone else.
              </Form.Text>
            </Form.Group>
            <Form.Group className="mb-3" controlId="password">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Password"
                onChange={(e) => setPassword(e.target.value)}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="confirmPassword">
              <Form.Label>Confirm Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="ConfirmPassword"
                onChange={(e) => setConfirmPassword(e.target.value)}
              />
            </Form.Group>

            <ButtonContainer>
              <Button varient="primary" type="submit">
                Register
              </Button>
            </ButtonContainer>
          </Form>
        </Col>
        <Row className="py-3">
          <Col>
            Have An Account?
            <Link to={redirect ? `/register${redirect}`:"/"}>login
              LogIn
            </Link>
          </Col>
        </Row>
      </Row>
    </FormContainer>
  );
};

export default RegisterScreen;
const FormContainer = styled.div``;
const ButtonContainer = styled.div`
  margin-top: 20px;
`;
