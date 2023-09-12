import joi from "joi";

let registerSchema = joi.object({
    name: joi.string().required().min(4).max(20).messages({
        'string.min': "name must have at least 4 characters!",
        'string.max': "name must be less than 20 characters!",
        'any.required': "name is required", //para cuando NO se envia el dato
        'string.empty': "name cannot be empty!" //para cuando se envia VACIO
    }),
    lastName: joi.string().min(4).max(20).empty('').messages({
        'string.min': "lastname must have at least 4 characters!",
        'string.max': "lastname must be less than 20 characters!"
    }),
    country: joi.string().required().messages({
        'any.required': "country is required",
        'string.empty': "country cannot be empty!"
    }),
    photo: joi.string().uri().messages({
        'string.uri': 'invalid url'
    }),
    mail: joi.string().required().min(8).max(20).email({ minDomainSegments: 2}).messages({
        'string.min': "mail must have at least 8 characters!",
        'string.max': "mail must be less than 20 characters!",
        'any.required': 'mail is required',
        'string.empty': 'mail cannot be empty!',
        'string.email': 'invalid email'
    }),
    password: joi.string().required().alphanum().min(8).max(20).messages({
        'string.min': "password must have at least 8 characters!",
        'string.max': "password must be less than 20 characters!",
        'any.required': "password is required",
        'string.empty': "password cannot be empty!"
    })
})

export default registerSchema