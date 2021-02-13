import React, { useEffect, useRef, useState } from "react";
import gallery7 from "../images/gallery7.jpg";
import DashboardHeader from "./DashboardHeader";
import { Item } from "semantic-ui-react";
import uploadImage from "../firebase/uploadImage";
import { useAuth } from "../context/AuthContext";
import { Link, useHistory } from "react-router-dom";
import { Popup } from "semantic-ui-react";
import photo6 from "../images/photo6.jpg";
import getRecipeByAuthor from "../firebase/getRecipeByAuthor";

import { Icon } from "semantic-ui-react";

export default function Profile() {
  const { currentUser, logout } = useAuth();
  const userName = currentUser.displayName;
  const userEmail = currentUser.email;
  const [recipeList, setRecipeList] = useState([]);
  const history = useHistory();
  const [imageUrl, setImageUrl] = useState("");

  const [state, setState] = useState({ disabled: true });
  const editonClick = () => {
    setState({ disabled: false });
  };
  const okonClick = () => {
    setState({ disabled: true });
  };

  useEffect(() => {
    getRecipeByAuthor(userName, setRecipeList);
  }, []);

  const handleLogout = async () => {
    try {
      await logout().then(() => {
        history.push("/home");
      });
    } catch (error) {
      setError(error);
    }
  };

  const style1 = {
    outline: "none",
    overflow: "auto",
    overflow: "hidden",
    minHeight: "200px",
    padding: "9px",
    boxSizing: "none",
    borderColor: "white",
    fontSize: "16px",
    backgroundColor: "white",
  };
  const style = {
    borderRadius: 0,
    opacity: 0.7,
    padding: "2em",
  };

  const uploadedImage = useRef(null);
  const imageUploader = useRef(null);

  const handleImageUpload = async (e) => {
    const [file] = e.target.files;
    if (file) {
      const reader = new FileReader();
      const { current } = uploadedImage;
      current.file = file;
      reader.onload = (e) => {
        current.src = e.target.result;
      };
      reader.readAsDataURL(file);
      await uploadImage(file, setImageUrl);
    }
  };

  return (
    <div>
      <div
        style={{
          backgroundSize: "cover",
          height: 550,
          width: "100%",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          backgroundImage: "url(" + gallery7 + ")",
        }}
      >
        <DashboardHeader handleLogout={handleLogout}></DashboardHeader>
        <div style={{ top: "180px", position: "absolute", width: "100%" }}>
          <h1 style={{ color: "white", paddingLeft: "38%" }}>
            See Profile Infomation
          </h1>
        </div>
        <div style={{ display: "flex", justifyContent: "center" }}>
          <div
            className="row"
            style={{
              top: "240px",
              position: "absolute",
              width: "86%",
              margin: 0,
            }}
          >
            <div className="col s12">
              <div
                className="col s4"
                style={{
                  display: "flex",
                  justifyContent: "center",
                  padding: 0,
                }}
              >
                <div
                  style={{
                    width: "86%",
                    background: "whitesmoke",
                    opacity: 0.8,
                    borderRadius: 30,
                    paddingTop: 35,
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                  }}
                >
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <input
                      type="file"
                      accept="image/*"
                      disabled={state.disabled}
                      onChange={handleImageUpload}
                      ref={imageUploader}
                      style={{
                        display: "none",
                      }}
                    />
                    <div
                      style={{
                        height: "250px",
                        width: "250px",
                        borderRadius: "50%",
                        border: "solid",
                        borderColor: "goldenrod",
                        backgroundColor: "white",
                      }}
                      onClick={() => imageUploader.current.click()}
                    >
                      <img
                        ref={uploadedImage}
                        style={{
                          width: "100%",
                          height: "100%",
                          position: "acsolute",
                          borderRadius: "50%",
                        }}
                      />
                    </div>
                    <div
                      className="row"
                      style={{ margin: 0, paddingLeft: "65%" }}
                    >
                      <Popup
                        trigger={
                          <i
                            className="material-icons"
                            onClick={okonClick}
                            style={{ cursor: "pointer" }}
                          >
                            check_circle
                          </i>
                        }
                        content="Click here to save new photo"
                        position="top center"
                        size="mini"
                        style={style}
                        inverted
                      />
                      <Popup
                        trigger={
                          <i
                            className="material-icons"
                            onClick={editonClick}
                            style={{ cursor: "pointer" }}
                          >
                            add_circle
                          </i>
                        }
                        content="Click here then top circle to upload new photo"
                        position="top center"
                        size="mini"
                        style={style}
                        inverted
                      />
                    </div>
                  </div>
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "center",
                      paddingBottom: 30,
                    }}
                  >
                    <p>
                      <h4>{userName}</h4>
                      <br></br>
                      {userEmail}
                    </p>
                  </div>
                </div>
              </div>
              <div
                className="col s8"
                style={{
                  display: "flex",
                  justifyContent: "flex-end",
                  paddingBottom: 50,
                  top: "180px",
                }}
              >
                <div
                  style={{
                    width: "96%",
                    minHeight: 220,
                    background: "whitesmoke",
                    opacity: 0.8,
                    borderRadius: 30,
                    padding: 35,
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                  }}
                >
                  <h4 style={{ paddingLeft: "3%", paddingBottom: 10 }}>
                    See personal recipes
                  </h4>
                  <div
                    className="row"
                    style={{ position: "relative", left: 0, top: 0, margin: 0 }}
                  >
                    <div className="col s12">
                      {/*iteration container  */}
                      {Array.isArray(recipeList)
                        ? recipeList.map((singleRecipe, i) => {
                            return (
                              <div className="col s6" key={i}>
                                <Item>
                                  <img
                                    src={singleRecipe.recipe.image || photo6}
                                    style={{ height: 100, width: 140 }}
                                  />
                                  <Item.Content>
                                    <Link
                                      to={{
                                        pathname: "/singlerecipie",
                                        state: {
                                          recipe: singleRecipe.recipe,
                                          recipeId: singleRecipe.recipeId,
                                        },
                                      }}
                                      style={{ textDecoration: "none" }}
                                    >
                                      {singleRecipe.recipe.label}
                                    </Link>
                                  </Item.Content>
                                  <Item.Content>
                                    <Icon
                                      name="star"
                                      disabled={
                                        singleRecipe.recipe.rate ? false : true
                                      }
                                    ></Icon>
                                    {singleRecipe.recipe.rate || "Yet to rate"}
                                  </Item.Content>
                                </Item>
                              </div>
                            );
                          })
                        : ""}

                      {/*  */}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
