import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import Signup from "./component/Signup";
import Login from "./component/Login";
import Home from "./component/Home";
import Dashboard from "./component/Dashboard";
import backgroundimage from "./images/fresh-ingredients-cooking-pasta-wooden-background.jpg";
import PrivateRoute from "./PrivateRoute";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Route path="/home" exact component={Home} />
        <div
          className="backimage"
          style={{
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
            backgroundImage: "url(" + backgroundimage + ")",
          }}
        >
          <Route path="/login" exact component={Login} />
          <Route path="/signup" exact component={Signup} />
        </div>
        <PrivateRoute path="/" exact component={Dashboard} />
      </BrowserRouter>
    </div>
  );
}

export default App;
