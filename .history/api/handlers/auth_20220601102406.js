import userSchema from "../models/User.js";

export const register = async (req, res, next) => {
  try {
    const newUser = new userSchema({
      username: req.body.username,
      email: req.body.email,
      password: req.body.password,
    });
  } catch (err) {
    next(err);
  }
};
