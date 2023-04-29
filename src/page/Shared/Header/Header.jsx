import React from 'react';
import logo from '../../../assets/logo.png';
import moment from "moment";
import { Button, Container} from 'react-bootstrap';
import Marquee from "react-fast-marquee";
import { useContext } from 'react';
import { AuthContext } from '../../../providers/AuthProvider';

const Header = () => {
    return (
      <Container>
        <div className="text-center m-4">
          <img src={logo} alt="" />
          <p className="text-secondary">
            <small>Journalism Without Fear or Favour</small>
          </p>
          <p className="text-secondary">
            <small>{moment().format("dddd, MMMM D YYYY")}</small>
          </p>
        </div>
        <div className="d-flex">
          <Button variant="danger">Latest</Button>
          <Marquee speed={30}>
            I can be a React component, multiple React components, or just some
            text.... Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Porro ipsum nesciunt ratione itaque recusandae consequatur eum dicta
            aliquid et nulla!
          </Marquee>
        </div>
       
      </Container>
    );
};

export default Header;