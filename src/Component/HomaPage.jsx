import Container from "react-bootstrap/Container";
import React, { useState } from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Banner from "./Banner";
// import Product from './Product/Product';
import GetProduct from "./Product/GetProduct";
import LeftBar from "./LeftBar";
import HomeImg from "../Images/HomeImage.jpg"
import ProfileCard from "./ProfileCard";


function HomePage() {

  return (
    <>
    <Container className="mt-3 ">
      <Row className="">
        <Col className="d-none d-sm-block" >
          <LeftBar />
        </Col>
        <Col xs={7}>
          <Banner />
        </Col>
        <Col className="d-none d-sm-block" ><ProfileCard/></Col>
      </Row> 
      <Row>
        <Col></Col>
        <Col xs={10}>
          <GetProduct />
        </Col>
        <Col></Col>
      </Row>  
    </Container>
    <img src={HomeImg} alt="hi" className="w-100" style={{height:"70vh"}}/>
    </>
  );
}

export default HomePage;
