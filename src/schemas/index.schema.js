import Joi from 'joi';

export const registerUser = Joi.object({
    fullname: Joi.string().max(54).required(),
    email: Joi.string().required().email()
});

export const userUpdate = Joi.object({
  fullname: Joi.string(),
  email: Joi.string()
})
