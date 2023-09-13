import Like from "../models/Like.js";

export default async(req, res, next) => {
    req.body.user_id = req.user._id  // como ya no me lo envia el cliente, se lo tengo que incorporar manualmente (pq necesito ese id)
    let one = await Like.findOne(req.body) // Luego de incorporar passport, req.body tiene solo los datos del itinerario
    if (one) {
        req.isLiked = true
    } else {
        req.isLiked = false
    }
    return next()
}