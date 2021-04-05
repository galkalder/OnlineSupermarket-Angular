const express = require("express");
const router = express.Router();
const categoryLogic = require("../logic/categoryLogic");

// get all categories
router.get("/", async (request, response, next) => {
  try {
    let Response = await categoryLogic.getAllCategories();
    response.send(Response);
  } catch (error) {
    return next(error);
  }
});

//get all products of category
router.get("/:categoryId", async (request, response, next) => {
  try {
    let Response = await categoryLogic.getAllCategoryProducts(
      request.params.categoryId
    );
    response.send(Response);
  } catch (error) {
    return next(error);
  }
});

module.exports = router;
