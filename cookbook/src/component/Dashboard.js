import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import DashboardHeader from "./DashboardHeader";
import dashboad_back from "../images/dashboad_back.jpg";
import RecipeCard from "./RecipeCard";
import { Container, Row } from "react-bootstrap";

export default function Dashboard() {
  const { currentUser, logout } = useAuth();
  const [Error, setError] = useState("");
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
          zIndex: -1,
          position: "fixed",
          height: "100%",
          width: "100%",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          backgroundImage: "url(" + dashboad_back + ")",
        }}
      >
        <DashboardHeader handleLogout={handleLogout} />
        <div
          style={{
            position: "fixed",
            boxSizing: "border-box",
            width: "100%",
            paddingLeft: "40px",
            paddingRight: "40px",
            display: "block",
          }}
        >
          <div style={{ height: "150px" }}></div>
          <h1
            style={{
              color: "white",
              fontSize: " 40px",
              lineHeight: " 40px",
              textAlign: "left",
              fontWeight: "3",
              fontStyle: "normal",
            }}
          >
            It is even better than
            <br /> an expensive cookery book
          </h1>
          <div style={{ marginTop: 40, position: "relative" }}>
            <form
              style={{
                width: "40%",
                border: "2px solid white",
                borderRadius: "25px",
              }}
            >
              <Row style={{ margin: 0 }}>
                <input
                  type="text"
                  className="col-md-9"
                  placeholder="I want to make..."
                  required
                  style={{
                    paddingLeft: "30px",
                    color: "white",
                    fontWeight: "10px",
                    border: "#ffffff00",
                    margin: 0,
                    boxShadow: "none",
                  }}
                />
                <button
                  type="submit"
                  className="col-md-2"
                  style={{
                    paddingTop: "5px",
                    backgroundColor: "#ffffff00",
                    border: "0px",
                  }}
                >
                  <i
                    className="material-icons"
                    style={{ color: "white", fontSize: "30px" }}
                  >
                    search
                  </i>
                </button>
              </Row>
            </form>
          </div>
        </div>
      </div>
      <div
        style={{
          top: "550px",
          position: "absolute",
          backgroundColor: "white",
          width: "100%",
        }}
      >
        <div>
          <h3
            style={{
              textAlign: "center",
              marginTop: 50,
              marginBottom: 50,
              fontSize: 50,
              fontWeight: 3,
            }}
          >
            Recipes By Search
          </h3>

          <Container>
            <Row>
              <RecipeCard />
              <RecipeCard />
              <RecipeCard />
              <RecipeCard />
              <RecipeCard />
              <RecipeCard />
              <RecipeCard />
            </Row>
          </Container>
        </div>
      </div>
    </div>
  );
}
