import Itinerary from '../../models/Itinerary.js'

export default async (req, res, next) => {
    try {
        let { id } = req.params
        let deletedItinerary = await Itinerary.findByIdAndDelete(id)
        if (deletedItinerary) {
            return res.status(200).json({
                success: true,
                message: 'itinerary deleted',
                response: deletedItinerary._id
            })
        } else {
            return res.status(404).json({
                success: false,
                message: 'itinerary not deleted',
                response: null
            })
        }
    } catch (error) {
        next(error)
    }
}