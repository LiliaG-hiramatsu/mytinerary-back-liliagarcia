import User from '../../models/User.js'

export default async (req, res) => {
    try {
        let updatedUser = await User.findByIdAndUpdate(
            req.params.u_id,
            req.body,
            { new: true } // ES OPCIONAL, por defecto es false y devuelve el objeto ANTES de la modificacion
            // true: devuelve el objeto luego de la modificacion
        ).select('name photo mail -_id')
        return res.status(200).json({
            succes: true,
            message: 'user updated',
            response: updatedUser
        })
    } catch (error) {
        return res.status(400).json({
            succes: false,
            message: 'not updated',
            response: null
        })
    }
}