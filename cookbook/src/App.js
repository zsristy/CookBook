import React from 'react';
import { BrowserRouter, Route } from "react-router-dom";
import Signup from './component/Signup';
import Login from './component/Login'
import backgroundimage from "./images/fresh-ingredients-cooking-pasta-wooden-background.jpg";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
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
      </BrowserRouter>
    </div>
  );
}

export default App;
