const express = require("express");
const router = express.Router();
const Book = require("../models/bookModel");

router.get("/", (req, res) => {
  Book.find(function(err, books) {
    if (err) {
      console.log(err);
    } else {
      res.json(books);
    }
  });
});

router.post("/", (req, res) => {
  const newBook = new Book({
    title: req.body.title,
    description: req.body.description,
    category: req.body.category,
    author: req.body.author,
    price: req.body.price,
    cover: req.body.cover
  });
  newBook.save().then(book => res.json(book));
});

router.get("/:id", (req, res) => {
  let id = req.params.id;
  Book.findById(id, function(err, book) {
    res.json(book);
  });
});

module.exports = router;
