import React, { Component } from "react";
import "../css/styles.css";
import axios from "axios";

export default class BookDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
      book: []
    };
  }

  componentDidMount() {
    axios
      .get("http://localhost:4000/books/" + this.props.match.params.id)
      .then(response => {
        this.setState({ book: response.data });
      })
      .catch(function(err) {
        console.log(err);
      });
  }

  AddToCart = e => {
    const { book } = this.state;
    let id = book._id;
    let title = book.title;
    let price = book.price;
    let qty = 1;
    let product = { id: id, title: title, price: price, qty: qty };
    let existing = JSON.parse(sessionStorage.getItem("cart"));
    existing = existing ? existing : [];
    let val = existing.filter(item => item.id === id);
    if (existing.length !== 0) {
      if (val.length != 0) {
        existing.forEach(item => {
          if (item.id === id) {
            item.qty++;
          }
        });
      } else {
        existing.push(product);
      }
    } else {
      existing.push(product);
    }

    sessionStorage.setItem("cart", JSON.stringify(existing));
    window.location.href = "http://localhost:3000/cart/";
  };

  render() {
    const { book, quantity } = this.state;
    return (
      <div className="container">
        <div className="row">
          <div className="col-sm-6">
            <img src={`../images/${book.cover}`}></img>
          </div>
          <div className="col-sm-6">
            <h2>{book.title}</h2>
            <ul>
              <li>Category: {book.category}</li>
              <li>Author: {book.author}</li>
            </ul>
            <p className="button blue">${book.price}</p>
            <p>{book.description}</p>
            <button
              id={book._id}
              onClick={this.AddToCart}
              class="btn btn-success"
            >
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    );
  }
}
