import React, { useRef, useState } from "react";
import { Button, Card, Form, Alert, Container } from "react-bootstrap";
import { useAuth } from "../context/AuthContext";
import { Link, useHistory } from "react-router-dom";

const Login = () => {
  const emailRef = useRef();
  const passRef = useRef();
   const { login } = useAuth();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const history = useHistory();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setLoading(true);
      await login(emailRef.current.value, passRef.current.value);
      history.push("/");
    } catch (error) {
      setError(error);
    }
    setLoading(false);
  };
  return (
    <Container
      className="d-flex align-items-center justify-content-center"
      style={{ minHeight: "100vh" }}
    >
      <div className="w-100" style={{ maxWidth: "400px" }}>
        <Card
          style={{
            backgroundColor: " rgba(255,255,255, 0.6)",
            color: "black",
          }}
        >
          <Card.Body>
            <h2 className="text-center mb-4">Log In</h2>
            {error ? (
              <Alert variant="danger">
                {JSON.stringify(error).replace(/\"/g, "")}
              </Alert>
            ) : (
              ""
            )}

            <Form onSubmit={handleSubmit}>
              <Form.Group id="email">
                <Form.Label>Email</Form.Label>
                <Form.Control ref={emailRef} type="email" required />
              </Form.Group>
              <Form.Group id="password">
                <Form.Label>Password</Form.Label>
                <Form.Control ref={passRef} type="password" required />
              </Form.Group>
              <Button disabled={loading} className="w-100" type="submit">
                Log In
              </Button>
            </Form>
          </Card.Body>
        </Card>
        <div className="w-100 text-center mt-2" style={{ color: "white" }}>
          Don't Have an Account?<Link to="/signup"> Create New Account!</Link>
        </div>
      </div>
    </Container>
  );
};

export default Login;
