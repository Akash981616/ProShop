import React from "react";
import Products from "../components/Products"
import { Col, Row } from "react-bootstrap";
import products from "../products"
const HomeScreen = () => {
  return (
    <>
      <h1>Latest products</h1>
      <Row>
        {products.map((products) => {
          return (
            <Col key={products._id} sm={12} md={6} lg={4} xl={3}>
              <Products products={products} />
            </Col>
          );
        })}
      </Row>
    </>
  );
};

export default HomeScreen;
