import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import ArtistList from "./components/ArtistList";
import Artist from "./components/Artist";
import SignUp from "./components/SignUp";
import "./App.css";
import GlobalNav from "./components/GlobalNav";

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <GlobalNav />
          <div>
          <Route exact path="/" component={ArtistList} />
          <Route exact path="/signup" component={SignUp} />
          <Route path="/artist/:id" component={Artist} />
        </div>
        </div>
      </Router>
    );
  }
}

export default App;