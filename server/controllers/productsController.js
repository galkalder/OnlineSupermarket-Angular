const express = require("express");
const router = express.Router();
const productsLogic = require("../logic/productsLogic");

//Get all products
router.get("/", async (request, response, next) => {
  try {
    let Response = await productsLogic.getAllProducts();
    response.send(Response);
  } catch (error) {
    return next(error);
  }
});

//Get number of products
router.get("/count", async (request, response, next) => {
  try {
    let responseData = await productsLogic.getNumberOfProducts();
    response.send(responseData);
  } catch (error) {
    return next(error);
  }
});

//add new product
router.post("/", async (request, response, next) => {
  try {
    let Response = await productsLogic.addNewProduct(
      request.headers.authorization,
      request.body.name,
      request.body.image,
      request.body.category,
      request.body.price
    );
    response.send(Response);
  } catch (error) {
    return next(error);
  }
});

module.exports = router;
