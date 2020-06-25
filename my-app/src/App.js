import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./App.css";
import NavBar from "./component/NavBar";
import Title from "./component/Title";
import Footer from "./component/Footer";
import Main from "./component/Main";

function App() {
  return (
    <Router>
      <div className="App">
        <NavBar />
        <Title />
        <Main />
        <Footer />
        <Route exact path="/" />
        <Route path="/about" />
      </div>
    </Router>
  );
}

export default App;
