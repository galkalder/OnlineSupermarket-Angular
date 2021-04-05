const express = require("express");
const router = express.Router();
const ordersLogic = require("../logic/ordersLogic");

//Get number of orders
router.get("/count", async (request, response, next) => {
  try {
    let responseData = await ordersLogic.getNumberOfOrders(
      request.params.countId
    );
    response.send(responseData);
  } catch (error) {
    return next(error);
  }
});

//create new order
router.post("/", async (request, response, next) => {
  try {
    let Response = await ordersLogic.createOrder(
      request.headers.authorization,
      request.body.city,
      request.body.street,
      request.body.shippingDate,
      request.body.creditCard
    );
    response.json(Response);
  } catch (error) {
    return next(error);
  }
});

//check if there is more than three orders per day
router.get("/", async (request, response, next) => {
  try {
    let Response = await ordersLogic.getFullOrderDay();
    response.json(Response);
  } catch (error) {
    return next(error);
  }
});

module.exports = router;
