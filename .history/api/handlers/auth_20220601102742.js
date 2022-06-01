import userSchema from "../models/User.js";

export const register = async (req, res, next) => {
  try {
    const newUser = new userSchema({
      username: req.body.username,
      email: req.body.email,
      password: req.body.password,
    });
    await newUser.save();
    res.status(200).send("New user has been created");
  } catch (err) {
    next(err);
  }
};
