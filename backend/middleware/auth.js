const UserModel = require("../models/UserModel");
var jwt = require("jsonwebtoken");
require("dotenv").config();
const authUser = async (req, res, next) => {
  let token;
  const { authorization } = req.headers;
  if (authorization && authorization.startsWith("Bearer")) {
    try {
      token = authorization.split(" ")[1];
      const { userID } = jwt.verify(token, process.env.JWT_SECRET);
      if (userID) {
        const user = await UserModel.findById({ _id: userID }).select("-password");
        req.user = user;
        next();
      }else{
        res.status(404).json({ message: "Unauthorized  User data" });
      }
    } catch (error) {
      res.status(error.statusCode || 401).json({ message: "Unauthorized User" });
    }
  }
  if (!token) {
    res
      .status(401)
      .json({ message: "Unauthorized user No token", status: "failure" });
  }
};

module.exports = authUser;
