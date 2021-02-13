import React, { useState, useEffect, useRef } from "react";
import { Link, useHistory } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import DashboardHeader from "./DashboardHeader";
import dashboad_back from "../images/dashboad_back.jpg";
import RecipeCard from "./RecipeCard";
import { Container, Row } from "react-bootstrap";
import getRecipe from "../firebase/getRecipe";
import SimpleSearch from "./SimpleSearch";
import { Pagination, Grid } from "semantic-ui-react";
import { Button, Icon } from "semantic-ui-react";

export default function Dashboard() {
  const { logout } = useAuth();
  const [Error, setError] = useState("");
  const history = useHistory();
  const [activePage, setActivePage] = useState();
  const [totalPage, setTotalPage] = useState();
  const [searchTitle, setSearchTitle] = useState("");
  const [recipeList, setRecipeList] = useState();
  const [activeRecipe, setActiveRecipe] = useState();

  const handleChange = (e) => {
    setSearchTitle(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await getRecipe(searchTitle, setRecipeList);
    if (recipeList !== undefined) {
      setActivePage(1);
      setTotalPage(Math.ceil(recipeList.length / 6));
      setActiveRecipe(pagination(recipeList, 1, 6));
    }
  };

  const handlePagechange = (e, { activePage }) => {
    setActivePage(activePage);
    setActiveRecipe(pagination(recipeList, activePage, 6));
  };

  const pagination = (array, index, size) => {
    // transform values
    index = Math.abs(parseInt(index));
    index = index > 0 ? index - 1 : index;
    size = parseInt(size);
    size = size < 1 ? 1 : size;
    return [
      ...array.filter((value, n) => {
        return n >= index * size && n < (index + 1) * size;
      }),
    ];
  };

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
          height: "667px",
          width: "100%",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          backgroundImage: "url(" + dashboad_back + ")",
        }}
      >
        <DashboardHeader handleLogout={handleLogout} />
        <div
          style={{
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
          <SimpleSearch
            handleChange={handleChange}
            handleSubmit={handleSubmit}
          />
        </div>
        <div style={{ float: "left", padding: 10, marginLeft: 350 }}>
          <Link to="/search">
            <Button
              icon
              labelPosition="right"
              color="olive"
              style={{ border: "2px solid white", borderRadius: "25px" }}
            >
              Advance Search
              <Icon name="right arrow" />
            </Button>
          </Link>
        </div>
      </div>
      {Array.isArray(activeRecipe) ? (
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
                {activeRecipe.map((recipe, i) => {
                  return <RecipeCard singleRecipe={recipe} key={i} />;
                })}
              </Row>
            </Container>
            <Grid>
              <Grid.Column textAlign="center">
                <Pagination
                  style={{ textAlign: "center" }}
                  activePage={activePage}
                  onPageChange={handlePagechange}
                  totalPages={totalPage}
                />
              </Grid.Column>
            </Grid>
          </div>
        </div>
      ) : (
        ""
      )}
    </div>
  );
}
