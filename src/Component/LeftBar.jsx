import React, { useState } from 'react';
import { NavLink} from 'react-router-dom';
import { Nav, Navbar, NavItem } from 'react-bootstrap';
import Logo from "../Images/pngwing.com.png"


const LeftBar = () => {
  
  
  return (<>
    <Navbar bg="light" expand="lg" className="flex-column " style={{height:"330px"}} >
      <Navbar.Brand href="/">
        <img src={Logo} alt="Icon" className="icon-image" style={{width:"80px"}}/>
      </Navbar.Brand>
      {/* <Navbar.Toggle aria-controls="basic-navbar-nav" /> */}
      {/* <Navbar.Collapse id="basic-navbar-nav"> */}
        <Nav className="flex-column">
          <NavItem>
            <NavLink to="/" className="nav-link" activeClassName="active">
              Home
            </NavLink>
          </NavItem>
          <NavItem >
            <NavLink to="/productlist" value="products" className="nav-link" activeClassName="active">
              Products
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink  to="/women" value="women's clothing"  className="nav-link" activeClassName="active">
             Women's Fashion
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink to="/men" value="men's clothing" className="nav-link" activeClassName="active">
             Men's Fashion
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink to="/elecronic" value="electronics"   className="nav-link" activeClassName="active">
             Electronics
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink to="/jewelery" value="Jewelery"   className="nav-link" activeClassName="active">
             Jewelery
            </NavLink>
          </NavItem>
        </Nav>
      {/* </Navbar.Collapse> */}
    </Navbar>
    </>
  );
};

export default LeftBar;
