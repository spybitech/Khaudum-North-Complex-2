// createUser.js
require('dotenv').config();
const mongoose = require('mongoose');
const User = require('./models/user.model');

const createUser = async () => {
    await mongoose.connect(process.env.MONGODB_URI);
    console.log('DB connected');

    await User.deleteMany(); // Optional: clears existing users
    
    await User.create({
        username: 'techmanager',
        password: 'SecurePassword123!', // Choose a strong password
        role: 'Technical Manager'
    });

    console.log('Admin user created successfully!');
    mongoose.connection.close();
};

createUser();