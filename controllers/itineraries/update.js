import Itinerary from '../../models/Itinerary.js'

export default async (req, res, next) => {
    try {
        let updateItinerary = await Itinerary.findByIdAndUpdate(
            req.params.u_id,
            req.body,
            { new: true }
        ).select('name price duration')
        if (updateItinerary) {
            return res.status(200).json({
                succes: true,
                message: 'Itinerary updated',
                response: updateItinerary
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