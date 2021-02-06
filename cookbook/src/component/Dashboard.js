import React, { useState } from "react";
import { Card, Button, Container } from "react-bootstrap";
import { Link, useHistory } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import DashboardHeader from "./DashboardHeader";
import dashboad_back from "../images/dashboad_back.jpg";

export default function Dashboard() {
  const { currentUser, logout } = useAuth();
  const [Error,setError]=useState({});
  const history = useHistory();
  const handleLogout = async () => {
    try {
      await logout().then(() => {
        history.push("/home");
      });
    } catch (error) {
      setError(error);
    }
  };
  return (
    <div>
      <div
        style={{
          backgroundSize: "cover",
          position: 'fixed',
          height:'100%',
          width:'100%',
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          backgroundImage: "url(" + dashboad_back + ")",
        }}
      >
        <DashboardHeader />
        <Button variant="Link" onClick={handleLogout}>
          Log out
        </Button>
      </div>
    </div>
  );
}
