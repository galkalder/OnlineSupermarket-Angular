const categoryDao = require("../dao/categoryDao");

// get all categories
async function getAllCategories() {
  let response = await categoryDao.getAllCategories();
  return response;
}

//get all products of category
async function getAllCategoryProducts(categoryId) {
  let response = await categoryDao.getAllCategoryProducts(categoryId);
  return response;
}

module.exports = {
  getAllCategories,
  getAllCategoryProducts,
};
