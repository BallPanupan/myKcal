const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const Users = require('../mongooseModels/Users');

const register = async (req, res) => {
	try {
		const { username, email, password } = req.body;
		const existingUser = await Users.findOne({ email });
		if (existingUser) {
			return res.status(400).json({ message: 'User already exists' });
		}
		const hashedPassword = await bcrypt.hash(password, 10);
		const user = new Users({ username, email, password: hashedPassword });
		await user.save(); // Corrected line: use save() on the user instance
		res.status(201).json({ message: 'User registered successfully' });
	} catch (error) {
		console.error('Register:', error);
		res.status(500).json({ message: 'Failed to register user' });
	}
};


const login = async (req, res) => {
	try {
		const { email, password } = req.body;
		const user = await Users.findOne({ email });
		if (!user) {
			return res.status(404).json({ message: 'User not found' });
		}
		const passwordMatch = await bcrypt.compare(password, user.password); // Compare hashed password
		if (!passwordMatch) {
			return res.status(401).json({ message: 'Invalid password' });
		}
		const token = jwt.sign({ userId: user._id }, 'secret', { expiresIn: '20s' });
		res.status(200).json({ token });
	} catch (error) {
		console.error('Login:', error);
		res.status(500).json({ message: 'Failed to login' });
	}
};

const profile = async (req, res) => {
	try {		
		// Assuming you are using JWT for authentication and the user ID is stored in req.user
		console.log('--> user:', req.user.userId);
		const user = await Users.findById(req.user.userId);
		if (!user) {
			return res.status(404).json({ message: 'User not found' });
		}
		res.status(200).json(user);
	} catch (error) {
		console.error('Profile:', error);
		res.status(500).json({ message: 'Failed to fetch profile' });
		// curl -X GET http://localhost:3000/profile -H 
		// "Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2NWRhZDY0ZTg3ZTk2MTUwY2E5NzFjZWMiLCJpYXQiOjE3MDg4NDExODAsImV4cCI6MTcwODg0NDc4MH0.zTupSCII5MNsHy47omfUD7_nKpMyBV-nA0czEPeFYcc"

	}
};


module.exports = {
	register,
	login,
	profile
};
