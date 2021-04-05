const conection = require("./connection-wrapper");
const ErrorType = require("../errors/error-type");
const ServerError = require("../errors/server-error");

// get all products
async function getAllProducts() {
  let sql = "SELECT * FROM products;";
  try {
    const productsTypes = await conection.execute(sql);
    return productsTypes;
  } catch (e) {
    throw new ServerError(ErrorType.PRODUCT_ERROR);
  }
}

//Get number of products
async function getNumberOfProducts() {
  let sql = "SELECT COUNT(id) AS countId FROM products";
  try {
    const countProducts = await conection.execute(sql);
    return countProducts;
  } catch (e) {
    throw new ServerError(ErrorType.PRODUCT_ERROR);
  }
}

module.exports = {
  getAllProducts,
  getNumberOfProducts,
};
