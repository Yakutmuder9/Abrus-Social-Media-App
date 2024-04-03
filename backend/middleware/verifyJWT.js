const jwt = require("jsonwebtoken");

const verifyJWT = (req, res, next) => {
  const authHeader = req.headers.authorization || req.headers.Authorization;

  if (!authHeader?.startsWith("Bearer ")) {
    return res.status(401).json({ message: "Unauthorized" });
  }

  const token = authHeader.split(" ")[1];
  const deco = jwt.decode(token);

  console.log("authH", authHeader);
  console.log("token", token);
  console.log("process.env.ACCESS", process.env.REFRESH_TOKEN_SECRET);
  console.log("deco", deco);

  jwt.verify(token, process.env.REFRESH_TOKEN_SECRET, async (err, decoded) => {
    if (err) return res.status(403).json({ message: "Forbidden" });
    req.user = decoded.email;
    req.roles = decoded.roles;
    next();
  });
};

module.exports = verifyJWT;
