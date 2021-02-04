import React, { useRef, useState } from "react";
import { Button, Card, Form, Alert, Container } from "react-bootstrap";
import { useHistory } from "react-router-dom";
import backgroundimage from "../images/fresh-ingredients-cooking-pasta-wooden-background.jpg";

export default function Signup() {
  const nameRef = useRef();
  const emailRef = useRef();
  const passRef = useRef();
  const confirmPassRef = useRef();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const history = useHistory();

  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <div
      className="backimage"
      style={{
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        backgroundImage: "url(" + backgroundimage + ")",
      }}
    >
      <Container
        className="d-flex align-items-center justify-content-center"
        style={{ minHeight: "100vh" }}
      >
        <div className="w-100" style={{ maxWidth: "400px" }}>
          <Card
            style={{
              backgroundColor: " rgba(222,184,135, 0.8)",
              color: "black",
            }}
          >
            <Card.Body>
              <h2 className="text-center mb-4">Sign Up</h2>
              {error ? (
                <Alert variant="danger">
                  {JSON.stringify(error).replace(/\"/g, "")}
                </Alert>
              ) : (
                ""
              )}

              <Form onSubmit={handleSubmit}>
                <Form.Group id="name">
                  <Form.Label>Name</Form.Label>
                  <Form.Control ref={nameRef} type="text" required />
                </Form.Group>
                <Form.Group id="email">
                  <Form.Label>Email</Form.Label>
                  <Form.Control ref={emailRef} type="email" required />
                </Form.Group>
                <Form.Group id="password">
                  <Form.Label>Password</Form.Label>
                  <Form.Control ref={passRef} type="password" required />
                </Form.Group>
                <Form.Group id="confirm-password">
                  <Form.Label>Confirm Password</Form.Label>
                  <Form.Control ref={confirmPassRef} type="password" required />
                </Form.Group>
                <Button disabled={loading} className="w-100" type="submit">
                  Sign Up
                </Button>
              </Form>
            </Card.Body>
          </Card>
        </div>
      </Container>
    </div>
  );
}
