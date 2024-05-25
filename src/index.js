const express = require('express');
require('dotenv').config();
const app = express();
const port = 3000;
const pool = require('./db/db');
const contentRoutes = require('./routes/contentRoutes');
const userRoutes = require('./routes/userRoutes');
const ratingRoutes = require('./routes/ratingRoutes');

app.use(express.json());

app.use('/content-items', contentRoutes);
app.use('/users', userRoutes);
app.use('/ratings', ratingRoutes);

// Verificar conexión a la base de datos
pool.getConnection((err, connection) => {
    if (err) {
      console.error('Error connecting to the database:', err.stack);
    } else {
      console.log('Database connection successful');
      connection.release();
    }
  });

app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
});