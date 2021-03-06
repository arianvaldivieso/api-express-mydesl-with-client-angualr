const { verify } = require('./../utils/jwt');

const myLogger = function (req, res, next) {

  const bearerHeader = req.headers['authorization'];

  console.log(bearerHeader);

  if(typeof bearerHeader !== undefined){
    const bearer = bearerHeader.split(' ');
    const bearerToken = bearer[1];

    let decoded = verify(bearerToken);

    if(decoded){
      req.token = decoded;
      next();
    }else{
      res.sendStatus(403)
    }
  }else{

    res.sendStatus(403)
  }


}

module.exports = myLogger;
