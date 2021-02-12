import React, { useState } from "react";
import Select from "react-select";
import makeAnimated from "react-select/animated";
import kiwi from "../images/bread.jpg";
import DashboardHeader from "./DashboardHeader";
import RecipeCard from "./RecipeCard";
import { Container, Row } from "react-bootstrap";
import Multiselect from "./multiselect";
import Singleselect from "./singleselect";
import getFilterRecipe from "../firebase/getFilterRecipe";

export default function AdvanceSearch() {
  const [meal, setMeal] = useState("");
  const [cuisine, setCuisine] = useState("");
  const [diet, setDiet] = useState([]);
  const [health, setHealth] = useState([]);
  const [title, setTitle] = useState("");
  const [recipeList, setRecipeList] = useState();

  const mealoptions = [
    { value: "Breakfast", label: "Breakfast" },
    { value: "Lunch", label: "Lunch" },
    { value: "Dinner", label: "Dinner" },
    { value: "Snack", label: "Snack" },
    { value: "Teatime", label: "Teatime" },
  ];

  const cuisineoptions = [
    { value: "American", label: "American" },
    { value: "Asian", label: "Asian" },
    { value: "Chinese", label: "Chinese" },
    { value: "French", label: "French" },
    { value: "Indian", label: "Indian" },
    { value: "Italian", label: "Italian" },
    { value: "Japanese", label: "Japanese" },
    { value: "Mexican", label: "Mexican" },
  ];

  const dietoptions = [
    { value: "balanced", label: "Balanced" },
    { value: "high-fiber", label: "High-Fiber" },
    { value: "high-protein", label: "High-Protein" },
    { value: "low-carb", label: "Low-Carb" },
    { value: "low-fat", label: "Low-Fat" },
    { value: "low-sodium", label: "Low-Sodium" },
  ];

  const avoidoptions = [
    { value: "alcohol-free", label: "Alcohol free" },
    { value: "crustacean-free", label: "Crustacean free" },
    { value: "dairy-free", label: "Dairy free" },
    { value: "egg-free", label: "Egg free" },
    { value: "fish-free", label: "Fish free" },
    { value: "No-oil-added", label: "Oil free" },
    { value: "peanut-free", label: "Peanut free" },
    { value: "pork-free", label: "Pork free" },
    { value: "red-meat-free", label: "Red Meat free" },
    { value: "soy-free", label: "Soy free" },
    { value: "vegan", label: "Vegan" },
    { value: "vegetarian", label: "Vegetarian" },
  ];

  const handleMealChange = (selectedOption) => {
    if (selectedOption !== null) setMeal(selectedOption.value);
    else setMeal("");
  };

  const handleCuisineChange = (selectedOption) => {
    if (selectedOption !== null) setCuisine(selectedOption.value);
    else setCuisine("");
  };

  const handleDietChange = (selectedOption) => {
    let result = selectedOption.map((a) => a.value);
    setDiet(result);
  };
  const handleHealthChange = (selectedOption) => {
    let result = selectedOption.map((a) => a.value);
    setHealth(result);
  };

  const handleTitleChange = (e) => {
    setTitle(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await getFilterRecipe(title, meal, cuisine, diet, health, setRecipeList);
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
        <DashboardHeader></DashboardHeader>

        <form onSubmit={handleSubmit}>
          <div
            className="row"
            style={{ marginTop: 120, maxWidth: "97%", marginLeft: "2%" }}
          >
            <div className="col s12" style={{ maxWidth: "97%", marginLeft: 0 }}>
              <div className="col s5">
                <h4
                  style={{ color: "white", opacity: 0.5, paddingLeft: "12%" }}
                >
                  Try an Advanced Search by mentioning your Meal type and
                  Cuisine.
                </h4>
                <div
                  className="col s11"
                  style={{ paddingLeft: "10%", paddingTop: "5%" }}
                >
                  <div
                    className="search"
                    style={{
                      border: "2px solid white",
                      borderRadius: "25px",
                    }}
                  >
                    <div className="row" style={{ margin: 0 }}>
                      <input
                        type="text"
                        className="col-md-9"
                        placeholder="I want to make..."
                        onChange={handleTitleChange}
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
                  </div>
                </div>

                <div className="col s6" style={{ paddingTop: 15 }}>
                  <Singleselect
                    title="Meal"
                    handleChange={handleMealChange}
                    options={mealoptions}
                  ></Singleselect>
                </div>

                <div className="col s6" style={{ paddingTop: 15 }}>
                  <Singleselect
                    title="Cuisine"
                    handleChange={handleCuisineChange}
                    options={cuisineoptions}
                  ></Singleselect>
                </div>
              </div>

              <div
                className="col s7"
                style={{
                  borderStyle: "solid",
                  borderRight: 0,
                  borderTop: 0,
                  borderBottom: 0,
                  borderColor: "white",
                }}
              >
                <p
                  style={{
                    color: "white",
                    opacity: 0.5,
                    paddingLeft: "12%",
                    fontSize: "16",
                    paddingBottom: "2%",
                  }}
                >
                  If you want to go for specific diet and avoid some specific
                  item then this filter will help you.
                </p>
                <Multiselect
                  title="Diet"
                  options={dietoptions}
                  handleChange={handleDietChange}
                ></Multiselect>
                <Multiselect
                  title="Health"
                  handleChange={handleHealthChange}
                  options={avoidoptions}
                ></Multiselect>
              </div>
            </div>
          </div>
        </form>
      </div>
      <div
        style={{
          top: "500px",
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
              {Array.isArray(recipeList)
                ? recipeList.map((recipe, i) => {
                    return <RecipeCard singleRecipe={recipe} key={i} />;
                  })
                : ""}
            </Row>
          </Container>
        </div>
      </div>
    </div>
  );
}
