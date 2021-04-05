const conection = require("./connection-wrapper");
const ErrorType = require("../errors/error-type");
const ServerError = require("../errors/server-error");

// get all categories
async function getAllCategories() {
  let sql = "SELECT * FROM category;";
  try {
    const response = await conection.execute(sql);
    return response;
  } catch (e) {
    throw new ServerError(ErrorType.PRODUCT_ERROR);
  }
}

//get all products of category
async function getAllCategoryProducts(categoryId) {
  let sql = "SELECT * FROM products WHERE categoryId = ?";
  try {
    const parameters = [categoryId];
    const response = await conection.executeWithParameters(sql, parameters);
    return response;
  } catch (e) {
    throw new ServerError(ErrorType.PRODUCT_ERROR);
  }
}

module.exports = {
  getAllCategories,
  getAllCategoryProducts,
};
