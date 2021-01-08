const db = require("../models");
const Product = db.products;
const Op = require("sequelize").Op;
var Sequelize = require("sequelize");

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

// Update Product by the id in the request
exports.update = (req, res) => {
  const id = req.params.id;

  Tutorial.update(req.body, {
    where: { id: id },
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "Tutorial was updated successfully.",
        });
      } else {
        res.send({
          message: `Cannot update Tutorial with id=${id}. Maybe Tutorial was not found or req.body is empty!`,
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Error updating Tutorial with id=" + id,
      });
    });
};

// Update all Products bought to storage
exports.update = (req, res) => {
  Product.update(
    { dateStored: Sequelize.literal("CURRENT_TIMESTAMP") },
    { where: { bought: true } }
  )
    .then(num => {
      if (num == 1) {
        res.send({
          message: "Products was updated successfully.",
        });
      } else {
        res.send({
          message: `Cannot update Products. Maybe Product was not found or req.body is empty!`,
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: err.message || "Error updating Product with id=" + id,
      });
    });
};

// Delete a Product with the specified id in the request
exports.delete = (req, res) => {};
