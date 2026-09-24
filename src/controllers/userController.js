const { User } = require("../models/User");
const Password = require("../utils/Password");

class UserController {
  async register(req, res) {
    try {
      const { email, username, password, age, role } = req.body;

      if (email && username && password && age) {
        const hashedpassword = await Password.hashPassword(password);
        const newUser = await User.create({
          name: username,
          password: hashedpassword,
          email,
          age,
          role,
        });
        const { password: _, ...userData } = newUser.toObject();

        res.status(201).json({
          message: "registered successfully",
          data: userData,
        });
      } else {
        res.status(400).json({
          message: "inputs are required",
        });
      }
    } catch (error) {
      console.log(error);
      res.status(500).json({ message: "error" });
    }
  }

  async login(req, res) {
    try {
      const { email, password } = req.body;
      const foundUser = await User.findOne({ email });

      if (!foundUser) {
        return res.status(404).json({ message: "email not found" });
      }

      const compared = await Password.comparePasswords(
        password,
        foundUser.password
      );

      if (compared) {
        return res.json({ message: "success" });
      } else {
        return res.status(401).json({ message: "password invalid" });
      }
    } catch (error) {
      console.log(error);
      res.status(500).json({ message: "error" });
    }
  }

  async getprofile(req, res) {
    res.json({
      message: "user profile fetched successfully",
      data: req.user,
    });
  }
}

module.exports = new UserController();
