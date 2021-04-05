const ordersDao = require("../dao/ordersDao");
const cartLogic = require("../logic/cartLogic");
const encryption = require("../helper/encryption");

//Get number of orders
async function getNumberOfOrders() {
  let responseData = await ordersDao.getNumberOfOrders();
  return responseData;
}

//create new order
async function createOrder(
  BearerToken,
  city,
  street,
  shippingDate,
  creditCard
) {
  const userData = encryption.bearerTokenToData(BearerToken);
  const userId = userData.id;
  const cartId = await cartLogic.getCartId(userData.id);
  let response = await ordersDao.createOrder(
    userId,
    cartId,
    city,
    street,
    shippingDate,
    creditCard
  );
  return response;
}

//cheack if there is more than three orders per day
async function getFullOrderDay() {
  let countOrders = [];
  let responseData = await ordersDao.getFullOrderDay();
  for (let day of responseData) {
    countOrders.push(day.countOrders);
  }
  return countOrders;
}

module.exports = {
  getNumberOfOrders,
  createOrder,
  getFullOrderDay,
};
