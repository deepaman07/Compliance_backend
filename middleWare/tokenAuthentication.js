var jwt = require("jsonwebtoken");
const JWT_SECRET_KEY = process.env.JWT_SECRET_KEY;
const tokenAuthentication = (req, res, next) => {
  const authHeader = req.headers["authorization"];
  const token = authHeader && authHeader.split(" ")[1];
  if (!token) {
    res.status(401).send({ error: "invalid token" });
  }
  try {
    const string = jwt.verify(token, JWT_SECRET_KEY);
    // req.user=data.user;
    next();
  } catch (error) {
    res.send(401);
  }
};
module.exports = tokenAuthentication;
