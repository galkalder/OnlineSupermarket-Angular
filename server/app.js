const express = require("express");
const cors = require("cors");
const loginFilter = require("./login-filter");
const server = express();
const ServerError = require("./errors/server-error");
const ErrorType = require("./errors/error-type");
const errorHandler = require("./errors/error-handler");

const productsController = require("./controllers/productsController");
const cartController = require("./controllers/cartController");
const categoryController = require("./controllers/categoryController");
const usersController = require("./controllers/usersController");
const ordersController = require("./controllers/ordersController");

server.use(cors({ origin: "http://localhost:4200", credentials: true }));

server.use(express.json());
server.use(express.urlencoded({ extended: false }));

// server.use(loginFilter());
// server.use(function (err, req, res, next) {
//   if (401 == err.status) {
//     throw new ServerError(ErrorType.UNAUTHORIZED);
//   }
// });

const PORT = process.env.PORT || 3001;

server.use("/product", productsController);
server.use("/cart", cartController);
server.use("/category", categoryController);
server.use("/users", usersController);
server.use("/order", ordersController);

server.use(errorHandler);
server.listen(PORT, () => {
  console.log(`server is listening on Port ${PORT}`);
});
