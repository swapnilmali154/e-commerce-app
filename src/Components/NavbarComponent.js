import React from "react";
import { Navbar, Nav } from "rsuite";
import CogIcon from "@rsuite/icons/legacy/Cog";
import StorageIcon from '@rsuite/icons/Storage';
import { Link } from "react-router-dom";

const NavbarComponent = () => {
  return (
    <Navbar  appearance="inverse">
      <Navbar.Brand href="#">E-Commerce App</Navbar.Brand>
      <Nav pullRight>
        <Nav.Item><Link to="/" style={{color: 'white'}}>All Products</Link></Nav.Item>
        <Nav.Item><Link to="/products" style={{color: 'white'}}>Products</Link></Nav.Item>
        <Nav.Item><Link to="/checkout" style={{color: 'white'}}>Checkout</Link></Nav.Item>
        <Nav.Item icon={<StorageIcon />}>Cart</Nav.Item>
        <Nav.Menu icon={<CogIcon />} title="User">
          <Nav.Item>Profile</Nav.Item>
          <Nav.Item>Logout</Nav.Item>
        </Nav.Menu>
      </Nav>
    </Navbar>
  );
};

export default NavbarComponent;
