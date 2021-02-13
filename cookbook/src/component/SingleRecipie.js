import React, { useEffect, useRef, useState } from "react";
import kiwi from "../images/kiwi.jpg";
import gallery3 from "../images/gallery3.jpg";
import DashboardHeader from "./DashboardHeader";
import "semantic-ui-css/semantic.min.css";
import { Item, Table } from "semantic-ui-react";
import { Rating } from "semantic-ui-react";
import { Button, Icon } from "semantic-ui-react";
import { Label } from "semantic-ui-react";
import people from "../images/chef.jpg";
import { useAuth } from "../context/AuthContext";
import { useHistory } from "react-router-dom";
import addRate from "../firebase/addRate";
import addComment from "../firebase/addComment";
import getComment from "../firebase/getComment";

export default function SingleRecipie(props) {
  const recipeId = props.location.state.recipeId;
  const recipe = props.location.state.recipe;
  const [rating, setRating] = useState(0);
  const [state, setState] = useState({ disabled: false });
  const [comment, setComment] = useState("");
  const [commentList, setCommentList] = useState([]);
  const history = useHistory();
  const handleRate = async (e, { rating, maxRating }) => {
    setRating(rating);
    setState({ disabled: true });
    await addRate(recipeId, rating);
  };

  const [Error, setError] = useState("");
  const { logout, currentUser } = useAuth();

  useEffect(async () => {
    await getComment(recipeId, setCommentList);
  }, []);

  const username = currentUser.displayName || currentUser.email;
  const handleLogout = async () => {
    try {
      await logout().then(() => {
        history.push("/home");
      });
    } catch (error) {
      setError(error);
    }
  };

  const handleCommentChange = (e) => {
    setComment(e.target.value);
  };
  const handleCommentSubmit = async (e) => {
    e.preventDefault();
    if (comment.length) {
      await addComment(recipeId, comment, username);
      setComment("");
    }
  };
  return (
    <div>
      <div
        style={{
          backgroundSize: "cover",
          height: 500,
          width: "100%",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          backgroundImage: "url(" + kiwi + ")",
        }}
      >
        <DashboardHeader handleLogout={handleLogout}></DashboardHeader>
        <div className="row" style={{ margin: 0 }}>
          <div className="col s12">
            <div
              className="col s5"
              style={{
                display: "flex",
                justifyContent: "flex-end",
                padding: 0,
              }}
            >
              <img
                style={{
                  height: 380,
                  width: "80%",
                  borderStyle: "solid",
                  border: 4,
                  borderColor: "goldenrod",
                }}
                src={recipe.image}
              ></img>
            </div>
            <div
              className="col s7"
              style={{
                flexDirection: "column",
                paddingLeft: "3%",
                paddingTop: 280,
              }}
            >
              <Rating
                style={{
                  height: 20,
                  paddingLeft: "4%",
                }}
                maxRating={5}
                icon="star"
                size="huge"
                onRate={handleRate}
                disabled={state.disabled}
              />

              <div className="row" style={{ margin: 0, paddingTop: 10 }}>
                <div className="col s12">
                  <form onSubmit={handleCommentSubmit}>
                    <div className="col s9">
                      <input
                        onChange={handleCommentChange}
                        type="text"
                        value={comment}
                        placeholder="Please leave a comment"
                        style={{
                          paddingLeft: "20px",
                          backgroundColor: "white",
                          fontWeight: "10px",
                          border: "white",
                          boxShadow: "none",
                          borderRadius: "20px",
                        }}
                      />
                    </div>
                    <div className="col s2">
                      <Button icon style={{ height: "3rem" }}>
                        <Icon name="telegram plane large" />
                      </Button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div
        style={{
          top: "500px",
          position: "absolute",
          height: 800,
          width: "100%",
          backgroundColor: "white",
        }}
      >
        <div className="row" style={{ margin: 0 }}>
          <div className="col s12">
            <div className="col s4">
              <div
                style={{
                  width: "87%",
                  marginLeft: "14%",
                  paddingBottom: 50,
                  paddingTop: 50,
                  justifyContent: "center",
                }}
              >
                <div
                  style={{
                    background: "whitesmoke",
                    opacity: 0.8,
                    borderRadius: 30,
                    padding: 40,
                  }}
                >
                  {/* profile card */}
                  <Item.Group>
                    <Item>
                      <img
                        src={people}
                        alt
                        style={{
                          width: 90,
                          height: 90,
                          borderRadius: "50%",
                          border: "solid",
                          borderColor: "goldenrod",
                        }}
                      ></img>
                      <Item.Content style={{ paddingTop: 40, paddingLeft: 10 }}>
                        <Item.Header>
                          {recipe.source || recipe.author}
                        </Item.Header>
                      </Item.Content>
                    </Item>
                  </Item.Group>
                  <b>Comments</b>

                  {/* comments */}
                  <div
                    style={{
                      maxHeight: 300,
                      overflowY: "scroll",
                      marginTop: 20,
                    }}
                  >
                    <Item.Group divided>
                      {commentList.map((c, id) => {
                        return (
                          <Item key={id}>
                            <Item.Content>
                              <Item.Meta>{c.user}</Item.Meta>
                              <Item.Description>{c.comment}</Item.Description>
                            </Item.Content>
                          </Item>
                        );
                      })}
                    </Item.Group>
                  </div>
                </div>
              </div>
            </div>
            <div className="col s8">
              <div
                style={{
                  width: "93%",
                  marginRight: "7%",
                  paddingBottom: 50,
                  paddingTop: 50,
                  justifyContent: "center",
                }}
              >
                {/* data from firebase */}
                <form
                  style={{
                    background: "whitesmoke",
                    opacity: 0.8,
                    borderRadius: 30,
                    padding: 50,
                  }}
                >
                  <Item.Group divided>
                    <Item>
                      <img
                        src={recipe.image}
                        alt
                        style={{ width: "45%", height: 280 }}
                      ></img>
                      <Item.Content style={{ paddingLeft: "5%" }}>
                        <Item.Header>
                          <h3 style={{ color: "goldenrod" }}>{recipe.label}</h3>
                        </Item.Header>
                        <Item.Extra>
                          {/* {recipe.cuisineType!=null? 
                                  <Label style={{color:"blue"}}>{recipe.cuisineType}</Label>                           
                            :""}  */}
                        </Item.Extra>
                        <Item.Extra>
                          {/* {recipe.mealType!=null? 
                                  <Label style={{color:"green"}}>{recipe.mealType}</Label>                           
                            :""}   */}
                        </Item.Extra>
                        <Item.Extra>
                          {recipe.dietLabels != null
                            ? recipe.dietLabels.map((dlabel) => {
                                return (
                                  <Label style={{ color: "yellow" }}>
                                    {dlabel}
                                  </Label>
                                );
                              })
                            : ""}
                        </Item.Extra>
                        <Item.Extra>
                          {recipe.healthLabels != null
                            ? recipe.healthLabels.map((hlabel) => {
                                return (
                                  <Label style={{ color: "red" }}>
                                    {hlabel}
                                  </Label>
                                );
                              })
                            : ""}
                        </Item.Extra>
                      </Item.Content>
                    </Item>
                  </Item.Group>

                  <div style={{ paddingTop: 30, paddingBottom: 30 }}>
                    <Table celled>
                      <Table.Header>
                        <Table.Row>
                          <Table.HeaderCell>
                            <Label ribbon style={{ color: "goldenrod" }}>
                              <h4>Ingredients</h4>
                            </Label>
                          </Table.HeaderCell>
                        </Table.Row>
                      </Table.Header>

                      <Table.Body>
                        {recipe.ingredientLines.map((line, i) => {
                          return (
                            <Table.Row>
                              <Table.Cell>
                                {i}.&ensp;&ensp;&ensp;&ensp;{line}
                              </Table.Cell>
                            </Table.Row>
                          );
                        })}
                      </Table.Body>
                    </Table>
                  </div>

                  <div style={{ paddingTop: 30, paddingBottom: 30 }}>
                    <Item.Group>
                      <Item>
                        <Item.Content>
                          <Item.Header>
                            <h3 style={{ color: "goldenrod" }}>
                              Preparation Steps
                            </h3>
                          </Item.Header>
                          <Item.Description>
                            {recipe.prep !== undefined ? (
                              <p>{recipe.prep}</p>
                            ) : (
                              <p>
                                To see the whole recipe{" "}
                                <a href={recipe.url}>click here</a>
                              </p>
                            )}
                          </Item.Description>
                        </Item.Content>
                      </Item>
                    </Item.Group>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
