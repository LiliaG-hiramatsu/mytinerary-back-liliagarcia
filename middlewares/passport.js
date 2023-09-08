import User from "../models/User.js";
import passport from "passport";
import { Strategy, ExtractJwt } from "passport-jwt";

export default passport.use(    // obligo al pasaporte a usar una estrategia de extraccion de token
    "jwt",
    new Strategy(
        // depende de objeto de configuracion de la estrategia
        {
            jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(), //autorizacion de tipo Bearer
            secretOrKey: process.env.SECRET_KEY
        },
        // callback que depende del resultado de la extraccion
        async (jwt_payload, done) => {
            try {
                let user = await User.findOne({ mail: jwt_payload.mail }, '-_id -__v -password')
                if (user) { // si esxite user, INYECTA al objeto de requerimientos el usuario con la propiedad user
                    return done(null, user) // primer parametro el error(si ocurre) y segundo parametro son los datos del user
                } else {
                    return done(null)
                }
            } catch (error) {
                return done(error)
            }
        }
    )
)