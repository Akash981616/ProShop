import React from "react";
import { Card } from "react-bootstrap";
import {Link} from "react-router-dom"
import Rating from './Review'
const products = ({ products }) => {
  return (
    <>
      <Card className="my-3 p-3 rounded">
        <Link to={`/product/${products._id}`}>
          <Card.Img src={products.image} varient="top" />
        </Link>
        <Card.Body>
          <Link to={`/product/${products._id}`}>
            <Card.Title as="div">
              <strong>{products.name}</strong>
            </Card.Title>
          </Link>
          <Card.Text as="div">
            <Rating value={products.rating}
              text={`${products.numReviews} reviewes`}
              color="#f8e825"
            />
          </Card.Text>
          <Card.Text as="h3">${products.price}</Card.Text>
        </Card.Body>
      </Card>
    </>
  );
};

export default products;
