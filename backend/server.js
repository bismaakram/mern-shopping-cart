const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const cors = require("cors");

const mongoose = require("mongoose");
let Book = require("./models/bookModel");

const stripe = require("stripe")("sk_test_rAes6658b2t2uNKCD34VfuaW00l2nGfGtQ");
const port = 4000;

app.use(cors());
app.use(bodyParser.json());

mongoose.connect("mongodb://127.0.0.1:27017/books", { useNewUrlParser: true });
const connection = mongoose.connection;

connection.once("open", function() {
  console.log("MongoDB database connection established successfully..");
});

const bookRoutes = express.Router();
app.use("/books", bookRoutes);
const cartRoutes = express.Router();
app.use("/cart", cartRoutes);

bookRoutes.route("/").get(function(req, res) {
  Book.find(function(err, books) {
    if (err) {
      console.log(err);
    } else {
      res.json(books);
    }
  });
});

bookRoutes.route("/:id").get(function(req, res) {
  let id = req.params.id;
  Book.findById(id, function(err, book) {
    res.json(book);
  });
});

cartRoutes.route("/").get(function(req, res) {
  var cart = req.session.cart;
  var displayCart = { items: [], total: 0 };
  var total = 0;

  for (var item in cart) {
    displayCart.items.push(cart[item]);
    total += cart[item].qty * cart[item].price;
  }
  displayCart.total = total;

  return res.json(displayCart);
});

cartRoutes.route("/:id").get(function(req, res) {
  req.session.cart = req.session.cart || {};
  var cart = req.session.cart;
  let id = req.params.id;
  Book.findById(id, function(err, book) {
    if (err) {
      console.log(err);
    }
    if (cart[id]) {
      cart[id].qty++;
    } else {
      cart[id] = {
        item: book._id,
        title: book.title,
        price: book.price,
        qty: 1
      };
    }
    console.log(req.session.cart);
    res.redirect("/cart");
  });
});
app.listen(port, function() {
  console.log("Server is running on Port: " + port);
});
