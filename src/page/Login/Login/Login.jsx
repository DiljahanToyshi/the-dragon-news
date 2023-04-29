import React from 'react';
import { useContext } from 'react';
import { Button, Container, Form, FormText } from 'react-bootstrap';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../providers/AuthProvider';

const Login = () => {
  const { signIn } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();
  console.log('login page location', location);
      const from = location.state?.from?.pathname || "/category/0";


  const handleLogin = event =>{
event.preventDefault();
const form = event.target;
const email = form.email.value;
const password = form.password.value;
form.reset();
console.log(email,password);

signIn(email,password)
.then(result =>{
const loggedUser = result.user;
console.log(loggedUser);
navigate(from,{replace:true})
})
.catch(error =>{
  console.log(error.message)
})
  }
    return (
      <Container className="mx-auto w-25 mt-5">
        <h3>Please Login</h3>
        <Form onSubmit={handleLogin}>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              type="email"
              name="email"
              placeholder="Enter email"
              required
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              name="password"
              placeholder="Password"
              required
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicCheckbox">
            <Form.Check type="checkbox" label="Check me out" />
          </Form.Group>
          <Button variant="primary" type="submit">
            Submit
          </Button>{" "}
          <br />
          <Form.Text className="text-succes">
            Dont’t Have An Account ? <Link to="/register">Register</Link>
          </Form.Text>
        </Form>
      </Container>
    );
};

export default Login;