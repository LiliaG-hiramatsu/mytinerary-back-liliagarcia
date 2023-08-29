import Itinerary from '../../models/Itinerary.js'

export default async (req, res, next) => {
    try {
        let queries = {}
        if (req.query.city_id) {
            //si existe esta consulta
            //llename el obj de consultas para hacer el filtro
            queries.city_id = req.query.city_id
            //al obj de filtro le agrego la propiedad de busqueda y le asigno el valor que me envia el cliente en la query
        }
        let allItineraries = await Itinerary
            .find(queries, '-createdAt -updatedAt -__v')
            .populate({
                path: "city_id",
                select: "city photo admin_id",
                populate: {
                    path: "admin_id",
                    select: "name"
                }
            })
            //.populate('city_id', 'city photo -_id')   // El segundo parametro de populate trae los datos que quiero popular
        // {} dentro del find es el objeto de busqueda (para filtros)
        if (allItineraries.length > 0) {
            return res.status(200).json({
                success: true,
                message: 'itineraries found',
                response: allItineraries
            })
        } else {
            return res.status(404).json({
                success: false,
                message: 'not found',
                response: null
            })
        }
        
    } catch (error) {
        next(error)
    }
}