const ErrorType = {
  GENERAL_ERROR: {
    id: 1,
    httpCode: 600,
    message:
      "A big fuck up which we'll never tell you of had just happened. And now : A big fat lie....'A general error ....'",
    isShowStackTrace: true,
  },
  EMAIL_ALREADY_EXIST: {
    id: 2,
    httpCode: 601,
    message: "Email is already exist",
    isShowStackTrace: false,
  },
  UNAUTHORIZED: {
    id: 3,
    httpCode: 401,
    message: "Invalid user name or password",
    isShowStackTrace: false,
  },
  FILE_MISSING_ERROR: {
    id: 4,
    httpCode: 432,
    message: "you must add a picture",
    isShowStackTrace: false,
  },
  CART_ERROR: {
    id: 5,
    httpCode: 410,
    message: "No carts available",
    isShowStackTrace: true,
  },
  PRODUCT_ERROR: {
    id: 6,
    httpCode: 410,
    message: "No products available",
    isShowStackTrace: true,
  },
  ORDERS_ERROR: {
    id: 7,
    httpCode: 410,
    message: "There are no orders",
    isShowStackTrace: true,
  },
};

module.exports = ErrorType;
