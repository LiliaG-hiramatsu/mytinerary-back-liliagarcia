import { Router } from "express";

import register from "../controllers/auth/register.js";
import signin from "../controllers/auth/signin.js";

import validator from "../middlewares/validator.js";
import existsUser from "../middlewares/existsUser.js";
import isValidPassword from "../middlewares/isValidPassword.js";
import notExistsUser from "../middlewares/notExistsUser.js";
import isPasswordOk from "../middlewares/isPasswordOk.js";
import isValidToken from "../middlewares/isValidToken.js";

import registerSchema from "../schemas/register.js";
import signinSchema from "../schemas/signin.js"

let authRouter = Router()

//register requiere de middlewares para validar/verificar/autenticar/autorizar/etc.
//validar datos con JOI
//validar que la cuenta no existe para que no haya re-registro
//hashear la contrasena
authRouter.post('/register', 
        validator(registerSchema), 
        existsUser, 
        isValidPassword, 
        register)

authRouter.post("/signin", 
        validator(signinSchema), 
        notExistsUser, 
        isPasswordOk, 
        isValidToken, 
        signin)

export default authRouter