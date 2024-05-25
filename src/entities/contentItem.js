class ContentItem {
    constructor(id, title, description, category, thumbnailUrl, contentUrl, createdAt) {
        this.id = id;
        this.title = title;
        this.description = description;
        this.category = category;
        this.thumbnailUrl = thumbnailUrl;
        this.contentUrl = contentUrl;
        this.createdAt = createdAt;
    }
}

module.exports = ContentItem;