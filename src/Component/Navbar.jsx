import Container from "react-bootstrap/Container";
import React, { useEffect, useState } from "react";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import {
  Dropdown,
  DropdownButton,
  Form,
  InputGroup,
  Button,
  Col,
  NavLink,
} from "react-bootstrap";
import { BiUserCircle } from "react-icons/bi";
import { ButtonGroup } from "react-bootstrap";
import { Link } from "react-router-dom";
import { auth, onAuthStateChanged } from "./LoginSignup/FireBase";

function SnapNavbar() {
  const [login, setLogin] = useState("Login");
  const [login1, setLogin1] = useState("login");
  const [userName, setUserName] = useState("");
  useEffect(() => {
    auth.onAuthStateChanged((usrName) => {
       
      if (usrName) {
        setUserName("Already Login");
        setLogin("Log Out")
        setLogin1("/logout")      
      } else {
        setUserName("Sign Up")
        setLogin("Log In")
        setLogin1("/loginpage")
      }
    });
  }, []);




  const variant = "Danger";
  return (
    <Navbar bg="danger" expand="lg">
      <Container>
        <img src="https://i3.sdlcdn.com/img/snapdeal/darwin/logo/sdLatestLogo.svg" />
        <Navbar.Toggle aria-controls="basic-navbar-nav" style={{backgroundColor:"white"}}/>
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
                aria-label="Recipient's username"
                aria-describedby="basic-addon2"
                type="text"
              />
              <Button variant="dark">Search Buses</Button>
            </InputGroup>
          </Form.Group>

          <Link to="/cart"  className="nav-link"  style={{margin:"auto 50px", color:"white"}}>
              Cart
              <i className="fas fa-shopping-cart"  style={{ fontSize:"20px", marginLeft:"5px"}}></i>
            </Link>

          <Nav className="mb-auto">
            <DropdownButton
              as={ButtonGroup}
              key={variant}
              id={`dropdown-variants-${variant}`}
              variant={variant.toLowerCase()}
              title={<BiUserCircle style={{ fontSize: "35px" }} />}
            >
             <Dropdown.Item eventKey="1"><Link to={login1}>{login} </Link> </Dropdown.Item>
             <Dropdown.Item eventKey="2"><Link to="/signuppage">{userName}</Link></Dropdown.Item>
            </DropdownButton>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default SnapNavbar;
