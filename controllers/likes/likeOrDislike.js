// agregar/sacar like
import Like from "../../models/Like.js";

export default async(req, res, next) => {
    try {
        if (req.isLiked) {
            let like = await Like.findOneAndDelete(req.body)
            return res.status(200).json({
                success: true,
                message: "like destroyed",
                response: null
            })
        } else {
            let like = await Like.create(req.body)
            // esta mal que el user_id venga por el body (los datos del usuario son datos sensibles),
            // por eso incorporamos passport que es el que tiene que cargar con esos datos.
            return res.status(201).json({
                success: true,
                message: "like created",
                response: like
            })
        }
    } catch (error) {
        next(error)
    }
}