const authModel = require("../model/authModel");
const bcrypt = require("bcrypt"); 
const jwt = require("jsonwebtoken");

class AuthController {
  login = async (req, res) => {
    const { email, password } = req.body;
    if (!email || !password) {
      return res.json({ message: "Email and password are required" });
    }
    try {
      const user = await authModel.findOne({ email }).select("+password");

      if (!user) {
        return res.json({ message: "User not found" });
      }
      const match = await bcrypt.compare(password, user.password);
      if (!match) {
        return res.json({ message: "Invalid password" });
      }
      const payload = {
        id: user.id,
        name: user.name,
        category: user.category,
        role: user.role,
      };
      const token = jwt.sign(payload, process.env.JWT_SECRET, {
        expiresIn: process.env.JWT_EXPIRATION || "1h",
      });

      return res.json({ message: "Login successful", token });
    } catch (error) {
      console.error("Login Error:", error);
      return res.json({ message: "Internal Server Error" });
    }
  };

  add_writer = async (req, res) => {
    const { name, email, password, category } = req.body;
  }
}

 

module.exports = new AuthController();
