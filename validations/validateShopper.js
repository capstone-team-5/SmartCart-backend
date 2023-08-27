const Joi = require("joi");
const createValidator = require("./createValidator");

const ShopperSchema = Joi.object({
  shopper_firebase_uid: Joi.string().required(),
  shopper_email: Joi.string().required(),
  shopper_first_name: Joi.string().required(),
  shopper_last_name: Joi.string().required(),
  shopper_profile_pic: Joi.string().allow("").optional(),
  shopper_instagram_link: Joi.string().allow("").optional(),
  shopper_facebook_link: Joi.string().allow("").optional(),
  shopper_dietary_preferences: Joi.array().items(Joi.string()).optional(),
});

module.exports = createValidator(ShopperSchema);
