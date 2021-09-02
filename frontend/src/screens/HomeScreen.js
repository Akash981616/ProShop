import React,{useEffect} from "react";

import {useDispatch,useSelector} from "react-redux"
import Products from '../components/Products'
import { Col, Row } from "react-bootstrap";
import Message from "../components/Message";
import Loader from "../components/Loader";
import listProducts from "../actions/productAction";
import styled from "styled-components";
const HomeScreen = () => {
 const dispatch=useDispatch()
 const productList= useSelector(state =>state.productList)
 const{loading,error,products}=productList
  useEffect(() => {
   dispatch(listProducts())

   }
     
  , [dispatch])
  
  return (
    <>
      <Heading>Latest Products</Heading>{loading?<Loader/> :error? <Message varient="danger"/> :<Row>
        {products.map((products) => {
          return (
            <Col key={products._id} sm={12} md={6} lg={4} xl={3}>
              <Products products={products} />
            </Col>
          );
        })}
      </Row>}
      
    </>
  );
};

export default HomeScreen;
const Heading=styled.h1`
margin-top:45px`