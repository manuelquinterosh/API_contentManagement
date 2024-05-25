const pool = require('../db/db');
const User = require('../entities/user');

class UserRepository {
    async findByUsername(username) {
        const [rows] = await pool.query('SELECT * FROM users WHERE username = ?', [username]);
        if(rows.length === 0) return null;
        const row = rows[0];
        return new User(row.id, row.username, row.email, row.password, row.first_name, row.last_name, row.created_at, row.updated_at);        
    }

    async findByEmail(email) {
        const [rows] = await pool.query('SELECT * FROM users WHERE email = ?', [email]);
        if(rows.length === 0) return null;
        const row = rows[0];
        return new User(row.id, row.username, row.email, row.password, row.first_name, row.last_name, row.created_at, row.updated_at);
    }

    async create(user) {
        const [result] = await pool.query(
            'INSERT INTO users (username, email, password, first_name, last_name) VALUES (?, ?, ?, ?, ?)',
            [user.username, user.email, user.password, user.firstName, user.lastName]
        );
        const [rows] = await pool.query('SELECT * FROM users WHERE id = ?', [result.insertId]);
        const row = rows[0];
        return new User(row.id, row.username, row.email, row.password, row.first_name, row.last_name, row.created_at, row.updated_at);
    }
}

module.exports = UserRepository;