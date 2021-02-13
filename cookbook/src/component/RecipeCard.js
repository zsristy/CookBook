import React from "react";
import { Col, Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import chef from "../images/chef.svg";

const hourConvert = (time) => {
  const hour = Math.floor(parseInt(time) / 60);
  const mintue = parseInt(time) - 60 * hour;
  if (hour >= 1) {
    return hour + " Hour " + mintue + " Mintues";
  } else if (hour != 0) {
    return time + " Mintues";
  } else return "Not Available";
};

function RecipeCard({ singleRecipe }) {
  return (
    <Col sm={4}>
      <Card border="success" style={{ borderRadius: 20, overflow: "hidden" }}>
        <Card.Img variant="top" src={singleRecipe.recipe.image} />
        <Card.Body>
          <Card.Title>
            <Link
              style={{ textDecoration: "none" }}
              to={{
                pathname: "/singlerecipie",
                state: {
                  recipe: singleRecipe.recipe,
                  recipeId: singleRecipe.recipeId,
                },
              }}
            >
              {singleRecipe.recipe.label}
            </Link>
          </Card.Title>
          <Card.Text style={{ display: "inline - flex" }}>
            <span
              className="material-icons"
              style={{
                fontSize: "20px",
                verticalAlign: "middle",
                marginRight: "5px",
                top: "-1px",
              }}
            >
              query_builder
            </span>
            <span>
              Making Time: {hourConvert(singleRecipe.recipe.totalTime)}
            </span>
          </Card.Text>
        </Card.Body>
        <Card.Footer>
          <img
            src={chef}
            style={{
              display: "inline-block",
              width: "20px",
              height: "20px",
              overflow: "hidden",
              margin: "10px",
            }}
          />
          {singleRecipe.recipe.source || singleRecipe.recipe.author}
        </Card.Footer>
      </Card>
      {console.log(singleRecipe)}
    </Col>
  );
}

export default RecipeCard;
