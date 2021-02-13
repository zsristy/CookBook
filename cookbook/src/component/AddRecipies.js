import React, { useEffect, useRef, useState } from "react";
import SingleInput from "./singleinput";
import MultiInput from "./multiinput";
import nutsteak from "../images/nut-steak.jpg";
import DashboardHeader from "./DashboardHeader";
import autosize from "autosize";
import { Button } from "semantic-ui-react";
import uploadImage from "../firebase/uploadImage";
import addRecipe from "../firebase/addRecipe";
import { useAuth } from "../context/AuthContext";
import { useHistory } from "react-router-dom";
import TimeField from "react-simple-timefield";

export default function AddRecipies() {
  const { currentUser } = useAuth();
  const author = currentUser.displayName;
  const history = useHistory();
  const [meal, setMeal] = useState("");
  const [recipePrep, setRecipePrep] = useState("");
  const [itemList, setItemList] = useState([{ name: "" }]);
  const [cuisine, setCuisine] = useState("");
  const [diet, setDiet] = useState([]);
  const [health, setHealth] = useState([]);
  const [title, setTitle] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const textarea = useRef();
  const [time, setTime] = useState("00:00:00");
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
    { value: "Balanced", label: "Balanced" },
    { value: "High-Fiber", label: "High-Fiber" },
    { value: "High-Protein", label: "High-Protein" },
    { value: "Low-Carb", label: "Low-Carb" },
    { value: "Low-Fat", label: "Low-Fat" },
    { value: "Low-Sodium", label: "Low-Sodium" },
  ];

  const avoidoptions = [
    { value: "Alcohol-Free", label: "Alcohol free" },
    { value: "Crustacean-Free", label: "Crustacean free" },
    { value: "Dairy-Free", label: "Dairy free" },
    { value: "Egg-Free", label: "Egg free" },
    { value: "Fish-Free", label: "Fish free" },
    { value: "No-Oil-Added", label: "Oil free" },
    { value: "Peanut-Free", label: "Peanut free" },
    { value: "Pork-Free", label: "Pork free" },
    { value: "Red-Meat-Free", label: "Red Meat free" },
    { value: "Soy-Free", label: "Soy free" },
    { value: "Vegan", label: "Vegan" },
    { value: "Vegetarian", label: "Vegetarian" },
  ];

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
    }
    await uploadImage(file, setImageUrl);
  };

  useEffect(() => {
    autosize(textarea.current);
  });

  const [state, setState] = useState({
    rows: [{}],
  });

  const handleAddRow = () => {
    setState((prevState, props) => {
      const row = { name: "", amount: "" };
      return { rows: [...prevState.rows, row] };
    });

    setItemList((current) => [...current, { name: "" }]);
  };

  const handleRemoveRow = () => {
    setState((prevState, props) => {
      return { rows: prevState.rows.slice(1) };
    });
    setItemList((current) => {
      current[current.length - 1] = { name: "" };
      return current;
    });
  };

  const styles = {
    fontFamily: "sans-serif",
    textAlign: "left",
  };

  const handleTitleChange = (e) => {
    setTitle(e.target.value);
  };

  const handleTimeChange = (event, value) => {
    const newTime = value.replace(/-/g, ":");
    const time = newTime.substr(0, 5);
    const timeSeconds = newTime.padEnd(8, time.substr(5, 3));
    setTime(timeSeconds);
  };

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

  const handleRecipePrep = (e) => {
    setRecipePrep(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    var a = time.split(":");
    var minutes = +a[0] * 60 + +a[1];
    let item = itemList.map((a) => a.name);
    let validItem = item.filter((a) => a.length > 0);
    await addRecipe(
      title,
      meal,
      cuisine,
      diet,
      health,
      validItem,
      imageUrl,
      recipePrep,
      author,
      minutes
    );
    history.push("/");
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
          backgroundImage: "url(" + nutsteak + ")",
        }}
      >
        <DashboardHeader></DashboardHeader>
        <h2
          style={{
            paddingTop: 200,
            color: "white",
            fontSize: " 40px",
            lineHeight: " 40px",
            textAlign: "center",
          }}
        >
          It is our honor if you share your recipe with us.<br></br>
          It is your recipie which makes our CookBook extraordinary.
        </h2>
      </div>
      <div>
        <div
          style={{
            top: "450px",
            position: "absolute",
            width: "86%",
            marginLeft: "7%",
            paddingBottom: 50,
            justifyContent: "center",
          }}
        >
          <form
            style={{
              background: "whitesmoke",
              opacity: 0.7,
              borderRadius: 30,
              paddingTop: 35,
            }}
            onSubmit={handleSubmit}
          >
            <p
              style={{
                color: "goldenrod",
                fontSize: 40,
                paddingLeft: "25%",
                fontWeight: "bold",
              }}
            >
              Please write the full recipe here
            </p>
            <div
              className="row"
              style={{ padding: 100, paddingBottom: 0, paddingTop: 50 }}
            >
              <div className="col s12">
                <div
                  className="col s5"
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
                    onChange={handleImageUpload}
                    ref={imageUploader}
                    style={{
                      display: "none",
                    }}
                  />
                  <div
                    style={{
                      height: "320px",
                      width: "100%",
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
                      }}
                    />
                  </div>
                  Click to upload Image
                </div>
                <div className="col s7">
                  <div className="row">
                    <div className="col s12">
                      <div className="col s1">
                        <label
                          style={{
                            fontSize: 16,
                            color: "black",
                            paddingTop: "15%",
                            paddingLeft: "35%",
                          }}
                        >
                          Recipe
                        </label>
                      </div>

                      <div
                        className="col s11"
                        style={{ paddingLeft: "7%", paddingRight: "7%" }}
                      >
                        <input
                          type="text"
                          placeholder="Recipe Name"
                          required
                          onChange={handleTitleChange}
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
                    </div>
                  </div>
                  <div className="row">
                    <div className="col s12">
                      <div className="col s2">
                        <label
                          style={{
                            fontSize: 16,
                            color: "black",
                            paddingTop: "15%",
                            paddingLeft: "10%",
                          }}
                        >
                          Prepation Time
                        </label>
                      </div>
                      <div className="col s10" style={{ paddingRight: "7%" }}>
                        <TimeField
                          showSeconds
                          value={time}
                          onChange={handleTimeChange}
                          style={{
                            border: "2px solid #000",
                            fontSize: 28,
                            width: 105,
                            backgroundColor: "white",
                            padding: "5px 8px",
                            color: "#000",
                            borderRadius: 20,
                          }}
                        />
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col s12">
                      <div className="col s6">
                        <SingleInput
                          title="Meal"
                          onChange={handleMealChange}
                          options={mealoptions}
                        ></SingleInput>
                      </div>
                      <div className="col s6">
                        <SingleInput
                          title="Cuisine"
                          options={cuisineoptions}
                          onChange={handleCuisineChange}
                        ></SingleInput>
                      </div>
                    </div>
                  </div>
                  <div className="col s12">
                    <MultiInput
                      title="Diet"
                      options={dietoptions}
                      onChange={handleDietChange}
                    ></MultiInput>
                    <MultiInput
                      title="Health"
                      onChange={handleHealthChange}
                      options={avoidoptions}
                    ></MultiInput>
                  </div>
                </div>
              </div>
            </div>
            <div className="row" style={{ padding: 100, paddingTop: 0 }}>
              <div className="col s12">
                <div className="col s5">
                  <p
                    style={{
                      color: "goldenrod",
                      fontWeight: "bold",
                      fontSize: 20,
                    }}
                  >
                    Ingredients
                  </p>

                  <div style={styles}>
                    <table>
                      <thead>
                        <tr>
                          <th className="text-center"> # </th>
                          <th className="text-center"> Items needed </th>

                          <th />
                        </tr>
                      </thead>
                      <tbody>
                        {state.rows.map((row, idx) => (
                          <tr id="addr0" key={idx}>
                            <td>{idx}</td>
                            <td>
                              <input
                                type="text"
                                name="name"
                                onChange={(e) => {
                                  const vaule = e.target.value;
                                  setItemList((current) => {
                                    current[idx].name = vaule;
                                    return current;
                                  });
                                }}
                                style={{ outline: "none", boxShadow: "none" }}
                              />
                            </td>
                          </tr>
                        ))}
                        <tr>
                          <td onClick={handleAddRow}>
                            <i
                              className="material-icons"
                              style={{ cursor: "pointer" }}
                            >
                              add_circle_outline
                            </i>
                          </td>
                          {Boolean(state.rows.length) && (
                            <td onClick={handleRemoveRow}>
                              <i
                                className="material-icons"
                                style={{ cursor: "pointer" }}
                              >
                                remove_circle_outline
                              </i>
                            </td>
                          )}
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>

                <div className="col s7">
                  <p
                    style={{
                      color: "goldenrod",
                      fontWeight: "bold",
                      fontSize: 20,
                    }}
                  >
                    Preparation
                  </p>

                  <textarea
                    required
                    style={style1}
                    ref={textarea}
                    onChange={handleRecipePrep}
                    placeholder="type some text"
                    rows={1}
                    defaultValue=""
                  />
                  <div style={{ paddingTop: 50, paddingLeft: "80%" }}>
                    <Button color="green">Add Recipe</Button>
                  </div>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
