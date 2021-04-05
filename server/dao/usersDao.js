const conection = require("./connection-wrapper");
const ErrorType = require("../errors/error-type");
const ServerError = require("../errors/server-error");

// registration
async function register(name, lastName, email, idNumber, password, city) {
  let sql = "INSERT INTO users VALUES (null, ?, ?, ?, ?, ?, ?, 'user')";
  try {
    const parameters = [name, lastName, email, idNumber, password, city];
    const response = await conection.executeWithParameters(sql, parameters);
    const responseData = {
      name: name,
      lastName: lastName,
      email: email,
      idNumber: idNumber,
      city: city,
      userId: response.insertId,
      userType: "user",
    };
    return responseData;
  } catch (e) {
    throw new ServerError(ErrorType.GENERAL_ERROR);
  }
}

//login
async function login(email, password) {
  let sql = "SELECT * FROM users WHERE email = ? && password = ?";
  try {
    const parameters = [email, password];
    const responseData = await conection.executeWithParameters(sql, parameters);
    return responseData;
  } catch (e) {
    throw new ServerError(ErrorType.GENERAL_ERROR, sql, e);
  }
}

async function isEmailExist(email) {
  let sql = "SELECT * FROM users WHERE email = ?";
  try {
    const parameters = [email];
    const responseData = await conection.executeWithParameters(sql, parameters);
    if (responseData.length == 0) {
      return false;
    }
    return true;
  } catch (e) {
    throw new ServerError(ErrorType.GENERAL_ERROR, sql, e);
  }
}

module.exports = { register, login, isEmailExist };
