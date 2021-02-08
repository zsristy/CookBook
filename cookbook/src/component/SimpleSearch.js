import React from "react";
import { Row } from "react-bootstrap";

function SimpleSearch({ handleChange, handleSubmit }) {
  return (
    <div style={{ marginTop: 40, position: "relative" }}>
      <form
        style={{
          width: "40%",
          border: "2px solid white",
          borderRadius: "25px",
        }}
        onSubmit={handleSubmit}
      >
        <Row style={{ margin: 0 }}>
          <input
            type="text"
            className="col-md-9"
            placeholder="I want to make..."
            onChange={handleChange}
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
  );
}

export default SimpleSearch;
