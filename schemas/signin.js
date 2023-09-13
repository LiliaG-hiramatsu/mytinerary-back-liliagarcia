import joi from "joi";

let signinSchema = joi.object({
    mail: joi.string().required().min(8).max(100).email({ minDomainSegments: 2}).messages({
        'string.min': "mail must have at least 8 characters!",
        'string.max': "mail must be less than 20 characters!",
        'any.required': "mail is required", //para cuando NO se envia el dato
        'string.empty': "mail cannot be empty!", //para cuando se envia VACIO
        'string.email': 'invalid email'
    }),
    password: joi.string().required().alphanum().min(8).max(20).messages({
        'string.min': "password must have at least 8 characters!",
        'string.max': "password must be less than 20 characters!",
        'any.required': "password is required",
        'string.empty': "password cannot be empty!"
    })
})

export default signinSchema