import React from "react";
import {Col, Card } from "react-bootstrap";
import drinks from "../images/foodiesfeed.com_pouring-honey-on-pancakes-with-walnuts.jpg";

function RecipeCard() {
  return (
    <Col sm={4}>
      <Card border="success" style={{borderRadius:20,overflow:'hidden'}}>
        <Card.Img variant="top" src={drinks} />
        <Card.Body>
          <Card.Title>Card title</Card.Title>
          <Card.Text>
            This is a wider card with supporting text below as a natural lead-in
            to additional content. This content is a little bit longer.
          </Card.Text>
        </Card.Body>
        <Card.Footer>
          <small className="text-muted">Last updated 3 mins ago</small>
        </Card.Footer>
      </Card>
    </Col>
  );
}

export default RecipeCard;
