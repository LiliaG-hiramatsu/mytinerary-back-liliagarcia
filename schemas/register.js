import joi from "joi";

let registerSchema = joi.object({
    name: joi.string().required().min(4).max(20).messages({
        'string.min': "name must have at least 4 characters!",
        'string.max': "name must be less than 20 characters!",
        'any.required': "name is required", //para cuando NO se envia el dato
        'string.empty': "name cannot be empty!" //para cuando se envia VACIO
    }),
    mail: joi.string().required(),
    password: joi.string().required(),
    country: joi.string().required(),
    lastName: joi.string().min(4).max(20).empty('').messages({
        'string.min': "lastname must have at least 4 characters!",
        'string.max': "lastname must be less than 20 characters!"
    })
})

export default registerSchema