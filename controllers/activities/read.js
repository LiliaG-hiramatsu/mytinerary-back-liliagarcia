import Activity from '../../models/Activity.js'

export default async (req, res, next) => {
    try {
        let allActivities = await Activity
            .find({}, 'name photo itinerary_id')
            .populate('itinerary_id', 'name price photo')
        if (allActivities.length > 0) {
            return res.status(200).json({
                succes: true,
                message: 'activities found',
                response: allActivities
            })
        } else {
            return res.status(404).json({
                succes: false,
                message: 'not found',
                response: null
            })
        }
        
    } catch (error) {
        next(error)
    }
}