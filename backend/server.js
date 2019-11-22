const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const cors = require("cors");
const mongoose = require("mongoose");
let Book = require("./models/bookModel");
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

bookRoutes.route("/").get(function(req, res) {
  Book.find(function(err, books) {
    if (err) {
      console.log(err);
    } else {
      res.json(books);
    }
  });
});

app.listen(port, function() {
  console.log("Server is running on Port: " + port);
});
