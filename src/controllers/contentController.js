const ContentUseCase = require('../usecases/content/contentUseCase');
const ContentRepository = require('../repositories/contentRepository');

const contentRepository = new ContentRepository();
const contentUseCase = new ContentUseCase(contentRepository);

class ContentController {
    
    static async getAll(req, res) {
        try {
           const contentItems = await contentUseCase.getAll();
           res.status(200).json(contentItems);
        } catch (error) {
           res.status(400).json({ message: error.message });
        }
    }

    static async getById(req, res) {
        try {
           const { id } = req.params;
           const contentItem = await contentUseCase.getById(id);
           res.status(200).json(contentItem);
        } catch (error) {
           res.status(400).json({ message: error.message });
        }
    }

    static async create(req, res) {
        try {
            const createdContentItem = await contentUseCase.create(req.body);
            res.status(201).json({ message: 'Content created successfully', createdContentItem });
        } catch (error) {
            res.status(400).json({ message: error.message });
        }
    }

    static async update(req, res) {
        try {
           const { id } = req.params;   
           const result = await contentUseCase.update(id, req.body);
           res.status(200).json({ message: 'Content updated successfully', result });
        } catch (error) {
            res.status(400).json({ message: error.message });
        }
    }

    static async delete(req, res) {
        try {
           const { id } = req.params;
           const result = await contentUseCase.delete(id);
           res.status(200).json({ message: 'Content deleted successfully', result });
        } catch (error) {
            res.status(400).json({ message: error.message });
        }
    }
}

module.exports = ContentController;