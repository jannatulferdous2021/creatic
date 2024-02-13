import React, { useState } from "react";
import "./Navigation.css";
import {
  Container,
  Nav,
  Navbar,
} from "react-bootstrap";
import { Link } from "react-router-dom";
import Cart from './../../Components/Cart/Cart';

const Navigation = () => {
  const [showCart, setShowCart] = useState(false)

  return (
    <div>
      <Navbar expand="lg" className=" nav">
        <Container>
          <Navbar.Brand href="#" className="logo">
            Creatic
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="ms-auto my-2 my-lg-0"
              style={{ maxHeight: "100px" }}
              navbarScroll
            >
              <div className="d-flex mt-2">
                <Link to="/" className="link">
                  Home
                </Link>
                <Link to="/shop" className="link">
                  Shop
                </Link>
                <Link to="/contact" className="link">
                  Contact
                </Link>
                  <button onClick={() => setShowCart(!showCart)} className="shopbtn">
                    <span className="material-symbols-outlined">
                      shopping_cart
                    </span>
                  </button>
                  {showCart && <Cart />}
                </div>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Navigation;
