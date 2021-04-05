const cartDao = require("../dao/cartDao");
const encryption = require("../helper/encryption");

//add product to cart
async function addProductToCart(productId, amount, BearerToken) {
  const userData = encryption.bearerTokenToData(BearerToken);
  const cartId = await getCartId(userData.id);
  let response = await cartDao.addProductToCart(productId, amount, userData.id);

  return { cartProductId: response };
}

//get cart Id
async function getCartId(userId) {
  let cartId = await cartDao.getCartId(userId);
  if (!cartId) {
    cartId = await cartDao.createCart(userId);
  }
  return cartId;
}

//get all products in cart
async function getAllProductsInCart(BearerToken) {
  const userData = encryption.bearerTokenToData(BearerToken);
  const cartId = await cartDao.getCartId(userData.id);
  let response;
  if (!cartId) {
    response = [];
  } else {
    response = await cartDao.getAllProductsInCart(cartId);
  }
  return response;
}

//empty cart
async function emptyCart(BearerToken) {
  const userData = encryption.bearerTokenToData(BearerToken);
  const cartId = await cartDao.getCartId(userData.id);
  await cartDao.emptyCart(cartId);
}

//delete product from cart
async function deleteCartProduct(BearerToken, cartProductId) {
  const userData = encryption.bearerTokenToData(BearerToken);
  const cartId = await cartDao.getCartId(userData.id);
  let response = await cartDao.deleteCartProduct(cartId, cartProductId);
  return { statusProduct: response };
}

module.exports = {
  addProductToCart,
  getCartId,
  getAllProductsInCart,
  emptyCart,
  deleteCartProduct,
};
