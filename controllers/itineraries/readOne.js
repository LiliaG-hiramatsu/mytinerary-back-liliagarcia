import Itinerary from '../../models/Itinerary.js'

export default async (req, res, next) => {
    try {
        let { id } = req.params
        let oneItinerary = await Itinerary.findById(id)
        if (oneItinerary) {
            return res.status(200).json({
                succes: true,
                message: 'itinerary found',
                response: oneItinerary
            })
        } else {
            return res.status(404).json({
                succes: false,
                message: 'itinerary not found',
                response: null
            })
        }
        
    } catch (error) {
        next(error)
    }
}