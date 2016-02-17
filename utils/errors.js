/**
 * Created by shaktsin on 2/17/16.
 */

var errors = exports;

errors.ErrorCodes =  {
  CREDENTIALS_WRONG: "CREDENTIALS_WRONG",
  NOT_REGISTERED_USER: "NOT_REGISTERED_USER",
  SOMETHING_WRONG: "SOMETHING_WRONG",
  NOT_AUTHORISED: "NOT_AUTHORISED",
  TOKEN_EXPIRED: "TOKEN_EXPIRED"
};

errors.Errors = {
  CREDENTIALS_WRONG : "Either username or password is wrong",
  NOT_REGISTERED_USER : "You are not registered with us yet!",
  SOMETHING_WRONG: "Something is broken, please try again",
  NOT_AUTHORISED: "You don't have valid roles, please get in touch with your manager",
  TOKEN_EXPIRED: "Token expired, please login again"
};