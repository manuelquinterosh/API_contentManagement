class Rating {
    constructor(id, userId, contentItemId, rating, createdAt) {
        this.id = id;
        this.userId = userId;
        this.contentItemId = contentItemId;
        this.rating = rating;
        this.createdAt = createdAt;
    }
}

module.exports = Rating;