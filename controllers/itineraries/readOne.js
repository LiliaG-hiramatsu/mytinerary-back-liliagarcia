import Itinerary from '../../models/Itinerary.js'

export default async (req, res, next) => {
    try {
        let oneItinerary = await Itinerary.findById(req.params.Itinerary_id)
        if (oneItinerary) {
            return res.status(200).json({
                succes: true,
                message: 'itinerary found',
                response: oneItinerary
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