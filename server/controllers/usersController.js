const express = require("express");
const router = express.Router();
const usersLogic = require("../logic/usersLogic");

//registration
router.post("/registration", async (request, response, next) => {
  try {
    let responseData = await usersLogic.register(
      request.body.name,
      request.body.lastName,
      request.body.email,
      request.body.idNumber,
      request.body.password,
      request.body.city
    );
    response.send(responseData);
  } catch (error) {
    return next(error);
  }
});

//login
router.post("/login", async (request, response, next) => {
  try {
    let responseData = await usersLogic.login(
      request.body.email,
      request.body.password
    );
    response.send(responseData);
  } catch (error) {
    return next(error);
  }
});

//get user details
router.get("/", async (request, response, next) => {
  try {
    let responseData = await usersLogic.getUserDetails(
      request.headers.authorization
    );
    response.send(responseData);
  } catch (error) {
    return next(error);
  }
});

module.exports = router;
