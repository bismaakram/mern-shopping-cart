import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const CartItem = props => {
  return (
    <tr>
      <td>
        <img
          src={require("" + `./images/${props.book.cover}`)}
          width="210"
          height="300"
        ></img>
      </td>
      <td>{props.book.qty}</td>
      <td>{props.Calculate(props.book)}</td>
    </tr>
  );
};

export default CartItem;
