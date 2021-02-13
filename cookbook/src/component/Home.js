import React, { useState, useEffect } from "react";
import getRecipe from "../firebase/getRecipe";
import backgroundimage1 from "../images/foodtable.jpg";
import image1 from "../images/pizza.jpg";
import image2 from "../images/begun.jpg";
import HomeNavBar from "./HomeNavBar";
import HomeFooter from "./HomeFooter";
import getRandomRecipe from "../firebase/getRandomRecipe";
import photo1 from "../images/photo1.jpg";
import photo2 from "../images/photo2.jpg";
import photo3 from "../images/photo3.jpg";
import photo4 from "../images/photo4.jpg";
import photo5 from "../images/photo5.jpg";
import photo6 from "../images/photo6.jpg";
import photo7 from "../images/photo7.jpg";
import photo8 from "../images/photo8.jpg";
import photo9 from "../images/photo9.jpg";
import { Link, useHistory } from "react-router-dom";
import HomeCard from "./HomeCard";

export default function Home() {
  const photos = [
    photo1,
    photo2,
    photo3,
    photo4,
    photo5,
    photo6,
    photo7,
    photo8,
    photo9,
  ];
  const history = useHistory();

  const [activePage, setActivePage] = useState();
  const [totalPage, setTotalPage] = useState();
  const [searchTitle, setSearchTitle] = useState("");
  const [recipeList, setRecipeList] = useState();
  const [activeRecipe, setActiveRecipe] = useState();

  useEffect(async () => {
    await getRandomRecipe(setActiveRecipe);
  }, []);

  
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
  // result of copy paste
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

  const myClick = () => {
    history.push("/signup");
  };
  return (
    <div>
      <HomeNavBar></HomeNavBar>
      <div
        className="backimage"
        style={{
          height: 500,
          width: "100%",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          backgroundImage: "url(" + backgroundimage1 + ")",
        }}
      >
        <div
          style={{ backgroundColor: "whitesmoke", opacity: 0.6, height: 380 }}
        >
          <h1 style={{ color: "black", marginLeft: "38%" }}>
            <i>
              <br></br>Let's Share Recipe<br></br> &ensp;&ensp;&ensp;&ensp;
              Let's Share Food
            </i>
          </h1>
          <i
            className="material-icons"
            style={{ marginLeft: "43%", fontSize: 200 }}
          >
            local_dining
          </i>
        </div>
      </div>
      <div
        className="row"
        style={{ marginTop: 100, marginBottom: 100, width: "100%" }}
      >
        <div className="col s6">
          <div
            className="row"
            style={{ position: "relative", left: 0, top: 0 }}
          >
            <img
              style={{
                height: 300,
                width: 480,
                position: "relative",
                left: 0,
                top: 0,
              }}
              src={image1}
            ></img>
            <img
              style={{
                height: 300,
                width: 300,
                position: "absolute",
                left: 340,
                top: 200,
              }}
              src={image2}
            ></img>
          </div>
        </div>
        <div
          className="col s6"
          style={{ margin: 80, background: "whitesmoke", opacity: 0.6 }}
        >
          <h2 style={{ marginTop: 50, marginLeft: 50 }}>
            <i>Welcome To CookBook</i>
          </h2>
          <p style={{ textAlign: "justify", margin: 50 }}>
            Cookbook is a kitchen reference containing recipes. Cookbook may be
            general or may specialize in a particular cuisine or category of
            food. Recipes in cookbook are organized in various ways: by course,
            by main ingredient, by cooking technique, alphabetically, by region
            or country, and so on. It may include illustrations of finished
            dishes and preparation steps; discussions of cooking techniques,
            advice on kitchen equipment, ingredients, substitutions; historical,
            cultural notes and so on.
          </p>
          {/* -------------------------------------------------------------------------------------------------LINK */}
          <Link to="#">
            <p style={{ color: "goldenrod", marginLeft: 50, marginBottom: 50 }}>
              | ABOUT US
            </p>
          </Link>
        </div>
      </div>
      <div
        className="row"
        style={{ marginTop: 100, marginBottom: 100, width: "100%" }}
      >
        <div className="col s12">
          <div
            className="col s3"
            style={{
              backgroundColor: "goldenrod",
              height: 80,
              textAlign: "center",
              fontSize: 35,
            }}
          >
            <b>
              <i>Our Recipes</i>
            </b>
          </div>
          <div className="col s9">
            <div
              style={{
                backgroundColor: "gray",
                height: 80,
                textAlign: "center",
                fontSize: 35,
                marginLeft: "12%",
                marginRight: "6%",
              }}
            >
              <div className="col s11" style={{ padding: "1%" }}>
                <form
                  style={{
                    border: "2px solid white",
                    borderRadius: "25px",
                  }}
                  onSubmit={handleSubmit}
                >
                  <div className="row" style={{ margin: 0 }}>
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
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        className="row"
        style={{
          position: "relative",
          left: 0,
          top: 0,
          marginLeft: "27%",
          marginRight: "6%",
        }}
      >
        {Array.isArray(activeRecipe)
          ? activeRecipe.map((recipe, i) => {
              return <HomeCard singleRecipe={recipe} key={i} />;
            })
          : ""}
      </div>

      <HomeFooter></HomeFooter>
    </div>
  );
}
