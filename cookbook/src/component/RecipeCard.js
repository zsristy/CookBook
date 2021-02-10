import React from "react";
import { Col, Card } from "react-bootstrap";

function RecipeCard({ singleRecipe }) {
  return (
    <Col sm={4}>
      <Card border="success" style={{ borderRadius: 20, overflow: "hidden" }}>
        <Card.Img variant="top" src={singleRecipe.recipe.image} />
        <Card.Body>
          <Card.Title>{singleRecipe.recipe.label}</Card.Title>
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
