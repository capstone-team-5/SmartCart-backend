const Joi = require("joi");
const createValidator = require("./createValidator");

const favoriteSchema = Joi.object({
  shopper_firebase_uid: Joi.string().required(),
  product_id: Joi.number().integer().required(),
});

module.exports = createValidator(favoriteSchema);
