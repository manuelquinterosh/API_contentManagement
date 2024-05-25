const CreateRating = require('../usecases/rating/createRating');
const GetRatingsByContentId = require('../usecases/rating/getRatingsByContentId');

class RatingController {
    static async create(req, res) {
        try {
           const createRating = new CreateRating();
           const rating = await createRating.execute(req.body);
           res.status(201).json({ message: 'Rating created successfully', rating });
        } catch (error) {
            res.status(400).json({ message: error.message });
        }
    }

    static async findByContentItemId(req, res) {
        try {
            const { contentItemId } = req.params;
            const getRatingsByContentId = new GetRatingsByContentId();
            const ratings = await getRatingsByContentId.execute(contentItemId);
            res.status(200).json({ ratings });
        } catch (error) {
            res.status(400).json({ message: error.message });
        }
    }
}

module.exports = RatingController;