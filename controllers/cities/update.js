import City from '../../models/City.js'

export default async (req, res, next) => {
    try {
        let updateCity = await City.findByIdAndUpdate(
            req.params.u_id,
            req.body,
            { new: true }
        ).select('country photo city')
        if (updateCity) {
            return res.status(200).json({
                succes: true,
                message: 'city updated',
                response: updateCity
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