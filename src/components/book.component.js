import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const Book = props => (
  <div className="col-12 col-sm-3 d-flex">
    <div className="card">
      <img
        src={require(`../images/${props.book.cover}`)}
        className="card-img-top img-fluid"
      ></img>
      <div className="card-body">
        <h3 className="card-title">{props.book.title}</h3>
        <p className="card-text">{props.truncText(props.book.description)}</p>

        <div className="price">
          Buy it for{" "}
          <span className="btn btn-primary">${props.book.price}</span>
        </div>
        <br />
        <a href={`books/${props.book._id}`} className="btn btn-success">
          Book Details
        </a>
        <br />
      </div>
    </div>
  </div>
);

export default Book;
