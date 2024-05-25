const pool = require('../db/db');
const ContentItem = require('../entities/contentItem');

class ContentRepository {
    async findAll() {
        const [rows] = await pool.query('SELECT * FROM content_items');
        return rows.map(row => new ContentItem(
            row.id, row.title, row.description, row.category, row.thumbnail_url, row.content_url, row.created_at
        ));
    }

    async findById(id) {
        const [rows] = await pool.query('SELECT * FROM content_items WHERE id = ?', [id]);
        if (rows.length === 0) return null;
        const row = rows[0];
        return new ContentItem(row.id, row.title, row.description, row.category, row.thumbnail_url, row.content_url, row.created_at);
    }

    async create(contentItem) {
        const [result] = await pool.query(
            'INSERT INTO content_items (title, description, category, thumbnail_url, content_url) VALUES (?, ?, ?, ?, ?)',
            [contentItem.title, contentItem.description, contentItem.category, contentItem.thumbnailUrl, contentItem.contentUrl]
        );
        const [rows] = await pool.query('SELECT * FROM content_items WHERE id = ?', [result.insertId]);
        const row = rows[0];
        return new ContentItem(row.id, row.title, row.description, row.category, row.thumbnail_url, row.content_url, row.created_at);
    }

    async update(id, contentItem) {
        const [result] = await pool.query(
            'UPDATE content_items SET title = ?, description = ?, category = ?, thumbnail_url = ?, content_url = ? WHERE id = ?',
            [contentItem.title, contentItem.description, contentItem.category, contentItem.thumbnailUrl, contentItem.contentUrl, id]
        );
        if(result.affectedRows === 0) return null;
        const [rows] = await pool.query('SELECT * FROM content_items WHERE id = ?', [id]);
        const row = rows[0];
        return new ContentItem(row.id, row.title, row.description, row.category, row.thumbnail_url, row.content_url, row.created_at);
    }

    async delete(id) {
        const [rows] = await pool.query('SELECT * FROM content_items WHERE id = ?', [id]);
        if(rows.length === 0) return null;
        const [result] = await pool.query('DELETE FROM content_items WHERE id = ?', [id]);
        if(result.affectedRows === 0) return null;
        return new ContentItem(rows[0].id, rows[0].title, rows[0].description, rows[0].category, rows[0].thumbnail_url, rows[0].content_url, rows[0].created_at);
    }
}

module.exports = ContentRepository;