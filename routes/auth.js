import { Router } from "express";
import register from "../controllers/auth/register.js";
import validator from "../middlewares/validator.js";
import registerSchema from "../schemas/register.js";
import existsUser from "../middlewares/existsUser.js";
import isValidPassword from "../middlewares/isValidPassword.js";

let authRouter = Router()

//register requiere de middlewares para validar/verificar/autenticar/autorizar/etc.
//validar datos con JOI
//validar que la cuenta no existe para que no haya re-registro
//hashear la contrasena
authRouter.post('/register', validator(registerSchema), existsUser, isValidPassword, register)

export default authRouter