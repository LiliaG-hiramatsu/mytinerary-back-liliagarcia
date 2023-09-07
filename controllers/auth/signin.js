//La unica funcion que cumple este controlador es enviar una respuesta al cliente
export default (req, res, next) => {
    try {
        return res.status(200).json({
            success: true,
            message: "user logged in",
            response: {
                //TOKEN + DATOS DEL USURIO
                token: req.token,
                user: req.user
            }
        })
    } catch (error) {
        next(error)
    }
}