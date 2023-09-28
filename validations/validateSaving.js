const Joi = require("joi");
const createValidator = require("./createValidator");

const savingSchema = Joi.object({
  shopper_firebase_uid: Joi.string().required(),
  saving_timestamp: Joi.date().required(),
  store_name: Joi.string().required(),
  saving_per_trip: Joi.number().precision(2).positive().required(),
  saving_total: Joi.number().precision(2).positive(),
});

module.exports = createValidator(savingSchema);
