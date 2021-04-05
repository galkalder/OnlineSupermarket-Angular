const jwt = require("jsonwebtoken");
const crypto = require("crypto");
const config = require("./config.json");
const ServerError = require("../errors/server-error");
const ErrorType = require("../errors/error-type");

const bearerTokenToData = (bearerToken) => {
  const decodeData = decryptToken(bearerToken, "Bearer ");
  return decodeData.data;
};

function getToken(data, time = "1y") {
  const token = createToken(data, time, config.secretAccessToken);
  return token;
}

function createToken(data, time, secret) {
  const token = jwt.sign({ data }, secret, {
    expiresIn: time,
  });
  return token;
}
function decryptToken(token, cutField) {
  if (cutField) {
    token = token.slice(cutField.length);
  }
  const decodeData = jwt.decode(token);
  // if (decodeData.exp * 1000 < new Date().getTime()) {
  //   throw new ServerError(ErrorType.REFRESH_TOKEN_ERROR);
  // }
  return decodeData;
}

function hashingPassword(password) {
  const saltRight = "sdfsd%43flkjfo";
  const saltLeft = "!9dsdon$#f3ws";
  const hashPassword = crypto
    .createHash("md5")
    .update(saltLeft + password + saltRight)
    .digest("hex");
  return hashPassword;
}

module.exports = {
  getToken,
  hashingPassword,
  bearerTokenToData,
};
