const Joi = require('joi');

const id = Joi.number().integer();
const firstName = Joi.string().email();
const lastName = Joi.string().min(8);

const createCustomerSchema = Joi.object({
  firstName: firstName.required(),
  lastName: lastName.required(),
});

const updateCustomerSchema = Joi.object({
  firstName: firstName,
  lastName: lastName,
});

const getCustomerSchema = Joi.object({
  id: id.required(),
});

module.exports = { createCustomerSchema, updateCustomerSchema, getCustomerSchema }
