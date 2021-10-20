import React, { useState, useEffect } from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
// import Registration from "./screens/Registration";
import Login from "./Login";
import Home from "./Home";
import Header from "./Header";
import Main from "./Main";
function App() {

 
 
  return (
    <Router>
        <Header/>
      <Route path="/" exact component={Home} />
      {/* <Route path="/register" exact component={Registration} /> */}
      <Route path="/login"   component={Login} />
      <Route path="/main"   component={Main} />
      
    </Router>
  );
}

export default App;
