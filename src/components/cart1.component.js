import React, { Component } from "react";
import axios from "axios";
import CartItem from "./cart1-item.component.js";
import "bootstrap/dist/css/bootstrap.min.css";
import { throws } from "assert";

export default class Cart extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cart: []
    };
  }

  componentDidMount() {
    let cart = JSON.parse(sessionStorage.getItem("cart"));
    if (cart != undefined) {
      this.setState({
        cart: cart
      });
    }
  }

  CartItem() {
    return this.state.cart.map((currItem, i) => {
      return (
        <CartItem
          book={currItem}
          key={i}
          Calculate={this.Calculate.bind(this)}
        ></CartItem>
      );
    });
  }

  Calculate = item => {
    return item.qty * item.price;
  };

  checkItems = () => {
    if (this.state.cart.length == 0) {
      return <p>There are no items in the cart</p>;
    } else {
      return (
        <table className="table table-bordered table-striped">
          <thead className="thead-dark">
            <tr>
              <th width="650">Item</th>
              <th width="100">Quantity</th>
              <th width="100">Total</th>
            </tr>
          </thead>
          <tbody>{this.CartItem()}</tbody>
        </table>
      );
    }
  };

  render() {
    return (
      <div className="container">
        <div className="row">
          <h2>Shopping Cart</h2>
        </div>
        <div className="row">{this.checkItems()}</div>
      </div>
    );
  }
}
