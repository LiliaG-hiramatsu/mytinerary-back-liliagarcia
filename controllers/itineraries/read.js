import Itinerary from '../../models/Itinerary.js'

export default async (req, res, next) => {
    try {
        let allItineraries = await Itinerary
            .find({}, 'name city_id price duration photo')
            .populate('city_id', 'country city description')   // El segundo parametro de populate trae los datos que quiero popular
        // {} dentro del find es el objeto de busqueda (para filtros)
        if (allItineraries.length > 0) {
            return res.status(200).json({
                succes: true,
                message: 'itineraries found',
                response: allItineraries
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