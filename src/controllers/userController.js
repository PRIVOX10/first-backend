class UserController {
  async register(req, res) {
    try {
      const { email, username, password, age } = req.body;

      if (email && username && password && age) {
        const newUser = await User.create({
          name: username,
          password,
          email,
          age,
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

  async getprofile(req, res) {
    res.json({
      message: "user profile fetched successfully",
      data: req.user,
    });
  }
}

module.exports = new UserController();
