import jwt from "jsonwebtoken";

export default (req, res, next) => {
    try {
        let token = jwt.sign(
            { mail:req.user.mail },     //objeto a convertir en token (que nos sirva para identificar al usuario)
            process.env.SECRET_KEY,     //palabra que sirve de llave para tokenizar
            { expiresIn: 60*60*24*7 }   //tiempo de expiracion en segundos (una semana)
        )
        req.token = token
        return next()
    } catch (error) {
        return next(error)
    }
}