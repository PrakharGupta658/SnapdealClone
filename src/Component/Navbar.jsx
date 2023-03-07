import Container from "react-bootstrap/Container";
import React, { useEffect, useRef, useState } from "react";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import {
  Dropdown,
  DropdownButton,
  Form,
  InputGroup,
  Button,
  Col,
} from "react-bootstrap";

import { BiUserCircle } from "react-icons/bi";
import { ButtonGroup } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import { auth, onAuthStateChanged } from "./LoginSignup/FireBase";
import { useCart } from "react-use-cart";


function SnapNavbar({SerchVal}) {
  const [login, setLogin] = useState("Login");
  const [login1, setLogin1] = useState("login");
  const [userName, setUserName] = useState("");
  const { totalUniqueItems } = useCart();
  const serchvalue = useRef();
  const navigate = useNavigate();
  
  useEffect(() => {
    auth.onAuthStateChanged((usrName) => {
      if (usrName) {
        setUserName("Already Login");
        setLogin("Log Out");
        setLogin1("/logout");
      } else {
        setUserName("Sign Up");
        setLogin("Log In");
        setLogin1("/loginpage");
      }
    });
  }, []);
  

   let SerchValueIs;
  const HandelSerchValue =()=>{
     SerchValueIs =  serchvalue.current.value
     navigate("/productlist")
     SerchVal(SerchValueIs);
   
  }


  const variant = "Danger";
  return (
    <Navbar bg="danger" expand="lg">
      <Container>
        <img src="https://i3.sdlcdn.com/img/snapdeal/darwin/logo/sdLatestLogo.svg" />
        <Navbar.Toggle
          aria-controls="basic-navbar-nav"
          style={{ backgroundColor: "white" }}
        />
        <Navbar.Collapse id="basic-navbar-nav">
          <Form.Group
            as={Col}
            md="6"
            controlId="validationCustomUsername"
            style={{ margin: "7px auto" }}
          >
            <InputGroup className="mb-3">
              <Form.Control
                placeholder="Search Products & Brands"
                 autoComplete="off"
                type="text"
                onChange={HandelSerchValue}

                ref={serchvalue}
              />
              <Button variant="dark">Search</Button>
            </InputGroup>
          </Form.Group>

          <Link
            to="/cart"
            className="nav-link"
            style={{ margin: "auto 50px", color: "white" }}
          >
            Cart
            <i
              className="fas fa-shopping-cart"
              style={{ fontSize: "20px", marginLeft: "5px" }}
            >
            </i>
            <span style={{border:"1px solid white" , borderRadius:"50%" , fontSize:"20px",marginLeft:"5px", }}>{totalUniqueItems}</span>
            
          </Link>

          <Nav className="mb-auto">
            <DropdownButton
              as={ButtonGroup}
              key={variant}
              id={`dropdown-variants-${variant}`}
              variant={variant.toLowerCase()}
              title={<BiUserCircle style={{ fontSize: "35px" }} />}
            >
              <Dropdown.Item eventKey="1">
                <Link to={login1}>{login} </Link>{" "}
              </Dropdown.Item>
              <Dropdown.Item eventKey="2">
                <Link to="/signuppage">{userName}</Link>
              </Dropdown.Item>
            </DropdownButton>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default SnapNavbar;
