const expressJwt = require("express-jwt");
const config = require("./config.json");

// Extracting the text from the secret's JSON
let { secret } = config;

function authenticateJwtRequestToken() {
  // Load secret into
  return expressJwt({ secret, algorithms: ["HS256"] }).unless({
    path: [
      // public routes that don't require authentication
      "/users/login",
      "/users/registration",
      "/product/count",
      "/order/count",
      /^\/photo\/.*/,
    ],
  });
}

module.exports = authenticateJwtRequestToken;
