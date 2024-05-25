const express = require('express');
const RatingController = require('../controllers/ratingController');

const router = express.Router();

router.post('/', RatingController.create);
router.get('/content/:contentItemId', RatingController.findByContentItemId);

module.exports = router;