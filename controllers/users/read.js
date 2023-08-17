import User from '../../models/User.js'

export default async (req, res) => {
    try {
        let allUsers = await User.find()
        // el metodo find busca todos los usuarios
        return res.status(200).json({
            succes: true,
            message: 'users found',
            response: allUsers
        })
    } catch (error) {
        return res.status(400).json({
            succes: false,
            message: 'not found',
            response: null
        })
    }
}