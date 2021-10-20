import jwt from "jsonwebtoken";

const generateToken = (id) => {
  return jwt.sign({ id }, "login", {
    expiresIn: "1h",
  });
};

export default generateToken;
