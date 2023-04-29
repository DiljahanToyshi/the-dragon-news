import React, { useContext, useState } from 'react';

import { Button, Container, Form, FormText } from "react-bootstrap";
import { Link } from "react-router-dom";
import { AuthContext } from '../../../providers/AuthProvider';

const Register = () => {
  const {createUser} = useContext(AuthContext);
  const [accept,setAccept] = useState(false);

  const handleRegister = event =>{
    event.preventDefault();
    const form = event.target;
const name = form.name.value ;
const email = form.email.value ;
const photo = form.photo.value ;
const password = form.password.value ;
form.reset();
// console.log(name,email,photo,password);
createUser(email,password)
.then(result=>{
  
  const createdUser = result.user
  console.log(createdUser);
})
.catch(error =>{
  console.log(error)
})
 }

 const handleAccepted =event =>{
  setAccept(event.target.checked);
 }
    return (
      <Container className="mx-auto w-25 mt-5">
        <h2>Register your account</h2>
        <Form onSubmit={handleRegister}>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Your Name</Form.Label>
            <Form.Control
              type="text"
              name="name"
              placeholder="your name"
              required
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Photo URL</Form.Label>
            <Form.Control
              type="text"
              name="photo"
              placeholder="Photo URL"
              required
            />
          </Form.Group>
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
            <Form.Check onClick={handleAccepted}
              type="checkbox"
              name="accept"
              label={
                <>
                  Accept <Link to='/terms'>Term & Conditions</Link>
                </>
              }
            />
          </Form.Group>
          <Button disabled={!accept} variant="primary" type="submit">
            Register
          </Button>{" "}
          <br />
          <Form.Text className="text-succes">
            Already Have An Account ? <Link to="/login">Login</Link>
          </Form.Text>
        </Form>
      </Container>
    );
};

export default Register;