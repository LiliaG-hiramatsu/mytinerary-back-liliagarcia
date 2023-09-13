import Like from "../../models/Like.js";

export default async(req, res, next) => {
    try {
        let queries = {}
        // el itinerary_id no viene en el body, viene en una query o en un param porque son datos que vienen del cliente
        if (req.query.itinerary_id) {
            queries.itinerary_id = req.query.itinerary_id
        }
        let count = await Like.countDocuments(queries)
        return res.status(200).json({
            success: true,
            message: "likes from itinerary",
            response: count
        })
    } catch (error) {
        next(error)
    }
}