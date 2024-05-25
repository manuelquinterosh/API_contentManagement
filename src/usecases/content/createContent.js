const Content = require('../../entities/contentItem');

async function createContent(contentRepository, contentData) {
    const { title, description, category, thumbnailUrl, contentUrl } = contentData;

    if (!title || !category) {
        throw new Error('Title and category are required');
    }

    const newContent = new Content(null, title, description, category, thumbnailUrl, contentUrl, new Date());
    const createdContent = await contentRepository.create(newContent);
    return createContent;
}

module.exports = createContent;