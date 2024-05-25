const RatingRepository = require('../../repositories/ratingRepository');
const Rating = require('../../entities/rating');

class CreateRating {
    constructor() {
        this.ratingRepository = new RatingRepository();
    }

    async execute({ userId, contentItemId, rating }) {
        const existingRating = await this.ratingRepository.findByUserIdAndContentItemId(userId, contentItemId);
        if (existingRating) {
            throw new Error('User has already rated this content');
        }
        const newRating = new Rating(null, userId, contentItemId, rating);
        return await this.ratingRepository.create(newRating);
    }
}

module.exports = CreateRating;