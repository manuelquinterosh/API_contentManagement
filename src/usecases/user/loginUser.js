const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const UserRepository = require('../../repositories/userRepository');

class LoginUser {
   constructor() {
    this.userRepository = new UserRepository();
   }

   async execute({ username, password }) {
    const user = await this.userRepository.findByUsername(username);
    if (!user) {
        throw new Error('Invalid username or password');
    }
    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
        throw new Error('Invalid username or password')
    }

    const token = jwt.sign({ userId: user.id}, process.env.JWT_SECRET, { expiresIn: '1h'});
    return { user, token };
   }
}

module.exports = LoginUser;