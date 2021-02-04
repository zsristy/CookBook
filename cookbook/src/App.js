import React from 'react';
import { BrowserRouter, Route } from "react-router-dom";
import Signup from './component/Signup'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Route path="/signup" exact component={Signup} />
      </BrowserRouter>
    </div>
  );
}

export default App;
