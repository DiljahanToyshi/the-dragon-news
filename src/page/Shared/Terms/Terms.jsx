import React from 'react';
import { Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Terms = () => {
    return (
      <>
        <Container>
          {" "}
          <h2>Terms and Condition</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero
            dolor officiis sit corporis totam?
          </p>
          <p>
            Go Back To <Link to="/register">Register</Link>
          </p>
        </Container>
      </>
    );
};

export default Terms;