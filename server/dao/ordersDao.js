const conection = require("./connection-wrapper");
const ErrorType = require("../errors/error-type");
const ServerError = require("../errors/server-error");

//Get number of orders
async function getNumberOfOrders() {
  let sql = "SELECT COUNT(id) AS countId FROM orders";
  try {
    const countOrders = await conection.execute(sql);
    return countOrders;
  } catch (e) {
    throw new ServerError(ErrorType.ORDERS_ERROR);
  }
}

//create new order
async function createOrder(
  userId,
  cartId,
  city,
  street,
  shippingDate,
  creditCard
) {
  let orderDate = new Date();
  const sql =
    "INSERT INTO orders VALUES (null, ?, ?,(SELECT SUM(total_price) FROM cart_product WHERE cart_id = ?),?,?,?,?,?)";
  try {
    const parameters = [
      userId,
      cartId,
      cartId,
      city,
      street,
      shippingDate,
      orderDate,
      creditCard,
    ];
    const response = await conection.executeWithParameters(sql, parameters);
    return response.insertId;
  } catch (e) {
    throw new ServerError(ErrorType.ORDERS_ERROR);
  }
}

//cheack if there is more than three orders per day
async function getFullOrderDay() {
  let sql =
    "SELECT date_format(delivry_date, '%d/%m/%Y') AS countOrders FROM orders GROUP BY delivry_date HAVING COUNT(*) >= 3";
  try {
    const countOrders = await conection.execute(sql);
    return countOrders;
  } catch (e) {
    throw new ServerError(ErrorType.ORDERS_ERROR);
  }
}

module.exports = {
  getNumberOfOrders,
  createOrder,
  getFullOrderDay,
};
