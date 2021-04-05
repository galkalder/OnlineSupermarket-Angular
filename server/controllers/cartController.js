const express = require("express");
const router = express.Router();
const cartLogic = require("../logic/cartLogic");

//add product to cart
router.post("/", async (request, response, next) => {
  try {
    let Response = await cartLogic.addProductToCart(
      request.body.productId,
      request.body.amount,
      request.headers.authorization
    );
    response.send(Response);
  } catch (error) {
    return next(error);
  }
});

//get all products in cart
router.get("/product", async (request, response, next) => {
  try {
    let Response = await cartLogic.getAllProductsInCart(
      request.headers.authorization
    );
    response.send(Response);
  } catch (error) {
    return next(error);
  }
});

//empty cart
router.delete("/empty", async (request, response, next) => {
  try {
    await cartLogic.emptyCart(request.headers.authorization);
    response.send();
  } catch (error) {
    return next(error);
  }
});

//delete product from cart
router.delete("/:cartProductId", async (request, response, next) => {
  try {
    let Response = await cartLogic.deleteCartProduct(
      request.headers.authorization,
      request.params.cartProductId
    );
    response.send(Response);
  } catch (error) {
    return next(error);
  }
});

module.exports = router;
