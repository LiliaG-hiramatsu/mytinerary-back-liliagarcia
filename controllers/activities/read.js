import Activity from '../../models/Activity.js'

export default async (req, res, next) => {
    try {
        let queries = {}
        if (req.query.itinerary_id) {
            queries.itinerary_id = req.query.itinerary_id
        }
        let allActivities = await Activity
            .find(queries, '-createdAt -updatedAt -__v')
            .populate({
                path: "itinerary_id",
                select: "_id name price photo"
            })
        if (allActivities.length > 0) {
            return res.status(200).json({
                success: true,
                message: 'activities found',
                response: allActivities
            })
        } else {
            return res.status(404).json({
                success: false,
                message: 'activities not found',
                response: null
            })
        }
        
    } catch (error) {
        next(error)
    }
}