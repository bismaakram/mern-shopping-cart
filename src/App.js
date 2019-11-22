import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import BooksList from "./components/book-list.component";
import Navigation from "./components/navigation.component";

class App extends Component {
  render() {
    return (
      <Router>
        <div className="container">
          <Navigation></Navigation>
          <Route path="/" exact component={BooksList}></Route>
        </div>
      </Router>
    );
  }
}

export default App;
