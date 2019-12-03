import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import BooksList from "./components/book-list.component.js";
import BookDetails from "./components/book-details.component.js";
import "bootstrap/dist/css/bootstrap.min.css";
import Navigation from "./components/navigation.component";
import Cart from "./components/cart1.component";

class App extends Component {
  render() {
    return (
      <Router>
        <Navigation></Navigation>

        <Route
          path="/"
          exact
          render={() => (
            <div className="container">
              <BooksList></BooksList>
            </div>
          )}
        ></Route>
        <Route path="/books/:id" exact component={BookDetails}></Route>
        <Route path="/cart" exact component={Cart}></Route>
      </Router>
    );
  }
}

export default App;
