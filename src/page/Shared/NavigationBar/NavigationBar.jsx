import React from 'react';
import { Button, Container, Nav,  Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import { FaUserCircle } from "react-icons/fa";
import { useContext } from "react";
import { AuthContext } from "../../../providers/AuthProvider";
const NavigationBar = () => {
      const { user,logOut } = useContext(AuthContext);
  
      const handleLogOUt =() =>{
        logOut()
          .then()
          .catch((error) => {
            console.log(error);
          });
      }

    return (
      <Container>
        <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
          <Container>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav className="mx-auto">
                <div className=" text-decoration-none">
                  {" "}
                  <Link to="/category/0">Home</Link>
                  <Link className='mx-3'>About</Link>
                  <Link>Career</Link>
                </div>
              </Nav>
              <Nav>
                {user && (
                  <FaUserCircle style={{ fontSize: "2rem" }}></FaUserCircle>
                )}
                {user ? (
                  <Button onClick={handleLogOUt} className="px-6" variant="dark">
                    Logout
                  </Button>
                ) : (
                  <Link to="/login">
                    <Button className="px-6" variant="dark">
                      Login
                    </Button>
                  </Link>
                )}
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </Container>
    );
};

export default NavigationBar;