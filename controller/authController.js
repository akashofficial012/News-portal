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

    const { email, name, password, category } = req.body

    if (!name) {
        return res.status(404).json({ message: 'please provide name' })
    }
    if (!password) {
        return res.status(404).json({ message: 'please provide password' })
    }
    if (!category) {
        return res.status(404).json({ message: 'please provide category' })
    }
    if (!email) {
        return res.status(404).json({ message: 'please provide email' })
    }
    if (email && !email.match(/^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/)) {
        return res.status(404).json({ message: 'please provide valide email' })
    }
    try {
        const writer = await authModel.findOne({ email: email.trim() })
        if (writer) {
            return res.status(404).json({ message: 'User alreasy exit' })
        } else {
            const new_writer = await authModel.create({
                name: name.trim(),
                email: email.trim(),
                password: await bcrypt.hash(password.trim(), 10),
                category: category.trim(),
                role: 'writer'
            })
            return res.status(201).json({ message: 'writer add success', writer: new_writer })
        }
    } catch (error) {
        return res.status(500).json({ message: 'internal server error' })
    }
}

get_writers = async (req, res) => {
    try {
        const writers = await authModel.find({ role: "writer" }).sort({ createdAt: -1 })
        return res.status(200).json({ writers })
    } catch (error) {
        return res.status(500).json({ message: 'internal server error' })
    }
}
}

 

module.exports = new AuthController();
