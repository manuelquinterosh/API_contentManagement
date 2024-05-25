const express = require('express');
const router = express.Router();
const ContentController = require('../controllers/contentController');

router.get('/', ContentController.getAll);
router.get('/:id', ContentController.getById);
router.post('/', ContentController.create);
router.put('/:id', ContentController.update);
router.delete('/:id', ContentController.delete);

module.exports = router;