const createContent = require('./createContent');

class ContentUseCase {
    constructor(contentRepository) {
        this.contentRepository = contentRepository;
    }

    async create(contentData) {
        return await createContent(this.contentRepository, contentData);
    }

    async getById(id) {
        const content = await this.contentRepository.findById(id);
        if (!content) throw new Error('Content not found');
        return content;
    }

    async getAll() {
        return await this.contentRepository.findAll();
    }

    async update(id, contentData) {
        const content = await this.contentRepository.findById(id);
        if (!content) throw new Error('Content not found');
        return await this.contentRepository.update(id, contentData);
    }

    async delete(id) {
        const content = await this.contentRepository.findById(id);
        if (!content) throw new Error('Content not found');
        return await this.contentRepository.delete(id);
    }
}

module.exports = ContentUseCase;