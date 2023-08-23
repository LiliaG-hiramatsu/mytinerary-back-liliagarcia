import City from '../../models/City.js'

export default async (req, res, next) => {
    try {
        //console.log(req.query) //   QUERY es un objeto con todas las consultas/igualdades a buscar en la base de datos
        // NO ES BUENA PRACTICA pasar directamente req.query en el find()
        let objetoDeBuqueda = {}
        let objetoDeOrdenamiento = {}
        if (req.query.admin_id) {
            objetoDeBuqueda.admin_id = req.query.admin_id
        }
        if (req.query.city) {
            objetoDeBuqueda.city = new RegExp('^' + req.query.city.trim(), 'i')
            //console.log()
            //new RegExp(req.query.title, 'i') i de includes
        }
        if (req.query.sort) {
            objetoDeOrdenamiento.city = req.query.sort
            // agrego la propiedad por la cual quiero ordenar
            // si es 1 ordena ascendentemente
            // si el -1 ordena descendentemente
        }
        let allCities = await City
            .find(objetoDeBuqueda, 'country city photo smalldescription admin_id')
            .populate('admin_id', 'photo name mail -_id')   // El segundo parametro de populate trae los datos que quiero popular
            .sort(objetoDeOrdenamiento)
        // {} dentro del find es el objeto de busqueda (para filtros)
        if (allCities.length > 0) {
            return res.status(200).json({
                succes: true,
                message: 'cities found',
                response: allCities
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