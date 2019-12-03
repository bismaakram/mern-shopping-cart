import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const CartItem = props => {
  return (
    <tr>
      <td>{props.book.title}</td>
      <td>{props.book.qty}</td>
      <td>{props.Calculate(props.book)}</td>
    </tr>
  );
};

export default CartItem;
