const pool = require('../db/db');
const Rating = require('../entities/rating');

class RatingRepository {
    async create(rating) {
        const [result] = await pool.query(
            'INSERT INTO ratings (user_id, content_item_id, rating) VALUES (?, ?, ?)',
            [rating.userId, rating.contentItemId, rating.rating]
        );
        const [rows] = await pool.query('SELECT * FROM ratings WHERE id = ?', [result.insertId]);
        const row = rows[0];
        return new Rating(row.id, row.user_id, row.content_item_id, row.rating, row.created_at);
    }

    async findByContentItemId(contentItemId) {
        const [rows] = await pool.query('SELECT * FROM ratings WHERE content_item_id = ?', [contentItemId]);
        return rows.map(row => new Rating(row.id, row.user_id, row.content_item_id, row.rating, row.created_at));
    }

    async findByUserIdAndContentItemId(userId, contentItemId) {
        const [rows] = await pool.query('SELECT * FROM ratings WHERE user_id = ? AND content_item_id = ?', [userId, contentItemId]);
        if (rows.length === 0) return null;
        const row = rows[0];
        return new Rating(row.id, row.user_id, row.content_item_id, row.rating, row.created_at);
    }
}

module.exports = RatingRepository;