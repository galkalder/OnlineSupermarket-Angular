const conection = require("./connection-wrapper");
const ErrorType = require("../errors/error-type");
const ServerError = require("../errors/server-error");

//add product to cart
async function addProductToCart(productId, amount, userId) {
  const sql =
    "INSERT INTO cart_product VALUES (null, ?, ?,(SELECT price * ? FROM products WHERE id = ?), (SELECT id FROM cart WHERE user_id = ? ORDER BY id DESC LIMIT 1))";
  try {
    const parameters = [productId, amount, amount, productId, userId];
    const response = await conection.executeWithParameters(sql, parameters);
    return response.insertId;
  } catch (e) {
    throw new ServerError(ErrorType.CART_ERROR);
  }
}

//get cart id
async function getCartId(userId) {
  let sql =
    "SELECT MAX(id) AS id From cart WHERE user_id = ? AND id NOT IN (SELECT cartId FROM orders WHERE user_id = ?)";
  try {
    const parameters = [userId, userId];
    const cartId = await conection.executeWithParameters(sql, parameters);
    return cartId[0].id;
  } catch (e) {
    throw new ServerError(ErrorType.CART_ERROR);
  }
}

//create cart
async function createCart(userId) {
  let sql = "INSERT INTO cart (user_id, date) VALUES (?, ?)";
  try {
    const parameters = [userId, new Date()];
    const response = await conection.executeWithParameters(sql, parameters);
    return response.insertId;
  } catch (e) {
    throw new ServerError(ErrorType.CART_ERROR);
  }
}

//get all products in cart
async function getAllProductsInCart(cartId) {
  let sql =
    "SELECT cart_product.id, cart_product.amount, cart_product.total_price, products.name, products.image FROM cart_product JOIN products ON cart_product.product_Id = products.id && cart_product.cart_Id=?";
  try {
    const parameters = [cartId];
    const productsInCart = await conection.executeWithParameters(
      sql,
      parameters
    );
    return productsInCart;
  } catch (e) {
    throw new ServerError(ErrorType.CART_ERROR);
  }
}

//empty cart
async function emptyCart(cartId) {
  let sql = "DELETE FROM cart_product WHERE cart_id = ?";
  try {
    const parameters = [cartId];
    await conection.executeWithParameters(sql, parameters);
  } catch (e) {
    throw new ServerError(ErrorType.CART_ERROR);
  }
}

//delete product from cart
async function deleteCartProduct(cartId, cartProductId) {
  let sql = "DELETE FROM cart_product WHERE id = ? AND cart_id = ?";
  try {
    const parameters = [cartProductId, cartId];
    const productsInCart = await conection.executeWithParameters(
      sql,
      parameters
    );
    return productsInCart;
  } catch (e) {
    throw new ServerError(ErrorType.CART_ERROR);
  }
}

module.exports = {
  addProductToCart,
  getCartId,
  createCart,
  getAllProductsInCart,
  emptyCart,
  deleteCartProduct,
};
