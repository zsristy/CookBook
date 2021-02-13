import React from "react";
import { Col, Card } from "react-bootstrap";
import { Image, Reveal } from 'semantic-ui-react'
import { Link } from "react-router-dom";
import chef from "../images/chef.svg";
import {Popup } from 'semantic-ui-react'

const hourConvert = (time) => {
  const hour = Math.floor(parseInt(time) / 60);
  const mintue = parseInt(time) - 60 * hour;
  if (hour >= 1) {
    return hour + " Hour " + mintue + " Mintues";
  } else if (hour != 0) {
    return time + " Mintues";
  } else return "Not Available";
};

const style = {
    borderRadius: 0,
    opacity: 0.7,
    padding: '2em',
  }

function RecipeCard({ singleRecipe }) {
  return (
    <Col sm={4}>
      <Card border="success" style={{borderRadius:0, overflow: "hidden" }}>
      <Popup
        trigger={<Card.Img variant="top" src={singleRecipe.recipe.image}/>}
        content='To see the whole recipe sign up now'
        position='bottom center'
        style={style}
        inverted
        />
        <Card.Body>
          <Card.Title>
{singleRecipe.recipe.label}</Card.Title> 
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
