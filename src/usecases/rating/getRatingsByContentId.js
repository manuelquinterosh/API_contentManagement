const RatingRepository = require('../../repositories/ratingRepository');

class GetRatingsByContentId {
    constructor() {
        this.ratingRepository = new RatingRepository();
    }

    async execute(contentItemId) {
        return await this.ratingRepository.findByContentItemId(contentItemId);
    }
}

module.exports = GetRatingsByContentId;