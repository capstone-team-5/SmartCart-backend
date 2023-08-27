const Joi = require("joi");
const createValidator = require("./createValidator");

const UserSchema = Joi.object({
  user_firebase_uid: Joi.string().required(),
  user_email: Joi.string().required(),
  user_first_name: Joi.string().required(),
  user_last_name: Joi.string().required(),
  user_instagram_link: Joi.string().allow("").optional(),
  user_facebook_link: Joi.string().allow("").optional(),
  user_dietary_preferences: Joi.array().items(Joi.string()).optional(),
});

module.exports = createValidator(UserSchema);
