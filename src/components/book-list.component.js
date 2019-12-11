import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import axios from "axios";
import Book from "./book.component.js";
import "bootstrap/dist/css/bootstrap.min.css";
import "../css/styles.css";

export default class BooksList extends Component {
  constructor(props) {
    super(props);
    this.state = { books: [] };
  }

  truncText = str => {
    return str.substring(0, 100);
  };
  componentDidMount() {
    axios
      .get("http://localhost:4000/books/")
      .then(response => {
        this.setState({ books: response.data });
      })
      .catch(function(err) {
        console.log(err);
      });
  }
  booksList() {
    return this.state.books.map((currBook, i) => {
      return (
        <Book
          book={currBook}
          key={i}
          truncText={this.truncText.bind(this)}
        ></Book>
      );
    });
  }

  render() {
    return <div className="row">{this.booksList()}</div>;
  }
}
