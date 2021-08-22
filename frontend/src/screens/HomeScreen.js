import React,{useState,useEffect} from "react";
import Products from '../components/Products'
import { Col, Row } from "react-bootstrap";
import axios from "axios";
const HomeScreen = () => {
  const [products, setProducts] = useState([])
  useEffect(() => {
   const fetchProducts=async()=>{
     const{data}=await axios.get("/api/products/")
     setProducts(data)

   }
   fetchProducts()
  }, [])
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
