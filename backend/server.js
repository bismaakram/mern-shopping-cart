const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const cors = require("cors");
const mongoose = require("mongoose");
const stripe = require("stripe")("sk_test_rAes6658b2t2uNKCD34VfuaW00l2nGfGtQ");
const port = 4000;

app.use(cors());
app.use(bodyParser.json());

app.use("/books", require("./routes/books"));
app.use("/users", require("./routes/users"));

mongoose.connect("mongodb://127.0.0.1:27017/books", { useNewUrlParser: true });
const connection = mongoose.connection;

connection.once("open", function() {
  console.log("MongoDB database connection established successfully..");
});

app.listen(port, function() {
  console.log("Server is running on Port: " + port);
});
