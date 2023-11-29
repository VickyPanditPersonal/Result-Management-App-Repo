const config = require("config");
const jwt = require("jsonwebtoken");
const serverConfig = config.get("app.server");

const secretKey = serverConfig.get("JWT_SECRET");
// const secretKey = config.get("JWT_SECRET");

const signJwt = (payload, expiresIn) => {
  return jwt.sign(payload, secretKey, { expiresIn });
};

const verifyJwt = (token) => {
  try {
    console.log("token: " + secretKey);
    const decodedToken = jwt.verify(token, secretKey);
    return {
      valid: true,
      decodedToken,
    };
  } catch (err) {
    console.error(err);
    return {
      valid: false,
      err,
    };
  }
};

module.exports = { signJwt, verifyJwt };