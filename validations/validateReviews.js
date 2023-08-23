const Joi = require("joi");
const createValidator = require("./createValidator");

const ReviewSchema = Joi.object({
  review_rating: Joi.number().min(1).max(5).required(),
  review_comment: Joi.string().allow("").optional(),
  review_timestamp: Joi.date().optional(),
});

module.exports = createValidator(ReviewSchema);
