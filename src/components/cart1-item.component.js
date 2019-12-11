import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import img from "../images/csharp.jpg";

const CartItem = props => {
  return (
    <tr>
      <td>
        <img src={img}></img>
      </td>
      <td>{props.book.qty}</td>
      <td>{props.Calculate(props.book)}</td>
    </tr>
  );
};

export default CartItem;
