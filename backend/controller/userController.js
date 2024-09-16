
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const User = require('../models/UserModel');
const { JWT_SECRET } = process.env;


const createUser = async (req, res) => {
  console.log(req.body);
    const { username, email, password } = req.body;
    const hashedPassword = await bcrypt.hash(password, 10);
    const user = new User({ username, email, password: hashedPassword });
    await user.save();
    res.json({ message: 'User registered successfully' });
  }

  const loginUser = async (req, res) => {
    console.log(req.body)
    const { email, password } = req.body;
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }
    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      return res.status(401).json({ message: 'Invalid password' });
    }
    console.log(user._id);

    // const token = jwt.sign( JWT_SECRET, { expiresIn: '1h' });
    // how generate token
    const token = jwt.sign({ userId: user._id }, JWT_SECRET);
    console.log(token);
    res.json({token,user});
  }

  module.exports = {
    createUser,
    loginUser
  }