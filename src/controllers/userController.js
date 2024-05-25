const RegisterUser = require('../usecases/user/registerUser');
const LoginUser = require('../usecases/user/loginUser');

class UserController {
    static async register(req, res) {
        try {
            const registerUser = new RegisterUser();
            const user = await registerUser.execute(req.body);
            res.status(201).json({ message: 'User registered successfully', user });
        } catch (error) {
            res.status(400).json({ message: error.message });
        }
    }

    static async login(req, res) {
        try {
           const loginUser = new LoginUser();
           const { user, token } = await loginUser.execute(req.body);
           res.status(200).json({ message: 'Login successful', user, token });
        } catch (error) {
            res.status(400).json({ message: error.message });
        }
    }
}

module.exports = UserController;