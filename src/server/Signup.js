import React, { useRef, useState } from "react";
import { Form, Button, Card, Alert } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { Container } from 'react-bootstrap';
import { useAuth } from "./firebase";

export default function Signup({SetCurrentuserid}) {

    const emailRef = useRef();
    const passwordRef = useRef();
    const passwordConfirmRef = useRef();
    const FirstNameRef = useRef();
    const LastNameRef = useRef();
    const { signup } = useAuth();
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();



    async function handleSubmit(e) {
        e.preventDefault();

        if (passwordRef.current.value !== passwordConfirmRef.current.value) {
            return setError("Password do not match");
        }

        try {
            setError("");
            setLoading(true);
            await signup(emailRef.current.value, passwordRef.current.value);
            // await createUserDocument(user);
            navigate("/");
        } catch {
            setError("Failed to creat an account");
        }

        setLoading(false);
    }

    return (
      <Container className='d-flex align-items-center justify-content-center' style={{minHeight: "100vh"}}>
        <div className='w-100' style={{maxWidth : "400px"}}>
          <Card>
            <Card.Body>
              <h2 className="text-center mb-4">Sign Up</h2>
              {error && <Alert variant="danger">{error}</Alert>}
              <Form onSubmit={handleSubmit}>
                <Form.Group id="FirstName">
                  <Form.Label>FirstName</Form.Label>
                  <Form.Control type="FirstName" ref={FirstNameRef} required />
                </Form.Group>
                <Form.Group id="LastName">
                  <Form.Label>LastName</Form.Label>
                  <Form.Control type="LastName" ref={LastNameRef} required />
                </Form.Group>
                <Form.Group id="email">
                  <Form.Label>Email</Form.Label>
                  <Form.Control type="email" ref={emailRef} required />
                </Form.Group>
                <Form.Group id="password">
                  <Form.Label>Password</Form.Label>
                  <Form.Control type="password" ref={passwordRef} required />
                </Form.Group>
                <Form.Group id="password-confirm">
                  <Form.Label>Password Confirmation</Form.Label>
                  <Form.Control type="password" ref={passwordConfirmRef} required />
                </Form.Group>
                <Button disabled={loading} className="w-100" type="submit">
                  Sign Up
                </Button>
              </Form>
            </Card.Body>
          </Card>
          <div className="w-100 text-center mt-2">
            Already have an account? <Link to="/login">Log in</Link>
          </div>
        </div>
      </Container>
    );
}