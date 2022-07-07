var jwt = require("jsonwebtoken");

function verify(token){
  try {
    const decoded = jwt.verify(token, '123456789');

    console.log(decoded);

    return decoded.data;

  } catch(err) {
    console.log(err)
    return false;
  }
}

module.exports = {
  verify
};