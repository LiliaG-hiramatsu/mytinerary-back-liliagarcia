import City from '../../models/City.js'

export default async (req, res, next) => {
    try {
        let oneCity = await City.findById(req.params.city_id)
        if (oneCity) {
            return res.status(200).json({
                succes: true,
                message: 'city found',
                response: oneCity
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