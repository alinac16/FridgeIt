module.exports = app => {
  const products = require("../controllers/product.controller.js");

  var router = require("express").Router();

  // Create a new Product
  router.post("/", products.create);

  // Retrieve all Products
  router.get("/", products.findAll);

  // // Retrieve all stored Products
  // router.get("/stored", products.findAllStored);

  // // Retrieve all unstored Products
  // router.get("/unstored", products.findAllUnstored);

  // Update bought Products
  router.put("/store", products.store);

  // Delete a Product with id
  router.delete("/:id", products.delete);

  // // Update a Product with id
  // router.put("/:id", products.update);

  // // Retrieve a single Product with id
  // router.get("/:id", products.findOne);

  // // Create a new Product
  // router.delete("/", products.deleteAll);

  app.use("/api/products", router);
};
