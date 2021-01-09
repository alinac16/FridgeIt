const db = require("../models");
const Product = db.products;
const Op = require("sequelize").Op;
const Sequelize = require("sequelize");

// Create and Save a new Product
exports.create = (req, res) => {
  // validate request
  if (!req.body) {
    res.states(400).send({
      message: "Content can not be empty!",
    });
    return;
  }
  // create product
  const product = {
    name: req.body.name,
    weight: req.body.weight,
  };

  // save product in databse
  Product.create(product)
    .then(data => res.send(data))
    .catch(err => {
      res.status(500).send({
        message: err.message || "Failed to create product.",
      });
    });
};

// Retrieve all Products from the database.
exports.findAll = (req, res) => {
  Product.findAll()
    .then(data => res.send(data))
    .catch(err => {
      res.status(500).send({
        message: err.message || "Failed to find all products.",
      });
    });
};

// Retrieve all stored Products from the database.
exports.findAllStored = (req, res) => {
  Product.findAll({ where: { dateStored: { [Op.ne]: null } } })
    .then(data => res.send(data))
    .catch(err => {
      res.status(500).send({
        message: err.message || "Failed to find all stored products.",
      });
    });
};

// Retrieve all unstored Products from the database.
exports.findAllUnstored = (req, res) => {
  Product.findAll({ where: { dateStored: null } })
    .then(data => res.send(data))
    .catch(err => {
      res.status(500).send({
        message: err.message || "Failed to find all unstored products.",
      });
    });
};

// Update all Products bought to storage
exports.store = (req, res) => {
  const ids = JSON.parse(req.body.ids);

  Product.update({ dateStored: Sequelize.fn("NOW") }, { where: { id: ids } })
    .then(data => res.send(data))
    .catch(err => {
      res.status(500).send({
        message: err.message || "Failed to find all unstored products.",
      });
    });
};

// Delete a Product with the specified id in the request
exports.delete = (req, res) => {
  const id = req.params.id;

  Product.destroy({
    where: { id: id },
  })
    .then(num => {
      res.send({
        message: "Tutorial was deleted successfully!",
      });
    })
    .catch(err => {
      res.status(500).send({
        message: "Could not delete Tutorial with id=" + id,
      });
    });
};
