import React from "react";
import { Card } from "react-bootstrap";

const products = ({ products }) => {
  return (
    <>
      <Card className="my-3 p-3 rounded">
        <a href={`/product/${products._id}`}>
          <Card.Img src={products.image} varient="top" />
        </a>
      </Card>
    </>
  );
};

export default products;
