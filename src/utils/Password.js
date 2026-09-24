const bcrypt = require("bcryptjs");

class Password {
  static async hashPassword(password) {
    const saltRounds = 10;
    const salt = await bcrypt.genSalt(saltRounds);

    const hashedValue = await bcrypt.hash(password, salt);
    return hashedValue;
  }

  static async comparePasswords(password, hashedPassword) {
    return await bcrypt.compare(password, hashedPassword);
  }
}

module.exports = Password;
