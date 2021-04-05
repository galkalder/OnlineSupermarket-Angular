const productsDao = require("../dao/productsDao");

// get all products
async function getAllProducts() {
  let response = await productsDao.getAllProducts();
  return response;
}

//Get number of products
async function getNumberOfProducts() {
  let responseData = await productsDao.getNumberOfProducts();
  return responseData;
}

//Get number of products
async function addNewProduct(BearerToken, name, image, category, price) {
  const userData = encryption.bearerTokenToData(BearerToken);
  const userType = userData.userType;
  let responseData = await productsDao.addNewProduct(
    userType,
    name,
    image,
    category,
    price
  );
  return responseData;
}

module.exports = {
  getAllProducts,
  getNumberOfProducts,
  addNewProduct,
};
