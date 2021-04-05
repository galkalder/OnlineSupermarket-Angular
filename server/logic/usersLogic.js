const usersDao = require("../dao/usersDao");
const encryption = require("../helper/encryption");
const ErrorType = require("../errors/error-type");
const ServerError = require("../errors/server-error");

//registration
async function register(name, lastName, email, idNumber, password, city) {
  if (await usersDao.isEmailExist(email)) {
    throw new ServerError(ErrorType.EMAIL_ALREADY_EXIST);
  }
  const hashPassword = encryption.hashingPassword(password);
  const responseData = await usersDao.register(
    name,
    lastName,
    email,
    idNumber,
    hashPassword,
    city
  );
  const token = encryption.getToken(responseData);
  return { userData: responseData, token };
}

//login
async function login(email, password) {
  const hashPassword = encryption.hashingPassword(password);
  let responseData = await usersDao.login(email, hashPassword);
  if (responseData.length == 0) {
    throw new ServerError(ErrorType.UNAUTHORIZED);
  }
  const userData = {
    id: responseData[0].id,
    name: responseData[0].name,
    lastName: responseData[0].lastName,
    email: email,
    idNumber: responseData[0].idNumber,
    city: responseData[0].city,
    userType: responseData[0].user_type,
  };
  const token = encryption.getToken(userData);
  return { userData, token };
}

//get users details
async function getUserDetails(BearerToken) {
  const userData = encryption.bearerTokenToData(BearerToken);
  return { userData };
}

module.exports = {
  register,
  login,
  getUserDetails,
};
