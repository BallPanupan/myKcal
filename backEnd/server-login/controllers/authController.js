const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const User = require('../models/User');

const register = async (req, res) => {
	try {
		const { username, email, password } = req.body;
		const existingUser = await User.findOne({ email });
		if (existingUser) {
			return res.status(400).json({ message: 'User already exists' });
		}
		const hashedPassword = await bcrypt.hash(password, 10);
		const user = new User({ username, email, password: hashedPassword });
		await user.save();
		res.status(201).json({ message: 'User registered successfully' });
	} catch (error) {
		res.status(500).json({ message: 'Failed to register user' });
	}
};

const login = async (req, res) => {
	try {
		const { email, password } = req.body;
		const user = await User.findOne({ email });
		if (!user) {
			return res.status(404).json({ message: 'User not found' });
		}
		const passwordMatch = await bcrypt.compare(password, user.password);
		if (!passwordMatch) {
			return res.status(401).json({ message: 'Invalid password' });
		}
		const token = jwt.sign({ userId: user._id }, 'secret', { expiresIn: '1h' });
		res.status(200).json({ token });
	} catch (error) {
		res.status(500).json({ message: 'Failed to login' });
	}
};

module.exports = { register, login };
