import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Footer from "./components/Footer";
import Header from "./components/Header";
import { Container } from "react-bootstrap";
import HomeScreen from "./screens/HomeScreen";
import ProductScreen from "./screens/ProductScreen";
import CartScreen from "./screens/CartScreen";
import LogInScreen from "./screens/LogInScreen";
import RegisterScreen from "./screens/RegisterForm";

const App = () => {
  return (
    <>
      <Router>
        <Header />
        <main>
          <Container>
          <Route path="/" component={HomeScreen} exact/>
            <Route path="/product/:id" component={ProductScreen} exact />
            <Route path="/cart/:id?" component={CartScreen} exact />
            <Route path="/login/" component={LogInScreen}/>
            <Route path="/register" component={RegisterScreen} exact />
            
          </Container>
        </main>
        <Footer />
      </Router>
    </>
  );
};

export default App;
