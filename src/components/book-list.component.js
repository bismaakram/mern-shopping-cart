import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import img from "../images/mongodb.jpg";
import "bootstrap/dist/css/bootstrap.min.css";
import "../css/styles.css";

const Book = props => (
  <div className="col-sm-3">
    <img
      src={require(`../images/${props.book.cover}`)}
      width={"210px"}
      height={"300px"}
    ></img>
    <h2>{props.book.title}</h2>
    <p>{props.book.description}</p>
    <div className="price">
      Buy it for <span className="button blue">${props.book.price}</span>
    </div>
    <br />
    <a href={`books/details/${props.book._id}`} className="button">
      Book Details
    </a>
    <br />
  </div>
);

export default class BooksList extends Component {
  constructor(props) {
    super(props);
    this.state = { books: [] };
  }

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
    return this.state.books.map(function(currBook, i) {
      return <Book book={currBook} key={i}></Book>;
    });
  }

  render() {
    return <div className="row">{this.booksList()}</div>;
  }
}
