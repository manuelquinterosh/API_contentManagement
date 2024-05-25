const bcrypt = require('bcryptjs');
const UserRepository = require('../../repositories/userRepository');
const User = require('../../entities/user');

class RegisterUser {
    constructor() {
        this.userRepository = new UserRepository();
    }

    async execute({ username, email, password, firstName, lastName }) {
        
        if(!username || !email || !password) {
            throw new Error('Username, email, and password are required');
        }

        const existingUser = await this.userRepository.findByUsername(username) || await this.userRepository.findByEmail(email);
        if (existingUser) {
            throw new Error('Username or email already exists');
        }
        const hashedPassword = await bcrypt.hash(password, 10);
        const newUser = new User(null, username, email, hashedPassword, firstName, lastName);
        return await this.userRepository.create(newUser);
    }
}

module.exports = RegisterUser;