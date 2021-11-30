import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import {
  Row,
  Col,
  Image,
  Form,
  ListGroup,
  Button,
  Card,
} from "react-bootstrap";
import { addToCart,removeFromCart } from "../actions/cartAction";
const CartScreen = ({ match, location, history }) => {
  const productId = match.params.id;
  console.log(productId);
  const qty = location.search ? Number(location.search.split("=")[1]) : 1;
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart);
  const { cartItems } = cart;
  const checkoutHandler = () => {
    history.push("/login?redirect=shipping")
  };
  useEffect(() => {
    if (productId) {
      dispatch(addToCart(productId, qty));
    }
  }, [dispatch, productId, qty]);
  const removeFromCartHandler = (id) => {
    dispatch(removeFromCart(id))
  };
  return (
    <Box>
      <Row>
        <Col md={8}>
          <h1>Shopping Cart</h1>
          {cartItems.length === 0 ? (
            <Message>
              {" "}
              Your Cart Is Empty <Link to="/">Go Back</Link>
            </Message>
          ) : (
            <ListGroup>
              {cartItems.map((items) => (
                <ListGroup.Item key={items.product}>
                  <Row>
                    <Col md={2}>
                      <Image src={items.image} alt={items.name} fluid rounded />
                    </Col>
                    <Col md={3}>
                      <Link to={`/product/${items.product}`}>{items.name}</Link>
                    </Col>
                    <Col md={2}>${items.price}</Col>
                    <Col md={2}>
                      {" "}
                      <Form.Control
                        as="select"
                        value={items.qty}
                        onChange={(e) =>
                          dispatch(
                            addToCart(items.product, Number(e.target.value))
                          )
                        }
                      >
                        {[...Array(items.countInStock).keys()].map((x) => (
                          <option key={x + 1} value={x + 1}>
                            {x + 1}
                          </option>
                        ))}
                      </Form.Control>
                    </Col>
                    <Col md={3}>
                      <Button
                        TYPE="button"
                        varient="light"
                        onClick={() => removeFromCartHandler(items.product)}
                      >
                        <i className="fas fa-trash"></i>
                      </Button>
                    </Col>
                  </Row>
                </ListGroup.Item>
              ))}
            </ListGroup>
          )}
        </Col>
        <Col md={4}>
          <Card>
            <ListGroup>
              <ListGroup.Item>
                <h3>
                  Subtotal = (
                  {cartItems.reduce((acc, item) => (acc = item.qty), 0)}) items
                </h3>
                <h5>
                  ${cartItems.reduce(
                    (acc, items) => acc + items.qty + items.price,
                    0
                  ).toFixed(2)}
                  
                </h5>
              </ListGroup.Item>
              <ListGroup.Item>
                <Button
                  type="button"
                  onClick={checkoutHandler}
                  className="btn-block"
                  disabled={cartItems.length === 0}
                >
                  Proceed To CheckOut
                </Button>
              </ListGroup.Item>
            </ListGroup>
          </Card>
        </Col>
      </Row>
    </Box>
  );
};

export default CartScreen;
const Message = styled.h2``;
const Box = styled.div`
  margin-top: 40px;
`;
