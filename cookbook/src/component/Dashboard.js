import React,{useState} from "react";
import { Card, Button, Container } from "react-bootstrap";
import { Link, useHistory } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

export default function Dashboard() {
  const { currentUser, logout } = useAuth();
  const history = useHistory();
  const handleLogout = async () => {
    try {
      await logout().then(() => {
        history.push("/login");
      });
    } catch (error) {
      setError(error);
    }
  };
  return (
    <div>
      <Button variant="Link" onClick={handleLogout}>
        Log out
      </Button>
    </div>
  );
}
