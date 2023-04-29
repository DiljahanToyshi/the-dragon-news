import React from 'react';
import { Button } from 'react-bootstrap';
import {  FaFacebook, FaGithub, FaGoogle, FaInstagram, FaTwitter } from "react-icons/fa";
import ListGroup from "react-bootstrap/ListGroup";
import Qzone from '../QZone/Qzone';
import bg from '../../../assets/bg.png'

const RightNav = () => {
    return (
      <div>
        <Button className="my-2 px-5" variant="outline-primary">
          <FaGoogle />
          <span className="">Login with Google</span>
        </Button>{" "}
        <Button variant="outline-secondary" className="px-5">
          <FaGithub />
          Login with GIthub
        </Button>{" "}
        <div>
          <h4 className="mt-6">Find us On</h4>
          <ListGroup>
            <ListGroup.Item>
              <FaFacebook />
              Facebook
            </ListGroup.Item>
            <ListGroup.Item>
              <FaTwitter />
              Twiter
            </ListGroup.Item>
            <ListGroup.Item>
              <FaInstagram />
              Instagram
            </ListGroup.Item>
          </ListGroup>
        </div>
        <Qzone></Qzone>
        <div className="position-relative   ">
          <img src={bg} alt="" />
          <div className="text-center text-light position-absolute top-0 start-10  ">
            <h1 className="mt-5 mx-5">Create an Amazing Newspaper</h1>
            <h4 className="mx-5 me-5">
              Discover thousands of options, easy to customize layouts,
              one-click to import demo and much more.
            </h4>
            <Button variant="danger">Learn More</Button>
           
          </div>
        </div>
      </div>
    );
};

export default RightNav;